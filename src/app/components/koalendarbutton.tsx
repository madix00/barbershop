// 'use client'

// import { useEffect, useRef } from "react";

// declare global {
//   interface Window {
//     Koalendar: any;
//   }
// }

// export default function KoalendarButton() {
//       const buttonRef = useRef(null);
//   useEffect(() => {
//     // Initialize Koalendar function
//     window.Koalendar = window.Koalendar || function() {
//       (window.Koalendar.props = window.Koalendar.props || []).push(arguments);
//     };

//     // Load the Koalendar script
//     const script = document.createElement("script");
//     script.src = "https://koalendar.com/assets/widget.js";
//     script.async = true;
//     script.onload = () => {
//       // Initialize the widget after the script loads
//       window.Koalendar("init");
//     };
//     document.body.appendChild(script);

//     // Cleanup: remove script if component unmounts
//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <a
//       href="https://koalendar.com/e/klippning"
//       data-koalendar-widget
//       data-koa-type="button"
//       data-koa-icon="calendar"
//       data-koa-shape="rounded"
//       style={{ backgroundColor: "#5145CD", color: "#FFFFFF", padding: "10px 20px", borderRadius: "8px", textDecoration: "none" }}
//     >
//       BOKA TID
//     </a>
//   );
// }
