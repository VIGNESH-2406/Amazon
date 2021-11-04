import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";

export default function Home({ products }) {
  // console.log(products);
  return (
    <div className="bg-gray-100 ">
      <Head>
        <title>Amazon 2.0</title>
      </Head>
      <Header />

      <main className="max-w-screen-2xl mx-auto">
        {/* Banner */}
        <Banner />

        {/* Product feed */}

        <ProductFeed products={products} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );
  return {
    props: {
      products /* the data fetched from the server needs to be
                            returned to the components where we need hence this step of return, and products is destrtuctered in the main fn */,
    },
  };
}

//https://fakestoreapi.com/products

/*  getServerProps helps tell next that this is no LONGER a
 static page(THE SERVER STEP COMES IN HERE WHICH IS THERE
   IS A SERVER BETWEEN GOOGLE  AND THE APP WE BUILD AND THE 
   SERVER IN BETWEN CALCULATES AND THEN RENDERS
     THE PAGE RATHER THAN GIVING THE WHOLE SITE TO THE APP 
     *benefit of server side all  products dont get loaded 
     asynchronously when the page loads but everything is loaded on the server already)
a static page server side rendering  


if user visits any webiste built with next , usually 
in plain react user hits the website directly and the 
browser loads and gives us the page but with next there 
is a server that sits in the middle  of the next app and 
the user and the user makes request to the server first and
 everything gets calculated in the server,then the server 
 will build the page out then it sent to the users browser , 
 where the browser doesnt have to fetch any info, but the 
  info is fetched on the server already
 hence server side rendering and the page gets delivered
 which means the server renders the page first and then delivers the page to the user
*/

/*stripe checkout---
stripe builds its own page that we can theme ,and we just pass the items from the basket to stripe
then stripe returns to us a checkout session and then we redirect or take the user to the checkout session
 where the user fills out thier card details ,address  etc  and once everthing is done in that session 
 it can either succed or fail/cancelled and then we give them a url to where the user goes\
or redirect them to our website afterthat hence, we start off with the site than redirect to stripe and
 then back to our website  
 
 
 
 the snippets on stripe checkout page ,wherever there is node its backend code and wherever 
 is react its front end code
 
 
 
 
 
 api:- in pages folder => api folder with auth folder inside with(nextAuthFile) and api folder with(create-checkout-session file)
 
 anything inside api is backend code or backend endpoint (we can basically fetch from this endpoint)
 
 then inside the file we do export function
 
 
 
 
 
 
 
 42-items,emails on console




serverside redering

there is browser first which the user see all the information typically in react which is called   REACT BUNDLE and when we deploy it online the usere gets the entire react bundle , but as soon as the app grows for enhancement and better working next.js comes in ,and what next does is it adds few steps like it adds a server thats sitting between (this is why we need to deploy next app slightly diffrent we need to hve a server running to go ahead and use it) 

so what happens is the user makes a request to go to the site , and what the user dont see is the user makes request to the server and then the server delivers the page


for eg:- imagine if we go to the airbnb app then the and the user requests to go to the home page, where they dont need the entire app, so the server kows the user just visiting the home screen, so the server just prebuilds the home screen and send only the homescreen to the user(and this is where we can cut off a lot of weight and deliver it to the browser ) hence the user experiences fast loading and delivers the pages














 
 */
