import TwSizeIndicator from "@/helpers/TwSizeIndicator";
import Footer from "@/partials/Footer";
import Header from "@/partials/Header";
import { Providers } from "@/partials/Providers";
import "@/scss/style.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const runtime = "edge";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning={true} lang="en">
      <head>
        {/* responsive meta */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />

        {/* theme meta */}
        <meta name="theme-name" content="nextplate" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#fff"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#000"
        />

        {/* google font css */}
      </head>

      <body suppressHydrationWarning={true}>
        <TwSizeIndicator />
        <Providers>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
