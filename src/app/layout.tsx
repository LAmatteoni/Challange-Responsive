"use client"
import { Poppins } from 'next/font/google';
import Header from "./Header/header";
import Footer from "./Footer/footer";
import Providers from "./providers";
import { WebChatContainer } from '@ibm-watson/assistant-web-chat-react';

const webChatOptions = {
  integrationID: "d688eaa6-f93f-499c-932b-d2b64597eba5", // The ID of this integration.
    region: "us-south" as "us-south", // The region your integration is hosted in.
    serviceInstanceID: "063a22be-fa71-4fa8-b1e7-1a55fb7a84d0", // The ID of your service instance.
    onLoad: async (instance: any) => { await instance.render(); }
};

const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"]
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <title>SalesForce</title>
      </head>
      <body className={poppins.className}>
        <Header/>
        <WebChatContainer config={webChatOptions} />
        <Providers>
          {children}
        </Providers>
        <Footer/>
        
      </body>
    </html>
  );
}
