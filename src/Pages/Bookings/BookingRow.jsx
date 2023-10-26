
const BookingRow = ({ booking, handleDelete, handleBookingConfirm }) => {
    const { _id, service, price, img, status } = booking;

    return (

        <tr>
            <th>
                <label>
                    {
                        status === 'confirm' ? <span className="font-bold text-primary">confirmed</span> :
                        <button onClick={() => handleBookingConfirm(_id) } className="btn btn-secondary">Please Confirm</button>}
                </label>
            </th>
            <td>
                <div className="avatar">
                    <div className="rounded w-24 h-24">
                        {img && <img src={img} alt={img} />}
                    </div>
                </div>
            </td>
            <td>{service}</td>
            <td>$ {price}</td>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-outline btn-sm bg-red-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
        </tr>

    );
};

export default BookingRow;