import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/footer";
import Header from "./components/header";
import newSession, { Session } from "./utils/auth";
import { redirect } from "next/navigation";
import { host } from "./components/host";
import React from "react";

export const metadata = {
  title: "VTB FinePay",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  let name = await newSession.getName();
  if (!newSession.isAuthProccess) {
    let access = await Session.setAccessToken();
    if (access) {
        newSession.interval = setInterval(async () => {
            let newToken = await newSession.refreshToken();
            if (newToken) return;
            else {
                newSession.clearSession();
                redirect(`http://${host}/auth/login`, 'replace');
            }
        }, access.livetime);
    } else {
        newSession.clearSession();
        redirect(`http://${host}/auth/login`, 'replace');
    }
  }

  return (
    <html lang="en">
      <body className="bg-light-grey">
          <Header name={name}/>
          <div className="py-[44px] tablet:py-0 tablet:pt-[90px] tablet:pb-5">
            {children}
          </div>
          <Footer />
      </body>
    </html>
  );
}
