import React, { useEffect } from 'react';
import TextField from '../components/TextField';
import Button from '../components/Button';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import ArticleCard from '../components/ArticleCard';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

type Article = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const Results: React.FC = () => {
  const [articles, setArticles] = React.useState<Article[]>([]);
  const [filteredArticles, setFilteredArticles] = React.useState<Article[]>([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => setArticles(response.data))
      .catch((error) => {
        console.log(error);
        toast.error('Failed to fetch articles');
      });
  }, []);

  useEffect(() => {
    if (articles) {
      // pick first 10 articles to display initially
      setFilteredArticles(articles.slice(0, 10));
    }
  }, [articles]);

  const handleSearch = (values: { search: string }) => {
    if (!values.search) {
      setFilteredArticles(articles.slice(0, 10));
      return;
    }

    const filteredArticles = articles.filter((article) => {
      return (
        article.title.includes(values.search) ||
        article.userId.toString().includes(values.search)
      );
    });

    setFilteredArticles(filteredArticles);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-3xl w-full p-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold mb-6">Articles</h1>
          <Link
            to="/create-article"
            className="text-blue-500 hover:underline font-semibold"
          >
            Create New Article
          </Link>
        </div>

        <Formik
          initialValues={{
            search: '',
          }}
          validationSchema={Yup.object({
            search: Yup.string(),
          })}
          onSubmit={handleSearch}
        >
          <Form>
            <div className="mb-8">
              <TextField
                type="text"
                name="search"
                placeholder="Search by user id or title"
                className="w-full"
              />
              <Button className="mt-4" type="submit">
                Search
              </Button>
            </div>
          </Form>
        </Formik>

        {!filteredArticles.length && (
          <p className="text-xl text-center">Loading articles...</p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredArticles.map((article) => (
            <ArticleCard
              key={article.id}
              userId={article.userId}
              title={article.title}
              body={article.body}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Results;
