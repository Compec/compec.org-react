import React from 'react';
import { UseAuth } from './authcontext';
import { Spinner } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function Profile(){

	const { userData, logout } = UseAuth();
	const history = useHistory();

	function logoutHandler(){
		logout()
		.then(() => {
			history.push("/member/login");
		})
		.catch((e) => {
			alert("Çıkış yapılamadı lütfen tekrar deneyin! Sorun: " + e);
		});
	}

	return(
		<div className="container profile-page">
			<Helmet>
				<title>Üye Sistemi Profilim - Boğaziçi Üniversitesi Bilişim Kulübü</title>
				<meta name="description"
				content="Boğaziçi Üniversitesi Bilişim Kulübü üye sistemi profil." />
			</Helmet>
			{userData ? (
				<div>
					<div className="row d-flex justify-content-center">
						<div class="col-9">
							<Link to="/member/home" className="text-reset">
								<div className="btn btn-primary">Ana sayfaya geri dön</div>
							</Link>
							<div class="card mb-3 mt-3">
								<div class="card-body">
									<div class="row">
										<div className="col">
											<h1>Profil</h1><hr/>
										</div>
									</div>
									<div class="row">
										<div class="col-sm-4">
											<h6 class="mb-0">Ad Soyad</h6>
										</div>
										<div class="col-sm-8 text-secondary">
											{userData.name + " " + userData.surname}
										</div>
									</div>
									<hr />
									<div class="row">
										<div class="col-sm-4">
											<h6 class="mb-0">Bölüm</h6>
										</div>
										<div class="col-sm-8 text-secondary">
											{userData.bolum}
										</div>
									</div>
									<hr />
									<div class="row">
										<div class="col-sm-4">
											<h6 class="mb-0">Sınıf</h6>
										</div>
										<div class="col-sm-8 text-secondary">
											{userData.sinif}
										</div>
									</div>
									<hr />
									<div class="row">
										<div class="col-sm-4">
											<h6 class="mb-0">Boğaziçi Mail Adresi</h6>
										</div>
										<div class="col-sm-8 text-secondary">
											{userData.bounEmail}
										</div>
									</div>
									<hr />
									<div class="row">
										<div class="col-sm-4">
											<h6 class="mb-0">Kişisel Mail Adresi</h6>
										</div>
										<div class="col-sm-8 text-secondary">
											{userData.personalEmail}
										</div>
									</div>
									<hr />
									<div class="row">
										<div class="col-sm-4">
											<h6 class="mb-0">Telefon</h6>
										</div>
										<div class="col-sm-8 text-secondary">
											{userData.telephone}
										</div>
									</div>
									<hr/>
									<div class="row">
										<div class="col">
											<p className="mb-0">
												Bilgilerinizde bir hata varsa veya şifrenizi değiştirmek isterseniz lütfen bize ulaşın.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="btn btn-primary" onClick={logoutHandler}>
								Çıkış Yap
							</div>
						</div>
					</div>
				</div>
			) : <div className="text-center">
					<Spinner animation="border" variant="dark" size="lg" />
				</div>}
		</div>
	)
}

export default Profile;