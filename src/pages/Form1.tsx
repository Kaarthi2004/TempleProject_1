import axios from "axios";
import { useState } from "react";
const url = 'https://course-api.com/axios-tutorial-post';

const Form1 = () => {

        const [firstname, setFirstName] = useState('');
        const [lastname, setLastName] = useState('');
        const [mobilenumber, setMobileNumber] = useState('');
        const [email, setEmail] = useState('');
        const [occupation, setOccupation] = useState('');
        const [interest, setInterest] = useState('');
        const [permanentaddess, setPermanentAddress] = useState('');
        const [currentaddress, setCurrentAddress] = useState('');
    

        const handleSubmit = async(e: { preventDefault: () => void; }) => {
            e.preventDefault();
            try{
                const resp = await axios.post(url, {firstname: firstname, lastname:lastname, mobilenumber:mobilenumber, email:email,occupation:occupation, interest:interest, permanentaddess:permanentaddess, currentaddress:currentaddress});
                console.log(resp.data);
            }catch(error){
                // Check if error is an AxiosError
                if (axios.isAxiosError(error)) {
                    // Now TypeScript knows the type of 'error'
                    console.log(error.response);
                } else {
                    // Handle other types of errors
                    console.error(error);
                }
            }
            console.log(firstname, lastname,mobilenumber, email, occupation, interest, permanentaddess, currentaddress);
        };

    return (
    <>
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">Fill the Details</h1>
                <form onSubmit={handleSubmit}>
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                        <div className="w-full">
                            <label htmlFor="firstname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                            <input type="text" placeholder="firstname" name="firstname" id="firstname" value={firstname} onChange={(e) => setFirstName(e.target.value)} className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"  required />
                        </div>
                        <div className="w-full">
                            <label htmlFor="lastname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                            <input type="text" placeholder="lastname" name="lastname" id="lastname" value={lastname} onChange={(e) => setLastName(e.target.value)} className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"  required />
                        </div>
                        <div className="w-full">
                            <label htmlFor="mobilenumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mobile Number</label>
                            <input type="text" placeholder="mobilenumber" name="mobilenumber" id="mobilenumber" value={mobilenumber} onChange={(e) => setMobileNumber(e.target.value)} className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required />
                        </div>
                        <div className="w-full">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email Address</label>
                            <input type="text" placeholder="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"  required />
                        </div>
                        <div className="w-full">
                            <label htmlFor="occupation" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Occupation</label>
                            <input type="text" placeholder="occupation" name="occupation" id="occupation" value={occupation} onChange={(e) => setOccupation(e.target.value)} className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required />
                        </div>
                        <div className="w-full">
                            <label htmlFor="interest" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Interest</label>
                            <input type="text" placeholder="interest" name="interest" id="interest" value={interest} onChange={(e) => setInterest(e.target.value)} className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="permanentaddress" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Permanent Address</label>
                            <textarea placeholder="permanentaddress" name="permanentaddess" id="permanentaddress" value={permanentaddess} onChange={(e) => setPermanentAddress(e.target.value)} rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" ></textarea>
                        </div>
                        <div className="sm:col-span-2 sm:row-span-1">
                            <label htmlFor="currentaddress" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Current Address</label>
                            <textarea placeholder="currentaddress" name="currentaddress" id="currentaddress" value={currentaddress} onChange={(e) => setCurrentAddress(e.target.value)} rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" ></textarea>
                        </div>    
                    </div>
                    <button type="submit" className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                        Submit Details 
                    </button>
                </form>
            </div>
        </section>
    </>
);
}

export default Form1;