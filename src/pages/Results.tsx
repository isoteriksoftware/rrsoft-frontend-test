import React from 'react';
import TextField from '../components/TextField';
import Button from '../components/Button';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

const Results: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-3xl w-full p-6">
        <h1 className="text-3xl font-bold mb-6">Results</h1>
        <Formik
          initialValues={{
            search: '',
          }}
          validationSchema={Yup.object({
            search: Yup.string(),
          })}
          onSubmit={() => {}}
        >
          <Form>
            <div className="mb-8">
              <TextField
                type="text"
                name="search"
                placeholder="Search by user id or title"
                className="w-full"
              />
              <Button className="mt-4">Search</Button>
            </div>
          </Form>
        </Formik>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold mb-2">Article Title</h2>
            <p className="text-gray-600 mb-4">
              Brief description or snippet of the article content.
            </p>
            <Button className="py-2 px-4">View Details</Button>
          </div>
        </div>
        <div className="mt-8 text-center">
          <a href="/create-article" className="text-blue-500 hover:underline">
            Go to Article Creation Page
          </a>
        </div>
      </div>
    </div>
  );
};

export default Results;
