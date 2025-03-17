import Marquee from "react-fast-marquee";

export const Marqueee = ({ testimonials }) => {
  return (
    <Marquee className="py-6 bg-black">
      {testimonials?.map(testimonial => (
        <TestimonialCard
          key={testimonial.author_name}
          name={testimonial.author_name}
          message={testimonial.text}
          from={testimonial.from}
          profile_photo_url={testimonial.profile_photo_url}
          author_url={testimonial.author_url}
          rating={testimonial.rating}
          relative_time_description={testimonial.relative_time_description}
        />
      ))}
    </Marquee>
  );
};

const TestimonialCard = ({
  message,
  name,
  from,
  profile_photo_url,
  author_url,
  rating,
  relative_time_description,
}) => {
  const renderRating = rating => {
    return "⭐".repeat(rating);
  };

  return (
    <div className="flex flex-row items-center bg-zinc-950 cursor-default mx-2 rounded-xl text-white w-96 h-32 p-4">
      <div className="w-16 h-16 mr-4">
        <img
          src={profile_photo_url}
          alt={name}
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      {/* <div className="flex-grow">
        <blockquote className="text-sm italic overflow-hidden whitespace-nowrap text-ellipsis">
          {message}
        </blockquote>
      </div> */}
      <div className="ml-4 text-right flex-1">
        <p className="text-xs font-bold">{name}</p>
        <p className="text-xs">{from}</p>
        <p className="text-xs">{renderRating(rating)}</p>
        <p className="text-xs text-gray-400">{relative_time_description}</p>
      </div>
    </div>
  );
};
