import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../data";
import Section from "./Section";

export default function CoreConcepts() {
  return (
    <Section title="Core Concepts" id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {/* {CORE_CONCEPTS.map((concept) => (
              <CoreConcept
                title={concept.title}
                description={concept.description}
                image={concept.image}
                key={concept.title}
              />
            ))} */}
        {CORE_CONCEPTS.map((concept) => (
          <CoreConcept {...concept} key={concept.title} />
        ))}
      </ul>
    </Section>
  );
}
