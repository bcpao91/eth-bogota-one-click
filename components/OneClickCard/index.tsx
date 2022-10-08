import React from 'react';
import ListDropDown from './listDropDown';
import {
  ArrowsRightLeftIcon,
  ArrowTrendingDownIcon,
} from '@heroicons/react/20/solid';
export default function OneClickCard() {
  return (
    <div className="w-fit my-6 mx-auto">
      <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 w-fit">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            One Click Short
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {"Asset you'll be using to short"}
        </p>
        <div className="flex flex-row w-fit gap-3">
          <div>
            <ListDropDown />
            <input className="w-60 my-2 cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm" />
          </div>
          <ArrowsRightLeftIcon className="w-5" />
          <div>
            <ListDropDown />
            <input className="w-60 my-2 cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm" />
          </div>
        </div>
        <div className="flex">
          <a
            href="#"
            className="inline-flex mx-auto py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Short
            <ArrowTrendingDownIcon className="w-5 ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
}
