import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const Redirect = () => {
  const router = useRouter();
  const [tokens, setTokens] = useState(null);

  const handelResponse = useCallback(
    (res) => router.push(`/?${res}`, "/"),
    [router]
  );

  useEffect(() => {
    const getTokens = () => {
      if (!Object.keys(router.query)?.length) return;

      const keys = Object.keys(router.query).map((key) => {
        return `${key}=${router.query[key]}`;
      });

      const joinedKeys = `?${keys.join("&")}`;

      axios
        .post(`https://api.twitter.com/oauth/access_token${joinedKeys}`)
        .then(({ data }) => {
          setTokens(data);
        });
    };

    getTokens();
  }, [router.query]);

  useEffect(() => {
    if (tokens) {
      handelResponse(tokens);
    }
  }, [tokens, handelResponse]);

  return <div>Loading...</div>;
};

export default Redirect;
