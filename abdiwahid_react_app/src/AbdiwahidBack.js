import React, { useEffect, useState } from "react";
import firebase from "firebase/app";
import requestEntries from "./SubmitTo";
import UpdataDataBase from "./SubmitTo";
import { Jumbotron } from "react-bootstrap";

let targetLocationInFireBase;
export default function AbdiwahidBack(props) {
  const [addPostToFireBase, updateClinetSide] = useState("");
  const [fireBase, setFirebaseUp] = useState("");
  try {
    useEffect(() => {
      if (requestEntries !== null || UpdataDataBase !== undefined || "" || fireBase !== null) {
        const targetValueInDataBase = firebase.database().ref("Abdiwahid_Bishar_Answers");
        targetValueInDataBase.on("value", (snapshot) => {
          const theValue = snapshot.val();
          setFirebaseUp(theValue);
        });
      }
    }, []);
  } catch (err) {
    targetLocationInFireBase = null;
    updateClinetSide(err.message);
  }
  const handleChanges = (event) => {
    updateClinetSide(event.target.value);
  };

  const thePostsToShow = (eventListner) => {
    eventListner.preventDefault();

    const newQuestionAdded = {
      text: addPostToFireBase,
      time: firebase.database.ServerValue.TIMESTAMP,
      count: 0,
      
    };
    targetLocationInFireBase = firebase.database().ref("Abdiwahid_Bishar_Answers");
    targetLocationInFireBase.push(newQuestionAdded);
    updateClinetSide("");
}
  return (
    <Jumbotron>
        
      <div className="form-content">
      <label for="message-input">Question:</label>
            <textarea className="Abdiwahid_Hajir Abdiwahid-text" id="message-input" name="message" required placeholder="Enter your message or question."
                maxlength="1200"
          value={addPostToFireBase}
          onChange={handleChanges}>
          </textarea>
        <div className="Abdiwahid-text">
          {" "}
          <button className="btn-dark edit-btn" onClick={thePostsToShow}>
            Submit Question
          </button>
        </div>
      </div>
   
    </Jumbotron>
  );
}