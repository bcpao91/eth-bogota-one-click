import { Fragment, useEffect, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import { CurrencyDollarIcon } from '@heroicons/react/20/solid';

type CryptoCurrency = {
  name: string;
  symbol: typeof import('*.svg');
  value: number;
};

type ListDropDownProps = {
  list: CryptoCurrency[];
  mode: string;
  collateralValue: number | '';
  setCollateralValue: React.Dispatch<React.SetStateAction<number | ''>>;
  shortValue: number | '';
  setShortValue: React.Dispatch<React.SetStateAction<number | ''>>;
};

export default function ListDropDown(props: ListDropDownProps) {
  const [selected, setSelected] = useState<CryptoCurrency>(props.list[0]);
  const [mode, setMode] = useState(props.mode);

  const handleClick = () => {
    if (props.collateralValue == 0) {
      props.setCollateralValue('');
    }
  };

  const handleBlur = () => {
    if (props.collateralValue == '') {
      props.setCollateralValue(0);
    }
  };

  const handleShortCollateralValue = (value: number) => {
    if (
      props.mode == 'short' &&
      (props.shortValue ?? 0) > +props.collateralValue * 0.65
    ) {
      props.setShortValue(+props.collateralValue * 0.65);
      console.log('set new short value to equal 0.65 of collat');
    } else if (props.mode == 'short') {
      props.setShortValue(value);
      console.log('set new short value in handleshortCollat');
    }

    if (props.mode == 'collateral') {
      props.setCollateralValue(value);
    }
  };

  const handleShortCollateralChange = (value: number) => {
    if (props.mode == 'collateral') {
      props.setCollateralValue(value);
      props.setShortValue(value * selected.value * 0.5);
    } else {
      props.setShortValue(value);
    }
  };

  const setChosenList = (value: CryptoCurrency) => {
    setSelected(value);
    if (props.mode == 'short') {
      props.setShortValue(0);
    } else {
      props.setCollateralValue(0);
      props.setShortValue(0);
    }
  };

  return (
    <div className="w-80 h-20 z-50">
      <Listbox
        value={selected}
        onChange={(newValue: CryptoCurrency) => setChosenList(newValue)}
      >
        <div className="relative mt-1">
          <label
            htmlFor="collateral"
            className="absolute flex w-full h-full p-3"
          >
            <input
              className="absolute right-8 top-1.5 cursor-input text-right z-50 h-12 focus:outline-none w-24 appearance-none"
              type={'number'}
              value={
                mode == 'collateral' ? props.collateralValue : props.shortValue
              }
              onChange={(e) =>
                handleShortCollateralChange(+e.currentTarget.value)
              }
              onFocus={handleClick}
              onBlur={handleBlur}
            />
            <div className="absolute right-8 top-[44px] my-auto text-gray-400 z-50 text-sm">
              $:{' '}
              {selected.value *
                (mode == 'collateral'
                  ? +props.collateralValue
                  : +props.shortValue)}
            </div>
          </label>
          <Listbox.Button className="relative flex w-full h-full items-center cursor-pointer rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <div className="flex flex-row gap-1 max-w-[120px] flex-wrap mt-3">
              <Image
                src={selected.symbol}
                alt={'Crypto Symbol'}
                width={20}
                height={20}
              />
              <span className="block truncate">{selected.name}</span>
              <div className="text-gray-600">Max: {'wallet'}</div>
            </div>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400 cursor-pointer"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-50">
              {props.list.map((crypto, cryptoIdx) => {
                return (
                  <Listbox.Option
                    key={cryptoIdx}
                    className={({ active }) =>
                      `relative flex cursor-default select-none py-2 pl-3 pr-4 z-50 ${
                        active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                      }`
                    }
                    value={crypto}
                  >
                    {({ selected }) => (
                      <>
                        <Image
                          src={crypto.symbol}
                          alt={'Crypto Symbol'}
                          width={20}
                          height={20}
                        />
                        <span
                          className={`block truncate ml-1 ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {crypto.name}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-amber-600">
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                );
              })}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
