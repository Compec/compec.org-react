import React, {useContext, useState, useEffect} from 'react';
import {auth, database} from './firebase';
const AuthContext = React.createContext();

export function UseAuth(){
	return useContext(AuthContext);
};

export function AuthProvider({children}){
	const [currentUser, setCurrentUser] = useState();
	const [loading, setLoading] = useState(true);
	const [userData, setUserData] = useState();
	const [announcements, setAnnouncements] = useState([]);
	const [events, setEvents] = useState([]);
	const [meetings, setMeetings] = useState([]);

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(async user => {
			setCurrentUser(user);
			if(user) {
				await database.ref("/members/" + user.uid).once("value").then((data) => {
					let altkurullar = Object.keys(data.val().altkurullar);
					let altKurullar = "";
					if(altkurullar.some(element => element === "bbo")) altKurullar += "Boğaziçi Bilişim Ödülleri, ";
					if(altkurullar.some(element => element === "devteam")) altKurullar += "DevTeam, ";
					if(altkurullar.some(element => element === "dijgir")) altKurullar += "Dijital Girişimcilik, ";
					if(altkurullar.some(element => element === "gamedev")) altKurullar += "Oyun Geliştirme, ";
					if(altkurullar.some(element => element === "pr")) altKurullar += "PR, ";
					if(altkurullar.some(element => element === "tech")) altKurullar += "Teknoloji, ";
					if(altkurullar.some(element => element === "datasci")) altKurullar += "Veri Bilimi, ";
					if(altkurullar.some(element => element === "algo")) altKurullar += "C++ ile ALGO101, ";
					if(altkurullar.some(element => element === "java")) altKurullar += "Java, ";
					if(altkurullar.some(element => element === "python")) altKurullar += "Python, ";
					if(altkurullar.some(element => element === "webdev")) altKurullar += "Web Geliştirme, ";
					if(altkurullar.some(element => element === "unity")) altKurullar += "Unity, ";
					altKurullar = altKurullar.slice(0, -2);
					setUserData({
						name: data.val().name,
						surname: data.val().surname,
						bolum: data.val().bolum,
						sinif: data.val().sinif,
						bounEmail: data.val().bounEmail,
						personalEmail: data.val().personalEmail,
						telephone: data.val().telephone,
						memberID: data.val().memberID,
						altkurullar: altKurullar
					})
				})
				database.ref("/announcements").orderByChild("active").equalTo(true).once("value")
				.then((data) => {
					let keys = Object.keys(data.val());
					let result = [];
					keys.forEach((key, index) => {
						result.push(data.val()[key]);
					})
					setAnnouncements(result);
				})

				database.ref("/events").orderByChild("active").equalTo(true).once("value")
				.then((data) => {
					let keys = Object.keys(data.val());
					let result = [];
					keys.forEach((key, index) => {
						result.push(data.val()[key]);
					});
					setEvents(result);
				})

				database.ref("/meetings").orderByChild("active").equalTo(true).once("value")
				.then((data) => {
					let keys = Object.keys(data.val());
					let result = [];
					keys.forEach((key, index) => {
						result.push(data.val()[key]);
					});
					setMeetings(result);
				})
			}
			setLoading(false);
		})
		return unsubscribe;
	}, []);

	function login(email, password){
		return auth.signInWithEmailAndPassword(email, password);
	}

	function logout(){
		return auth.signOut();
	}

	const value = { currentUser, userData, login, logout, announcements, meetings, events, database };

	return(
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	)
};