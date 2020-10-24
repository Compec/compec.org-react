import React, { useState, useEffect} from 'react';
import { UseAuth } from "./authcontext";
import { Link } from "react-router-dom";
import Duyuru from "./duyuru";
import { Spinner } from "react-bootstrap";
import { Helmet } from "react-helmet";

function MemberHome(){
	const { announcements, meetings, events} = UseAuth();
	const [duyurular, setDuyurular] = useState();
	const [toplantilar, setToplantilar] = useState();
	const [etkinlikler, setEtkinlikler] = useState();

	useEffect(() => {
		setDuyurular(announcements);
		setEtkinlikler(events);
		setToplantilar(meetings);
	})

	return(
		<div className="container memberHome">
			<Helmet>
				<title>Üye Sistemi Ana Sayfa - Boğaziçi Üniversitesi Bilişim Kulübü</title>
				<meta name="description"
				content="Boğaziçi Üniversitesi Bilişim Kulübü üye sistemi ana sayfası." />
			</Helmet>
			{(duyurular && toplantilar && etkinlikler) ? (
				<div className="row d-flex justify-content-center">
				<div className="col-9">
					<Link to="/member/profile" className="text-reset">
						<div className="btn btn-primary">Profilim</div>
					</Link>
					<div class="card mb-3 mt-3">
						<div class="card-body">
							<div class="row">
								<div className="col">
									<h1>Ana Sayfa</h1><hr/>
								</div>
							</div>
							<div class="row">
								<div className="col">
									<h2>Duyurular</h2><hr/>
								</div>
							</div>
							{duyurular.map(element => {
								return(
									<div>
										<Duyuru
											link={element.link}
											desc={element.desc}
											title={element.title}
											buttonText={element.buttonText}
										/>
										<hr/>
									</div>
								)
							})}
							<div class="row">
								<div className="col">
									<h2>Yaklaşan Etkinlikler</h2><hr/>
								</div>
							</div>
							{etkinlikler.map(element => {
								return(
									<div>
										<Duyuru
											link={element.link}
											desc={element.desc}
											title={element.title}
											buttonText={element.buttonText}
										/>
										<hr/>
									</div>
								)
							})}
							<div class="row">
								<div className="col">
									<h2>Toplantılar</h2><hr/>
								</div>
							</div>
							{toplantilar.map(element => {
								return(
									<div>
										<Duyuru
											link={element.link}
											desc={element.desc}
											title={element.title}
											buttonText={element.buttonText}
										/>
										<hr/>
									</div>
								)
							})}
						</div>
					</div>
				</div>
			</div>
			) :
			<div>
				<div className="text-center">
					<Spinner animation="border" variant="dark" size="lg" />
				</div>
			</div>
		}
			
		</div>
	)
}

export default MemberHome;