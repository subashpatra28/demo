import React, { useEffect, useState, useMemo } from "react";
import {
  Container,
  Card,
  CardBody,
  CardTitle,
} from "reactstrap";
import TableContainer from "./TableContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import { SelectColumnFilter } from "./filters";

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const doFetch = async () => {
      const response = await fetch(
        "http://www.mocky.io/v2/5d889c8a3300002c0ed7da42"
      );
      const body = await response.json();
      const contacts = body.items;
      setData(contacts);
    };
    doFetch();
  }, []);

  const renderRowSubComponent = (row) => {
    const {
      name: { fullName },
    } = row.original;
    return (
      <Card style={{ width: "18rem", margin: "0 auto" }}>
        <CardBody>
          <CardTitle>
            <strong>{`${fullName}`} </strong>
          </CardTitle>
        </CardBody>
      </Card>
    );
  };

  const columns = useMemo(
    () => [
      {
        Header: "Index",
        accessor: "index",
        disableSortBy: true,
        Filter: SelectColumnFilter,
      },
      {
        Header: "Name",
        accessor: "fullName",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Wallet 1",
        accessor: "wallet1",
      },

      {
        Header: "Wallet 2",
        accessor: "wallet2",
      },

      {
        Header: "Wallet 3",
        accessor: "wallet3",
      },
      {
        Header: "Type",
        accessor: "type",
        disableSortBy: true,
        Filter: SelectColumnFilter,
      },
    ],
    []
  );

  return (
    <Container style={{ marginTop: 100 }}>
      <TableContainer
        columns={columns}
        data={data}
        renderRowSubComponent={renderRowSubComponent}
      />
    </Container>
  );
};

export default App;
