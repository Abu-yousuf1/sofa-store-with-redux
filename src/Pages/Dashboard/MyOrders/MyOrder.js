import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Alert, Button, Typography } from "@mui/material";
import useAuth from "../../../hook/useAuth";

const MyOrder = () => {
    const { user, isLoading } = useAuth();
    const [orders, setOrders] = useState([]);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user.email}`)
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, [user.email]);
    console.log(orders);
    const handleDeleteOrder = (id) => {
        const isDelete = window.confirm("Are You Sure to Delete?");
        if (isDelete) {
            fetch(
                `http://localhost:5000/order/${id}`,
                {
                    method: "DELETE",
                }
            )
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount) {
                        setSuccess(true);
                        const remaining = orders.filter((order) => order._id !== id);
                        setOrders(remaining);
                    }
                });
        }
    };
    return (
        <>
            <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>
                My Orders:
            </Typography>{" "}
            <hr />
            {success && (
                <Alert sx={{ my: 2 }} severity="success">
                    ORDER DELETED SUCCESSFULLY
                </Alert>
            )}
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Index</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Product Name</TableCell>
                            <TableCell>Total Price</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((row, index) => (
                            <TableRow
                                key={row._id}
                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {index + 1}
                                </TableCell>
                                {/* <TableCell component="th" scope="row">
                        {row.model}
                    </TableCell> */}
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.cart.map((pd, index) => <Typography variant="body3"><span>({index + 1})</span> {pd.name} <span style={{ fontWeight: 'bold' }}>qty:</span>{pd.quantity}, </Typography>)}</TableCell>
                                <TableCell>{row.totalPrice}</TableCell>
                                <TableCell>
                                    <Button
                                        onClick={() => handleDeleteOrder(row._id)}
                                        style={{ backgroundColor: "#4298F9" }}
                                        variant="contained"
                                    >
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default MyOrder;