import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
//import { getSession } from "next-auth/react";
import Head from "next/head";
import Login from "@/components/Login";
import { getSession } from "next-auth/react";
import Feed from "@/components/Feed";
import RightSidebar from "@/components/RightSidebar";

export default function Home({ session }) {
  if (!session) return <Login />;
  return (
    <div>
      <Head>
        <title>Facebook Clone</title>
      </Head>
      <Header />

      <main className="flex bg-gray-100">
        {/* Left Sidebar */}
        <Sidebar />

        {/* Feed */}
        <Feed />

        {/* Right Sidebar */}
        <RightSidebar></RightSidebar>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: { session },
  };
}
