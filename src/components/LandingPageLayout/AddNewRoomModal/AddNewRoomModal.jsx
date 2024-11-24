import { Checkbox, FormControlLabel, FormGroup, TextField } from "@mui/material";
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Image from 'next/image';
import * as React from 'react';
import { MdOutlineClose } from "react-icons/md";
import bannerImage from '../../../assets/room6.jpg';
import * as Yup from 'yup';
// import { useRouter } from "next/navigation";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const validationSchema = Yup.object().shape({
    roomName: Yup.string().required('Room name is required'),
    roomSize: Yup.number()
        .required('Room size is required')
        .positive('Room size must be a positive number'),
    price: Yup.number()
        .required('Price is required')
        .positive('Price must be a positive number'),
    numberOfGuest: Yup.object().shape({
        adult: Yup.number()
            .required('Number of adults is required')
            .min(1, 'At least one adult is required'),
        child: Yup.number()
            .required('Number of children is required')
            .min(0, 'Number of children cannot be negative'),
    }),
    numberOfBed: Yup.object().shape({
        king: Yup.number()
            .required('Number of king beds is required')
            .min(0, 'Cannot be negative'),
        pet: Yup.number()
            .required('Number of pet beds is required')
            .min(0, 'Cannot be negative'),
    }),
    roomAmenities: Yup.array()
        .of(Yup.string())
        .min(1, 'At least one amenity must be selected'),
    roomDescription: Yup.string()
        .required('Room description is required')
        .min(10, 'Description must be at least 10 characters long'),
});

