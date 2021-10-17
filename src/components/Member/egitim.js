import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { UseAuth } from './authcontext';

function EgitimAnket() {

	const { currentUser, database, userData } = UseAuth();
	const [hideButton, setHideButton] = useState(false);
	const [alertVisibility, setAlertVisiblity] = useState(false);
	const [alertMessage, setAlertMessage] = useState("");
	const [success, setSuccess] = useState();

	async function onClickHandler() {
		let inputElements = document.getElementsByClassName("checkBox");
		let result = [];

		for (let i = 0; i < inputElements.length; i++) {
			if(inputElements[i].checked){
				result.push(inputElements[i].value);
			}
		}

		if (result.length === 0) {

			setSuccess(false);
			setAlertMessage("Lütfen seçim yapınız!");
			setAlertVisiblity(true);

		} else {

			let objectToPush = {};

			result.forEach(item => {
				objectToPush[item] = true;
				objectToPush[`${item}_ts`] = Date.now();
			})
			//objectToPush.timestamp = Date.now()

			await database.collection("users").doc(currentUser.uid).update({courses: objectToPush})
            		.then(() => {
				setAlertVisiblity(true);
				setSuccess(true);
				setAlertMessage("Eğitimlerinizi başarıyla seçtiniz! "); //Profilinizden seçtiğiniz alt kurulları görüntüleyebilirsiniz.");
			})
			.catch(err => {
				setAlertVisiblity(true);
				setSuccess(false);
				setAlertMessage("Seçim sırasında bir hata oldu! Lütfen bize ulaşın. Oluşan hata: " + err);
			})
			
			setHideButton(true);
		}
	}

	return(
		<div className="container AltKurulAnket">
			<Helmet>
				<title>Eğitimlerini Seç - Boğaziçi Üniversitesi Bilişim Kulübü</title>
				<meta name="description"
				content="Boğaziçi Üniversitesi Bilişim Kulübü üye sisteminde alt kurullarını seç." />
			</Helmet>
			<div className="card">
				<div className="card-body">
				<h1>Eğitim Seçimi</h1> <hr/>
				<p>
					Lütfen WhatsApp gruplarına alınmak istediğiniz eğitimleri seçiniz.<br/>
					Bu seçim toplu alım içindir. Daha sonraki zamanlarda eğitimden sorumlu liderlerden birine ulaşarak da alt kurul WhatsApp grubuna girebilirsiniz.
				</p>
				
				<h3><b>Eğitimler</b></h3><hr/>
				<input className="checkBox" type="checkbox" value="LCMK7I7PQX4QKfRlIBJN" name="algo" defaultChecked={userData.courses.LCMK7I7PQX4QKfRlIBJN}/> C++ ile ALGO101 <br/><br/>
				<input className="checkBox" type="checkbox" value="fTLZJZE2NHEzYRxyyZjz" name="java" defaultChecked={userData.courses.fTLZJZE2NHEzYRxyyZjz}/> Java <br/><br/>
				<input className="checkBox" type="checkbox" value="AquuRO9TM4heaXTQ8Bbz" name="python" defaultChecked={userData.courses.AquuRO9TM4heaXTQ8Bbz}/> Python <br/><br/>
				<input className="checkBox" type="checkbox" value="JFFbaCCQrX5VU2yt9zjc" name="webdev" defaultChecked={userData.courses.JFFbaCCQrX5VU2yt9zjc}/> Web Geliştirme <br/><br/>
				<input className="checkBox" type="checkbox" value="B59aA3E8LrwiuDqPtm2j" name="unity" defaultChecked={userData.courses.B59aA3E8LrwiuDqPtm2j}/> Unity ile Oyun Geliştirme <br/><br/>
				{/*<input className="checkBox" type="checkbox" value="tasarim" name="tasarim" /> Dijital Tasarım <br/><br/>*/}

				<button className="btn btn-primary" onClick={onClickHandler} disabled={hideButton} style={{marginBottom: "20px"}}>Kaydet</button>
				{alertVisibility && <div className={success ? "alert alert-success" : "alert alert-danger"}>{alertMessage}</div>}
				</div>
			</div>
		</div>
	)
}

export default EgitimAnket;