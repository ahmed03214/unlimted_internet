import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import axios from "axios";

const _API = process.env.API_URL

const Home = () => {
  const { query } = useRouter();

  return (
    <>
    <Head>
      <title>unlimted_internet</title>
    </Head>
    
    <article className="bg-dark text-light w-100 vh-100 pb-3">
      {query?.success && (
        <p className="bg-success text-light d-block mx-auto mb-3 p-2 rounded w-fit">
          تم اضافة الحساب قم بأضافة حساب اخر
        </p>
      )}

      <div className="login h-100 flex-center">
        <a
          className="text-light text-decoration-none btn btn-success"
          href={`${_API}/twitter`}
        >
          login
        </a>
      </div>
    </article>
    </>
  );
};

export default Home;
