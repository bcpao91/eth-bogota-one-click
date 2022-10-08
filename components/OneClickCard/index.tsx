import React, { useState } from 'react';
import ListDropDown from './listDropDown';
import {
  ArrowsRightLeftIcon,
  ArrowTrendingDownIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/20/solid';
import * as UsdcSVG from '../../public/usdc-logo.svg';
import * as EthSVG from '../../public/eth-logo.svg';
import * as DaiSVG from '../../public/dai-logo.svg';
const cryptoList = [
  {
    name: 'USDC',
    symbol: UsdcSVG,
    value: 1,
  },
  { name: 'ETH', symbol: EthSVG, value: 1323.53 },
];
const cyrptoShortList = [{ name: 'DAI', symbol: DaiSVG, value: 1 }];

export default function OneClickCard() {
  const [collateralValue, setCollateralValue] = useState<number | ''>(0);
  const [shortValue, setShortValue] = useState<number | ''>(0);
  return (
    <div className="w-fit my-6 mx-auto">
      <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 w-fit">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold pl-1 tracking-tight text-gray-900 dark:text-white">
            One Click Short
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-1">
          {"Asset you'll be using to short"}
        </p>
        <div className="flex flex-row w-fit gap-3">
          <div>
            <h2 className="font-bold pl-1">{'Collateral'}</h2>
            <ListDropDown
              list={cryptoList}
              mode={'collateral'}
              collateralValue={collateralValue}
              setCollateralValue={setCollateralValue}
              shortValue={shortValue}
              setShortValue={setShortValue}
            />
          </div>
          <ArrowsRightLeftIcon className="w-5 h-5 my-auto cursor-pointer" />
          <div>
            <h2 className="font-bold pl-1">{'Short'}</h2>
            <ListDropDown
              list={cyrptoShortList}
              mode={'short'}
              collateralValue={collateralValue}
              setCollateralValue={setCollateralValue}
              shortValue={shortValue}
              setShortValue={setShortValue}
            />
          </div>
        </div>
        <div className="flex mt-2">
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
