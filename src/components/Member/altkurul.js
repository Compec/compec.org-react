import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { UseAuth } from './authcontext';

function AltKurulAnket() {

	const { currentUser, database, userData} = UseAuth();
	const [hideButton, setHideButton] = useState(false);
	const [alertVisibility, setAlertVisiblity] = useState(false);
	const [alertMessage, setAlertMessage] = useState("");
	const [success, setSuccess] = useState();

	async function onClickHandler() {
		let inputElements = document.getElementsByClassName("checkBox");
		//console.log(inputElements)
		let result = [];

		for (let i = 0; i < inputElements.length; i++) {
			if (inputElements[i].checked) {
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
			
			// objectToPush.timestamp = Date.now()

			await database.collection("users").doc(currentUser.uid).update({subcommittees: objectToPush})
            		.then(() => {
				setAlertVisiblity(true);
				setSuccess(true);
				setAlertMessage("Alt kurullarınızı başarıyla seçtiniz! "); //Profilinizden seçtiğiniz alt kurulları görüntüleyebilirsiniz.");
			})
			.catch(err => {
				setAlertVisiblity(true);
				setSuccess(false);
				setAlertMessage("Seçim sırasında bir hata oldu! Lütfen bize ulaşın. Oluşan hata: " + err);
			})
			setHideButton(true);

			// database.ref("members/" + currentUser.uid).child("altkurullar").update(objectToPush)
			// .then(() => {
			// 	setAlertVisiblity(true);
			// 	setSuccess(true);
			// 	setAlertMessage("Alt kurullarınızı başarıyla seçtiniz! Profilinizden seçtiğiniz alt kurulları görüntüleyebilirsiniz.");
			// })
			// .catch(err => {
			// 	setAlertVisiblity(true);
			// 	setSuccess(false);
			// 	setAlertMessage("Seçim sırasında bir hata oldu! Lütfen bize ulaşın. Oluşan hata: " + err);
			// })
			// setHideButton(true);
		}
	}

	return(
		<div className="container AltKurulAnket">
			<Helmet>
				<title>Alt Kurullarını Seç - Boğaziçi Üniversitesi Bilişim Kulübü</title>
				<meta name="description"
				content="Boğaziçi Üniversitesi Bilişim Kulübü üye sisteminde alt kurullarını seç." />
			</Helmet>
			<div className="card">
				<div className="card-body">
				<h1>Alt Kurul Seçimi</h1> <hr/>
				<p>
					Lütfen katılmak istediğiniz alt kurulları seçiniz.<br/>
				</p>
				<h3><b>Alt Kurullar</b></h3><hr/>
				<input className="checkBox" type="checkbox" value="compecawards" name="bbo" defaultChecked={userData.subcommittees.compecawards}/> Boğaziçi Bilişim Ödülleri <br/><br/>
				<input className="checkBox" type="checkbox" value="devteam" name="devteam" defaultChecked={userData.subcommittees.devteam}/> DevTeam <br/><br/>
				<input className="checkBox" type="checkbox" value="digitalEntr" name="dijgir" defaultChecked={userData.subcommittees.digitalEntr}/> Dijital Girişimcilik <br/><br/>
				<input className="checkBox" type="checkbox" value="internalcomms" name="ii" defaultChecked={userData.subcommittees.internalcomms}/> İç İletişim <br/><br/>
				<input className="checkBox" type="checkbox" value="gamedev" name="gamedev" defaultChecked={userData.subcommittees.gamedev}/> Oyun Geliştirme <br/><br/>
				<input className="checkBox" type="checkbox" value="pr" name="pr" defaultChecked={userData.subcommittees.pr}/> PR <br/><br/>
				<input className="checkBox" type="checkbox" value="tech" name="tech" defaultChecked={userData.subcommittees.tech}/> Teknoloji <br/><br/>
				<input className="checkBox" type="checkbox" value="datascience" name="datasci" defaultChecked={userData.subcommittees.datascience}/> Veri Bilimi <br/><br/><br/>

				{/*<h3><b>Eğitimler</b></h3><hr/>
				<input className="checkBox" type="checkbox" value="algo" name="algo" /> C++ ile ALGO101 <br/><br/>
				<input className="checkBox" type="checkbox" value="java" name="java" /> Java <br/><br/>
				<input className="checkBox" type="checkbox" value="python" name="python" /> Python <br/><br/>
				<input className="checkBox" type="checkbox" value="webdev" name="webdev" /> Web Geliştirme <br/><br/>
				<input className="checkBox" type="checkbox" value="unity" name="unity" /> Unity ile Oyun Geliştirme <br/><br/>
				<input className="checkBox" type="checkbox" value="tasarim" name="tasarim" /> Dijital Tasarım <br/><br/>*/}

				<button className="btn btn-primary" onClick={onClickHandler} disabled={hideButton} style={{marginBottom: "20px"}}>Kaydet</button>
				{alertVisibility && <div className={success ? "alert alert-success" : "alert alert-danger"}>{alertMessage}</div>}
				</div>
			</div>
		</div>
	)
}

export default AltKurulAnket;