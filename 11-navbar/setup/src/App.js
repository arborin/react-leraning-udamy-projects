import React from "react";
import Navbar from "./Navbar";
// import Sidebar from "./Sidebar";
function App() {
    const sendRequest = () => {
        const url = "http://45.9.46.62:8887/api/index.php";

        const myHeaders = new Headers();

        myHeaders.append(
            "x-smstoken",
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9jaXRhZGVsaS5jb20iLCJhdWQiOiJodHRwOlwvXC9jaXRhZGVsaS5jb20iLCJpYXQiOjE2NjkxMDEyMzEsIm5iZiI6MTY2OTEwMTIzMSwiZXhwIjoxNjY5MTAxNDExLCJkYXRhIjp7ImlwIjoiNDUuOS40Ni42MiIsImlwX2xvY2F0aW9uIjoiZ2xvYmFsIiwib3NfYnJvd3NlciI6IlBvc3RtYW5SdW50aW1lXC83LjI5LjIiLCJhY3RpdmF0ZSI6MSwiaWQiOiI0NjkiLCJpZF9zdGFmZiI6IjQxOSIsInVzZXJuYW1lIjoibi5rb2JhaWR6ZSIsImZ1bGxuYW1lIjoiXHUxMGRjXHUxMGQ4XHUxMGQ5XHUxMGQwIFx1MTBkOVx1MTBkZFx1MTBkMVx1MTBkMFx1MTBkOFx1MTBlYlx1MTBkNCIsImNhdCI6IjEiLCJkZWZhdWx0X2lkX21vZHVsaSI6IjI3NSIsIm11bHRpX2FjY2VzcyI6IjAiLCJzbXNfY29kZSI6IjAyOTQifX0.Va0eW_PUrnCRPT2XFovMyz2HwtWpaQKws0OPyGYBbh8"
        );

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: "",
            redirect: "follow",
        };

        fetch(url, requestOptions)
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.log("error", error));
    };
    return (
        <>
            <Navbar />
            {/* <Sidebar /> */}
            <button className="btn" onClick={sendRequest}>
                Send request
            </button>
        </>
    );
}

export default App;
