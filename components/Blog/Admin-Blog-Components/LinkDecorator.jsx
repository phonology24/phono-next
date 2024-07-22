// import { CompositeDecorator, EditorState, Modifier } from "draft-js";
// import Link from "../Admin-Blog-Components/LinkComponent";

// const findLinkEntities = (contentBlock, callback, contentState) => {
//     contentBlock.findEntityRanges(character => {
//         const entityKey = character.getEntity();
//         return (
//             entityKey !== null &&
//             contentState.getEntity(entityKey).getType() === "LINK"
//         );
//     }, callback);
// };

// export const createLinkDecorator = () =>
//     new CompositeDecorator([
//         {
//             strategy: findLinkEntities,
//             component: Link,
//         },
//     ]);
