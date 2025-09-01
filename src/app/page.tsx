import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";

export default function Home() {

  return (
    <div>

        <Header/>

        <iframe 
          src="https://koalendar.com/e/klippning?embed=true" 
          width="100%"
          height="800"
        />

    <div style={{ justifyContent: "center", alignItems: "center", display: "flex", marginTop: "10px", marginBottom: "50px" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d162.85551429398376!2d14.151129355756387!3d57.73927196337394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465a7241d37e8de5%3A0x877d9ea1bb55cf65!2sBankomat!5e1!3m2!1sen!2sse!4v1756759389340!5m2!1sen!2sse"
        width="600" 
        height="450"
         style={{border:0}} 
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade">
      </iframe>
    </div>

      <Footer/>

        {/* <h1 className="text-3xl font-bold underline text-center">   calendly    </h1>

        <iframe src="https://calendly.com/mamadhazara18"
        style={{width: "100%", minWidth: "320px", height: "700px"}} frameBorder="0"></iframe> */}


        {/* <h1 className="text-3xl font-bold underline text-center">         google calender 1!    </h1>

        <iframe src="https://calendar.google.com/calendar/embed?src=branstark2108%40gmail.com&ctz=Europe%2FStockholm" 
        style={{border: 0}} width="800" height="600">
        </iframe> */}

        {/* <h1 className="text-3xl font-bold underline text-center" >      google calender 2!    </h1>


        <iframe src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ21vbWbhYKTCJxLaOiz-TiVpAUKBS7geSLIDN6K46g0T9ppEwdJnA27tz2SG6QS7rM1b-DmpKwV?gv=true" 
        style={{border: 0}} width="100%" height="1500"></iframe> */}


        {/* <div className="w-full h-[90vh]"> 
          <iframe
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ21vbWbhYKTCJxLaOiz-TiVpAUKBS7geSLIDN6K46g0T9ppEwdJnA27tz2SG6QS7rM1b-DmpKwV?gv=true" 
            style={{ border: 0 }}
            width="100%"
            height="100%"
          />
        </div> */}
  
    </div>
  );
}
