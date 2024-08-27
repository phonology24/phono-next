return (
  <html lang="en">
    <Head>
      {/* Google Tag Manager */}
      <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-T4FS3L3Q');</script>
      {/* End Google Tag Manager */}

      {/* reCAPTCHA */}
      <script src="https://www.google.com/recaptcha/api.js?render=reCAPTCHA_6LfJjSwqAAAAACCGN5biITkYEHR4fkfXL-vhWkOI"></script> 

      <link rel="icon" href="/favicon.ico" />
    </Head>
    <body>
      {!shouldHideNavbar && (
        <>
          <TopContactBar />
          <Navbar />
        </>
      )}
      {children}
    </body>
  </html>
);
