import { Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import TextField from '../components/TextField';
import TextArea from '../components/TextArea';
import Button from '../components/Button';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

type FormValues = {
  title: string;
  body: string;
  attorneyName: string;
  contactInfo: string;
};

const CreateArticle: React.FC = () => {
  const [isProcessing, setIsProcessing] = React.useState(false);

  const handleSubmit = (values: FormValues) => {
    if (isProcessing) return;

    setIsProcessing(true);

    axios
      .post('https://jsonplaceholder.typicode.com/posts', values)
      .then(() => {
        toast.success('Article created successfully');
        setIsProcessing(false);
      })
      .catch((error) => {
        setIsProcessing(false);
        console.log(error);
        toast.error('Failed to create article');
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md w-full bg-white p-8 rounded shadow-md">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Create Article</h1>

          <Link to="/" className="text-blue-500 hover:underline font-semibold">
            View Articles
          </Link>
        </div>

        <Formik
          initialValues={{
            title: '',
            body: '',
            attorneyName: '',
            contactInfo: '',
          }}
          validationSchema={Yup.object({
            title: Yup.string().required('Title Required').max(100),
            body: Yup.string().required('Body Required').max(2000),
            attorneyName: Yup.string()
              .required('Attorney Name Required')
              .max(50),
            contactInfo: Yup.string()
              .required('Contact Info Required')
              .max(200),
          })}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="mb-4">
              <TextField
                type="text"
                name="title"
                placeholder="Article Title"
                className="w-full"
              />
            </div>
            <div className="mb-4">
              <TextArea
                name="body"
                placeholder="Article Content"
                className="w-full"
              ></TextArea>
            </div>
            <div className="mb-4">
              <TextField
                type="text"
                name="attorneyName"
                placeholder="Attorney's Name"
                className="w-full"
              />
            </div>
            <div className="mb-6">
              <TextField
                type="text"
                name="contactInfo"
                placeholder="Contact Information"
                className="w-full"
              />
            </div>

            <Button type="submit" disabled={isProcessing}>
              {isProcessing ? 'Creating...' : 'Submit Article'}
            </Button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default CreateArticle;
