import Swal from 'sweetalert2'
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
    const services = useLoaderData()
    const { title, price, _id, img } = services;
    const { user } = useContext(AuthContext);


    const handleCheckOut = (e) => {
        e.preventDefault();

        const form = e.target;
        const FName = form.FName.value;
        const LName = form.LName.value;
        const phone = form.Phone.value;
        const email = form.email.value;
        const description = form.description.value;


        const booking = {
            email,
            name: `${FName} ${LName}`,
            phone,
            description,
            service: title,
            price: price,
            service_id: _id,
            img,
        };

        fetch(`http://localhost:5000/checkout`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        
                        icon: 'success',
                        title: 'Order Successful',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
            .catch(error => {

                console.error('Error:', error);
                Swal("Error", "An error occurred. Please try again later.", "error");
            });
    };

    return (
        <div>
            <h1 className="text-center text-3xl font-extrabold text-[#FF3811] my-5">Check Out: {title}</h1>

            <div className="bg-[#F3F3F3]">
                <form onSubmit={handleCheckOut} className="card-body">
                    <div className="grid grid-cols-2 gap-5">
                        <div className="form-control">
                            <input
                                type="text"
                                name="FName"
                                defaultValue={user?.displayName}
                                placeholder="First Name"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <input
                                type="text"
                                name="LName"
                                placeholder="Last Name"
                                className="input input-bordered"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-5">
                        <div className="form-control">
                            <input
                                type="number"
                                name="Phone"
                                placeholder="Phone Number"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <input
                                type="email"
                                name="email"
                                defaultValue={user?.email}
                                placeholder="Email Address"
                                className="input input-bordered"
                            />
                        </div>
                    </div>
                    <div className="form-control mt-3">
                        <input
                            type="text"
                            name="description"
                            placeholder="Description"
                            className="input input-bordered"
                        />
                    </div>
                    <div className="form-control mt-6">
                        <input
                            type="submit"
                            className="btn btn-primary btn-block bg-[#FF3811] border-none"
                            value="Order Confirm"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CheckOut;

