//LinkComponet

import { CompositeDecorator } from 'draft-js';
import React from 'react';

const Link = (props) => {
  const { url } = props.contentState.getEntity(props.entityKey).getData();
  console.log('Link Component - URL:', props.children);

  return (
    <a href="">
      {props.children}
    </a>
    );
};

const findLinkEntities = (contentBlock, callback, contentState) => {
  contentBlock.findEntityRanges(
    (character) => {
      const entityKey = character.getEntity();
      const isLink = entityKey !== null && contentState.getEntity(entityKey).getType() === 'LINK';
      
      if (isLink) {
        const entity = contentState.getEntity(entityKey);
        const entityData = entity.getData();
        console.log(entityData)
      }
      
      return isLink;
    },
    callback
  );
};
const createLinkDecorator = () => {
  try {
    return new CompositeDecorator([
      {
        strategy: findLinkEntities,
        component: Link,
      },
    ]);
  } catch (error) {
    console.log('Error creating link decorator:', error);
    throw error; 
  }
};


export default createLinkDecorator;
