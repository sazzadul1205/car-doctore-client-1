import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

// import axios from "axios";

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const axiosSecure = useAxiosSecure();

    // const url = `https://car-doctore-server.vercel.app/checkout?email=${user?.email}`

    const url = `/checkout?email=${user?.email}`

    useEffect(() => {
        // fetch(url, { credentials: 'include' })
        //     .then(res => res.json())
        //     .then(data => setBookings(data))

        axiosSecure.get(url)
            .then(res => setBookings(res.data))
            
    }, [url, axiosSecure])

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this booking!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://car-doctore-server.vercel.app/checkout/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your booking has been deleted.',
                                'success'
                            );
                            const remaining = bookings.filter(booking => booking._id !== id);
                            setBookings(remaining);
                        }
                    })
            }
        });
    }

    const handleBookingConfirm = id => {
        fetch(`https://car-doctore-server.vercel.app/checkout/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'Confirmed' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Booking Confirmed!',
                        text: 'Your booking has been confirmed.',
                    });
                    // Update the state if needed
                    const remaining = bookings.filter(booking => booking._id !== id);
                    const updated = bookings.find(booking => booking._id === id);
                    updated.status = 'confirm'
                    const nerBookings = [updated, ...remaining]
                    setBookings(nerBookings);
                }
            });
    };



    return (
        <div>
            <h2 className="text-3xl text-center font-bold text-red-700">My Bookings :  {bookings.length}</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>image </th>
                            <th>Service</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <BookingRow
                                key={booking._id}
                                booking={booking}
                                handleDelete={handleDelete}
                                handleBookingConfirm={handleBookingConfirm}
                            ></BookingRow>)
                        }

                    </tbody>


                </table>
            </div>

        </div>
    );
};

export default Bookings;
