import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to TalkClub!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    <!-- Start of Talkdesk Code -->    <script>      var webchat;      ((window, document, node, props, configs) => {        if (window.TalkdeskChatSDK) {          console.error("TalkdeskChatSDK already included");          return;        }        var divContainer = document.createElement("div");        divContainer.id = node;        document.body.appendChild(divContainer);        var currentDate = new Date().getTime();        var src = `https://talkdeskchatsdk.svc.talkdeskstg.com/talkdeskchatsdk.js?t=` + currentDate;        var script = document.createElement("script");        var firstScriptTag = document.getElementsByTagName("script")[0];        script.type = "text/javascript";        script.charset = "UTF-8";        script.id = "tdwebchatscript";        script.src = src;        script.async = true;        firstScriptTag.parentNode.insertBefore(script, firstScriptTag);        script.onload = () => {          webchat = TalkdeskChatSDK(node, props);          webchat.init(configs);        };      })(        window,        document,        "tdWebchat",        { flowId: "002216a185bc45da9a4eb33a3922ebff", accountId: "" },        { enableEmoji: true, enableUserInput: true }      );    </script><!-- End of Talkdesk Code -->
    </div>
  )
}