export default function AddNewRoomModal({ addRoomModalVisible, setAddRoomModalVisible }) {

    const [selectedImage, setSelectedImage] = React.useState(null);


    // const router = useRouter();

    const handleClose = () => {
        setAddRoomModalVisible(false);
    };


    const handleImageInputChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
        }
    };

    return (
        <React.Fragment>
            <Dialog
                fullScreen
                open={addRoomModalVisible}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <div className="relative w-full h-screen">
                    <Image
                        src={bannerImage}
                        alt="banner image"
                        layout="fill"
                        objectFit="cover"
                    />
                    {/* Black overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-70 overflow-auto">
                        <div className='flex justify-end pr-5 pt-5'>
                            <button className='text-white' onClick={handleClose}>  <MdOutlineClose /></button>
                        </div>

                        <div className='flex items-center justify-center'>
                            <div className="text-white w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2">
                                <h1 className="text-4xl md:text-5xl lg:text-6xl text-center font-bold leading-normal">Add New Room</h1>

                                <Formik
                                    initialValues={{
                                        roomName: '',
                                        roomSize: '',
                                        price: '',
                                        numberOfGuest: { adult: 1, child: 1 },
                                        numberOfBed: { king: 1, pet: 1 },
                                        roomAmenities: [],
                                        roomDescription: '',
                                    }}
                                    validationSchema={validationSchema}
                                    onSubmit={(values) => {
                                        console.log(values);
                                        // router.push('/room-availability');
                                        // handleClose();
                                    }}
                                >
                                    {({ values, setFieldValue }) => (
                                        <Form className="flex flex-col gap-5">

                                            {/* Room Name */}
                                            <div>
                                                <Field
                                                    name="roomName"
                                                    as={TextField}
                                                    label="Room Name"
                                                    variant="outlined"
                                                    fullWidth
                                                />
                                                <ErrorMessage className='error-message' name="roomName" />
                                            </div>

                                            {/* Room Size and Price */}
                                            <div className="grid grid-cols-2 gap-10">
                                                <div>
                                                    <Field
                                                        name="roomSize"
                                                        as={TextField}
                                                        label="Room Size"
                                                        variant="outlined"
                                                        fullWidth
                                                    />
                                                    <ErrorMessage className='error-message' name="roomSize" />
                                                </div>
                                                <div>
                                                    <Field
                                                        name="price"
                                                        as={TextField}
                                                        label="Room Price"
                                                        variant="outlined"
                                                        fullWidth
                                                    />
                                                    <ErrorMessage className='error-message' name="price" />
                                                </div>
                                            </div>

                                            {/* Number of Guests */}
                                            <div>
                                                <label className="w-full">No. of Guest(s)</label>
                                                <div className="grid grid-cols-2 gap-10 mt-3">
                                                    <div>
                                                        <Field
                                                            name="numberOfGuest.adult"
                                                            as={TextField}
                                                            label="Adult"
                                                            variant="outlined"
                                                            fullWidth
                                                        />
                                                        <ErrorMessage className='error-message' name="numberOfGuest.adult" />
                                                    </div>

                                                    <div>
                                                        <Field
                                                            name="numberOfGuest.child"
                                                            as={TextField}
                                                            label="Child"
                                                            variant="outlined"
                                                            fullWidth
                                                        />
                                                        <ErrorMessage className='error-message' name="numberOfGuest.child" />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Number of Beds */}
                                            <div>
                                                <label className="w-full">No. of Bed(s)</label>
                                                <div className="grid grid-cols-2 gap-10 mt-3">
                                                    <div>
                                                        <Field
                                                            name="numberOfBed.king"
                                                            as={TextField}
                                                            label="King Bed"
                                                            variant="outlined"
                                                            fullWidth
                                                        />
                                                        <ErrorMessage className='error-message' name="numberOfBed.king" />
                                                    </div>

                                                    <div>
                                                        <Field
                                                            name="numberOfBed.pet"
                                                            as={TextField}
                                                            label="Pet Bed"
                                                            variant="outlined"
                                                            fullWidth
                                                        />
                                                        <ErrorMessage className='error-message' name="numberOfBed.pet" />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Room Amenities */}
                                            <div>
                                                <label className="w-full">Room Amenities</label>
                                                <FormGroup className="grid grid-cols-2">
                                                    {[
                                                        'Air Conditioner',
                                                        'Wifi & Internet',
                                                        'Slippers',
                                                        'Shampoo',
                                                        'Safe Box',
                                                        'Pet Friendly',
                                                        'Cable TV',
                                                        'Towels',
                                                        'Hair Dryer',
                                                        'Espresso Machine',
                                                        'Welcome Drinks',
                                                        'In-room Refrigerator',
                                                    ].map((amenity) => (
                                                        <FormControlLabel
                                                            key={amenity}
                                                            control={
                                                                <Checkbox
                                                                    onChange={(e) => {
                                                                        const { checked } = e.target;
                                                                        setFieldValue(
                                                                            'roomAmenities',
                                                                            checked
                                                                                ? [...values.roomAmenities, amenity]
                                                                                : values.roomAmenities.filter((item) => item !== amenity)
                                                                        );
                                                                    }}
                                                                />
                                                            }
                                                            label={amenity}
                                                        />
                                                    ))}
                                                </FormGroup>
                                                <ErrorMessage className='error-message' name="roomAmenities" component="div" />
                                            </div>

                                            {/* Room Description */}
                                            <div>
                                                <Field
                                                    name="roomDescription"
                                                    as={TextField}
                                                    label="Enter Room Description"
                                                    multiline
                                                    rows={4}
                                                    fullWidth
                                                />
                                                <ErrorMessage className='error-message' name="roomDescription" />
                                            </div>

                                            <div>
                                                <label>Upload Image</label>
                                                <input type="file" accept="image/*" onChange={handleImageInputChange} />
                                                {selectedImage && (
                                                    <img src={selectedImage} alt="Selected" className='w-64' />
                                                )}
                                            </div>

                                            {/* Submit Button */}
                                            <button
                                                type="submit"
                                                className="bg-[#B99D75] w-full rounded-md col-span-2 py-3 my-5"
                                            >
                                                Add Room
                                            </button>
                                        </Form>
                                    )}
                                </Formik>


                            </div>
                        </div>
                    </div>
                </div>
            </Dialog>
        </React.Fragment>
    );
}
