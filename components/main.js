import React from "react";
import Head from "next/head";
import FavIcon from "../common/src/assets/images/favicon.png";

const Main = ({
  children,
  title = "Cheat. Your new co-founder and mentor.",
}) => {
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <link rel="shortcut icon" type="image/x-icon" href={FavIcon} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ec5555" />
        <meta name="title" content="Cheat. Your new co-founder and mentor. " />
        <meta
          name="description"
          content="Starting your first business is hard. We're your biggest cheerleader. Follow our checklists and work with our partners to validate your business and get to profitable as soon as possible."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.cheat.dev/" />
        <meta
          property="og:title"
          content="Cheat. Your new co-founder and mentor. "
        />
        <meta
          property="og:description"
          content="Starting your first business is hard. We're your biggest cheerleader. Follow our checklists and work with our partners to validate your business and get to profitable as soon as possible."
        />
        <meta property="og:image" content="" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.cheat.dev/" />
        <meta
          property="twitter:title"
          content="Cheat. Your new co-founder and mentor. "
        />
        <meta
          property="twitter:description"
          content="Starting your first business is hard. We're your biggest cheerleader. Follow our checklists and work with our partners to validate your business and get to profitable as soon as possible."
        />
        <meta property="twitter:image" content=""></meta>
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800&display=swap%7cSource+Sans+Pro&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.$crisp=[];window.CRISP_WEBSITE_ID="ee3fd70b-cdd5-416b-b8e3-41b8e4a716b6";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();
    `,
          }}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          !function(c,h,i,m,p)
          {
            ((m = c.createElement(h)),
            (p = c.getElementsByTagName(h)[0]),
            (m.async = 1),
            (m.src = i),
            p.parentNode.insertBefore(m, p))
          }
          (document,"script","https://chimpstatic.com/mcjs-connected/js/users/a74b7dd7b21c486366df50882/c453ec164b39f6b43b7c09a63.js");
        `,
          }}
        ></script>
      </Head>
      <main>{children}</main>
    </React.Fragment>
  );
};

export default Main;
