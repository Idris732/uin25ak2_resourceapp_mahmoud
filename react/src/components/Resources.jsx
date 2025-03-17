import { resources } from "../ressurser";
import PageTitle from "./PageTitle";

export default function Resources({ category }) {
  const requestedResource = resources.filter(
    (resource) => resource.category === category
  );

  return (
    <article id="resource-article">
      <PageTitle category={category} />
      <ul>
        {requestedResource.map((resource, index) => (
          <li key={index}>
            <a href={resource.url} target="_blank">
              {resource.title}
            </a>
          </li>
        ))}
      </ul>
    </article>
  );
}