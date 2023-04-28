import React from 'react';
import commute from '../../../assets/images/commute.png';
import near from '../../../assets/images/near.png';
import { AlarmIcon } from '../../../assets/images/icons/Icons';
import { DistanceProps } from '../../../interfaces/interfaces';
import { IconButton } from '../../Buttons/IconButton';
import { useVisibility } from '../../globalHooks/useVisibility';

export const Distance = ({ leg, getToInitialPos }: DistanceProps) => {
  const { isMapWidgetTextShown } = useVisibility();
  return (
    <div className='widget__item widget__item_space'>
      <div className='widget__result'>
        <img src={commute} alt='commute' />
        <span>
          {isMapWidgetTextShown && 'Distance:'} {leg?.distance?.text}
        </span>
      </div>
      <div className='widget__result'>
        <AlarmIcon />
        <span>
          {isMapWidgetTextShown && 'Duration:'} {leg?.duration?.text}
        </span>
      </div>
      <IconButton className='widget__button' handleClick={getToInitialPos}>
        <img src={near} alt='location' />
      </IconButton>
    </div>
  );
};
