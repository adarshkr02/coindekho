import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import { Container, HStack } from "@chakra-ui/react";
import { Loader } from "./Loader";

const Exchanges = () => {
  const [exchanges, setexchanges] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const fetchexchanges = async () => {
      const { data } = await axios.get(`${server}/exchanges`);
      setexchanges(data);
      setloading(false);
    };
    fetchexchanges();
  }, []);

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <HStack>
            {exchanges.map((i) => (
              <div>{i.name}</div>
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};

export default Exchanges;
