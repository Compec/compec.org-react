// import { Button, List, message, Modal } from "antd";
import React, { useEffect, useRef, useState } from "react";
// import { Session } from "types/src/Session.model";
// import { useFirestore } from "../../core/store/FirestoreHook";
// import IESelect from "../common/IESelect";
// import Textbox from "../common/Textbox";
import { cloneDeep } from "lodash";
// import { useFirebase } from "../../core/store/firebaseHook";
import QrReader from "react-qr-reader";
import { UseAuth } from "./authcontext.js";
import axios from "axios";
import { auth } from "firebase";

const QRValidation = (props) => {
    //   const [selectedSession, _setSelectedSession] = useState<Session | null>(null);
    //   const [sessions, setSessions] = useState<Session[]>([]);
    //   const selectedSessionRef = useRef(selectedSession);

    //   useEffect(() => {
    //     setstate({});
    //   }, [selectedSession]);

    //   const setSelectedSession = (s: Session | null) => {
    //     selectedSessionRef.current = s;
    //     _setSelectedSession(s);
    //   };

    //   const { getSessionList, getCurrentSession, takeAttendanceByAdmin } =
    //     useFirestore();
    //   const { eventID } = useFirebase();
    //   const eventIDRef = useRef(eventID);
    //   useEffect(() => {
    //     getSessionList().then((_sessions: Session[]) => {
    //       console.log(_sessions);
    //       setSessions(_sessions);
    //       getCurrentSession().then((id: string) =>
    //         setSelectedSession(_sessions.find((s) => s.id === id) || null)
    //       );
    //     });
    //   }, []);

    const [data, setData] = React.useState("");

    const timeout = useRef(0);
    const { database, currentUser } = UseAuth();

    //   type scanData = {
    //     counter: number;
    //     lastScanTime: number;
    //     isAllowed: boolean;
    //     sub?: any;
    //   };
    const [state, _setstate] = useState({});
    const [newMemberData, setNewMemberData] = useState({});
    const [previousMemberName, setPreviousMemberName] = useState("");
    const [newMemberUID, setNewMemberUID] = useState("");
    const stateref = useRef(state);
    const setstate = (a) => {
        stateref.current = a;
        _setstate(a);
    };

    var frameColors = {
        white: "white",
        orange: "orange",
        red: "red",
        green: "green",
    }

    const [frameColor, _setframeColor] = useState(frameColors.white);
    const [currentSubmission, setcurrentSubmission] = useState(null);
    const [buttonVisibility, setButtonVisibility] = useState(false);
    const [alertVisibility, setAlertVisibility] = useState(false);
    const [msg, setMsg] = useState("");
    const [success, setSuccess] = useState();

    const onClickHandler = async () => {
        const name = newMemberData.nameAndSurname
        setNewMemberData({});
        setButtonVisibility(false);
        // setstate({});
        //console.log("button clicked");
        //console.log("newmember", newMemberUID);
        let idToken = await auth().currentUser.getIdToken();

        axios({
            method: 'post',
            url: process.env.REACT_APP_BACKEND_PAYMENT_URL,
            data: {
                memberuid: newMemberUID
                //yonetimuid: currentUser.uid
            },
            headers: {
                authorization: "Bearer " + idToken
            }
        })    
        .then(res => {
            //console.log("prev", previousMemberName)
            if (res.data.success) {
                setAlertVisibility(true);
                setMsg("" + name + " has been verified")
                console.assert(name === newMemberData.nameAndSurname, "Efe Doğru")
                setSuccess(res.data.success)
            } else {
                setAlertVisibility(true);
                setMsg(res.data.msg);
                setSuccess(res.data.success);
            }
        })
        .catch(err => {
            setAlertVisibility(true);
            setMsg(err);
            setSuccess(false);
        })
    }

    const setFrameColor = (color) => {
        _setframeColor(color);

        clearTimeout(timeout.current);
        timeout.current = window.setTimeout(() => {
            _setframeColor(frameColors.white);
        }, 3000);
    };

    //if you have another AudioContext class use that one, as some browsers have a limit
    var audioCtx = new window.AudioContext();

    //All arguments are optional:

    //duration of the tone in milliseconds. Default is 500
    //frequency of the tone in hertz. default is 440
    //volume of the tone. Default is 1, off is 0.
    //type of tone. Possible values are sine, square, sawtooth, triangle, and custom. Default is sine.
    //callback to use on end of tone
    function beep(
        duration,
        frequency,
        volume,
        type,
        callback
    ) {
        var oscillator = audioCtx.createOscillator();
        var gainNode = audioCtx.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        if (volume) {
            gainNode.gain.value = volume;
        }
        if (frequency) {
            oscillator.frequency.value = frequency;
        }
        if (type) {
            oscillator.type = type;
        }
        if (callback) {
            oscillator.onended = callback;
        }

        oscillator.start(audioCtx.currentTime);
        oscillator.stop(audioCtx.currentTime + (duration || 500) / 1000);
    }

    const onScanChange = async (result) => {
        let text = result.trim();

        let c = { ...stateref.current };
        // console.log("read", text);

        if (!c[text]) {
            // TODO: takeAttendanceByAdmin( "subID", "sessionID");
            // eventIDRef.current
            //   console.log("takeAttendance", selectedSessionRef.current);

            //   if (selectedSessionRef.current) {
            //     let res = await takeAttendanceByAdmin({
            //       sessionID: selectedSessionRef.current.id,
            //       subID: encodeURIComponent(text),
            //     });

            //     console.log(res);
            //     if (res.isAllowed) {
            //       beep(300, 1330);
            //       setFrameColor(frameColors.green);
            //       c[text] = {
            //         counter: (c[text]?.counter || 0) + 1,
            //         lastScanTime: Date.now().valueOf(),
            //         isAllowed: true,
            //         sub: res,
            //       };
            //     } else {
            //       beep(300, 400);

            //       setFrameColor(frameColors.red);
            //       c[text] = {
            //         counter: (c[text]?.counter || 0) + 1,
            //         lastScanTime: Date.now().valueOf(),
            //         isAllowed: false,
            //       };
            //     }
            //   } else {
            //     console.log(
            //       "🚀 ~ file: AttendanceManager.tsx ~ line 108 ~ AttendanceManager ~ selectedSession",
            //       selectedSessionRef.current
            //     );

            //     Modal.destroyAll();
            //     Modal.error({ title: "No Selected Session" });
            //   }
        } else {
            let diff = Date.now().valueOf() - c[text].lastScanTime;
            let color = c[text].isAllowed ? frameColors.orange : frameColors.red;
            let call = () => (c[text].isAllowed ? beep(300, 1330) : beep(300, 400));
            if (1000 * 3 < diff && diff < 1000 * 5) {
                setFrameColor(color);
            }
            if (diff > 1000 * 5) {
                setFrameColor(color);
                // call();
                c[text] = {
                    ...c[text],
                    counter: (c[text]?.counter || 0) + 1,
                    lastScanTime: Date.now().valueOf(),
                };
            }
            // timestamps are in milliseconds
            // second read
        }

        setData(text || "");
        // console.log(c);

        setstate(c);
        //console.log(text)
        const uid = text.match(/^https:\/\/compec.org\/user\/(.*)$/)?.[1]
        if (!uid) return alert("Compec'e ait QR kod kullanın.")
        const docRef = database.collection("users").doc(uid);
        docRef.get()
            .then(doc => {
                if (doc.exists) {
                    setNewMemberData(doc.data());
                    setNewMemberUID(doc.id)
                    //console.log("doc.uid", doc.id)
                    setButtonVisibility(true);
                } else {
                    setAlertVisibility(true);
                    setMsg("Bu kişi veritabanında mevcut değil!");
                    //burayı doldur
                }
            })
        // const q = coll.where("emailAddress", "==", text);
        // q.get()
        // .then((querySnapshot) => {
        //     querySnapshot.forEach((doc) => {
        //         // doc.data() is never undefined for query doc snapshots
        //         //console.log(doc.id, " => ", doc.data());
        //         setNewMemberData(doc.data());
        //         console.log(newMemberData);
        //         setButtonVisibility(true);


        //     });
        // })
        // .catch((error) => {
        //     console.log("Error getting documents: ", error);
        // });
    };

    return (
        <div className="container" style={{textAlign: "center"}}>
            {/* <div>
        <span>currrent session: </span>
        <span>{selectedSession?.title || selectedSession?.id}</span>
      </div>
      <span> eventid:{eventID.id}</span> */}

            {/* <select
        value={selectedSession?.id}
        onChange={(e) => {
          setSelectedSession(
            sessions.find((s) => s.id === e.target.value) || null
          );
        }}
      >
        <option value={""}></option>
        {sessions.map((s) => {
          return <option value={s.id}>{s.title || s.id}</option>;
        })}
      </select> */}
            <h1>Yeni Üye Ödeme Onaylama</h1>
            {/* <div
        style={{
          backgroundColor: frameColor,
          height: "3rem",
          width: "100%",
          visibility: frameColor === "white" ? "hidden" : "visible",
        }}
      >
        <div>{data}</div>
        <div>
          {`${state[data]?.sub?.responses.name.response || ""} ${
            state[data]?.sub?.responses.surname.response || ""
          }`}
        </div>
      </div> */}
        <div style={{display: "flex", justifyContent: "center"}}>
            <QrReader
                delay={300}
                onError={(e) => {
                    console.error(e);
                }}
                onScan={(e) => {
                    if (e) {
                        onScanChange(e);
                    }
                }}
                style={{ maxWidth: "500px", width: "100%", maxHeight: "500px" }}
            />
        </div>
        <br/>
        {alertVisibility && <div id="alert" className={success ? "alert alert-success" : "alert alert-danger"}>{msg}</div>}
        <div style={{display: "flex", justifyContent: "center"}}>
            <button class="btn btn-lg btn-success" disabled={!buttonVisibility} onClick={onClickHandler}>
                Onayla
            </button>
        </div>
        <br/>
        <div style={{textAlign: "center"}}>
            <p>{newMemberData ? newMemberData.nameAndSurname : ""}</p>
            <p>{newMemberData ? newMemberData.emailAddress : ""}</p>
            <p>{newMemberData ? newMemberData.department : ""}</p>
            <p>{newMemberData ? newMemberData.grade : ""}</p>
        </div>
            {/* <p>{data}</p>
      <p>{data}</p>
      <p>{data}</p> */}

            {/* <button
        onClick={() => {
          setstate({});
        }}
      >
        reset
      </button> */}
    
            {Object.entries(state).map(([key, val], i) => {
                return (
                    <div key={i}>
                        <div>{key}</div>
                        <pre style={{ height: "4rem" }}>{JSON.stringify(val, null, 2)}</pre>
                    </div>
                );
            })}
        </div>
    );
};

export default QRValidation;