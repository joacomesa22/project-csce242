import React from "react";
import InfoCard from "../../components/InfoCard";

const Info = () => {
  return (
    <section class="flex flex-col items-center gap-8 py-16">
      <InfoCard
        title="Unique Opportunity"
        text="The world champion is coming to Buenos Aires, and you could meet him. The Meet & Greet will take place on October 23rd at 9:00 PM. The exact location will be privately sent to the winner."
        img="/img/infoImg1.jpeg"
      />
      <InfoCard
        title="An Unforgettable Memory"
        text="During the event, you'll be able to chat, take photos, request autographs, and more. Additionally, you'll receive an original signed Argentina jersey!"
        img="/img/infoImg2.jpg"
        rev={true}
      />
    </section>
  );
};

export default Info;
