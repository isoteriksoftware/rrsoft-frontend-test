import Button from './Button';
import React from 'react';

type ArticleCardProps = {
  title: string;
  body: string;
};

const truncateText = (text: string, maxLength: number) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength - 3) + '...';
  }
  return text;
};

const ArticleCard: React.FC<ArticleCardProps> = ({ title, body }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{truncateText(body, 100)}</p>
      <Button className="py-2 px-4">View Details</Button>
    </div>
  );
};

export default ArticleCard;
