import React, { useState, useRef } from "react";
import "./styles.css";
import CreateNewPost from "./CreateNewPost";
import ModifyPost from "./ModifyPost";
import SinglePost from "./SinglePost";
import Post from "./Post";

const DisplayAllPosts = () => {
  // managing states below
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [allPosts, setAllPosts] = useState([
    {
      id: 1,
      title:
        "DIPLOMATIC MOM: My journey as a Foreign Service Officer, wife and mom",
      content:
        "This blog describes my journey as a Foreign Service officer, wife of another FSO, and a mom to a terrific, loving teenager. We began our careers with the State Department in 2010 and first served in amazing Bangladesh, followed by fabulous Rio de Janeiro. Then followed a two-year stint in Washington, DC, after which we spent a year in Russia and another three in stunning Kyiv, Ukraine. Our lives are a pleasant circus and we cannot believe just how lucky we are to live our dreams. And as promised, some (way too) detailed information on housing during training at FSI. This is a freakishly long post, so brace yourselves! This is what happens: One sunny/snowy VERY happy day, you receive the long-coveted State Department letter in your email, titled enticingly—“Salary Offer.” Whoaaaa, you think, this is rather awesome. You burst into a spontaneous dance for a while, yelp in excitement from time (much to your cat’s irritation) and finally decide to open the precious email only to be blinded by a myriad of colors, fonts, italics, bolds, underlining and flashy yellow backgrounds. The part that is of particular interest to us lies at the bottom and it tells you that they have contracted with a management company to provide direct-billing housing (meaning, you pay nothing out of pocket) in Arlington, or you can choose to take a housing allowance instead, find your own place and wait to be reimbursed. It also directs you to a lovely facebook account the HR department has created with more extensive info on the subject, including pictures. Need to find a way to get to FSI other than the shuttles. If you live in downtown DC, the only way to get to FSI (except for a car or bike), is to take the shuttle service from Rosslyn (first stop in Arlington) bright and early every morning, which, given the slow metro system in Washington, pretty much means that you need to get up at 5.30 am every morning to ride the metro to Rosslyn and then get on the shuttle (which is often quite late). That is what all of my classmates who live in DC do. Also, most of the FSI happy hours happen in Arlington, which means that once it is over, you have to find a way to get your drunk diplomatic butt back into town, rather than just walk home. There is another shuttle leaving from the Main State building on R street. That shuttle may be useful to you if you live someone downtown, but it starts at 8.30 am, and it takes almost 30 mins to get to FSI. Thusly, if your class starts at the crack of dawn (like all of the South Asian language classes do), then obvisouly, you can't really use it. A note about the shuttle services: anyone associated to FSI can board the shuttles, whether or not they stay at a DOS-sponsored property. One final point for the ardent cooks among the future FSO fold. My biggest question prior to coming here was—what was provided in the kitchen. In other words, what did I need to bring/buy in order to continue to live a nice cooking life? So, here is exposed truth about the “Welcome Kit” provided by DOS-sponsored apartments for a 2-bedroom apartment: sets of 6 of silverware, small and large plates and wine glasses, mugs and cereal bowls, a pile of water glasses, a set of 3 pots in various sizes, a set of 3 glass bowls and Tupperware in various sizes, a couple of baking pans, measuring spoons, bottle and can openers, a set of stirring spoons, a kettle, a toaster and a great block knife -set. There are also placemats and napkins for 4. Oy, I forgot the colander! It also has a vacuum, a (good) iron and ironing board, laundry basket as well as a water bucket and a broom! It is a bit underwhelming but a good start. If you are driving from home to Arlington, load your car with kitchen stuff you want or be prepared to do some damage at the nearby Target or IKEA. Your UAB will take a while. This is all that comes to mind for now. I welcome any questions and will update this post as necessary. Now I am off to finish my dinner of popcorn. DISCLAIMER: THE OPINIONS EXPRESSED HERE ARE SOLELY, ENTIRELLY AND EXCLUSIVELY MY OWN (and Fat Cat's) AS A RESULT OF MY OWN OBSERVATIONS. PLEASE, DO NOT SEND ME HATE MAIL JUST BECAUSE YOU HAPPEN TO DISAGREE.",
    },
    {
      id: 2,
      title: "A day in the life of a Foreign Service Officer",
      content:
        "Some time ago someone asked me to describe a day of my life as a Foreign Service Officer. The idea being that clearly our lives are riveting behind those high Embassy walls. They are, I assure you! With the risk of millions deciding to take the FSOT immediately upon reading this, here it goes. I wake up at 7 am in my excellent paid-for apartment with zero daylight, poorly built windows which allow any given amount of noise and dust to creep in all the time and cause constant allergic outbreaks for the Diplomat and sore throat for me. The Diplomat is typically already out, playing tennis at the American Club since 6 am. Some people are weird like that. While I try to pretend that I can actually sleep until 7.15 am, Son arrives and throws himself on top of me screaming, “MAMAMAMAMAMAMAMAMAMA” gleefully. In the face of so much love and demand, I rise. Cranky, slow, half-asleep, eyes pretty much shut, I debate whether to make him breakfast like a decent mother would do or to go about my own business and let the nanny do that once she comes in at 7.45 am. My bad-mommyness prevails and I go to brush my teeth instead. While I rinse my teeth with the wonderful Bangladeshi arsenic-laid water, I start to feel bad and go into Son’s room and choose his clothes for the day. I dare him to come and get dressed in my bedroom to see who will win and get dressed first. Son is all about winning these days, so that is a priceless method. While I get dressed, he chases me around the room trying to smack my butt while I pretend to be angry. Ahh, nothing beats quality mother-son time in the morning. At 7.45 am our lovely housekeeper waltzes in, fresh as a cucumber, and soon Son is being spoon-fed his breakfast while I am not watching. Then when I walk by and grumble about it, she hastily pretends to scold him and makes him eat by himself while I am still around. It is a battle I have long lost. The Diplomat then comes back, and tries to convince me that he will only be 10 mins and so I should wait for him to go to the office together. As a result 25 mins later, I stand in the corridor, looking and feeing exceedingly irritated. Finally, he is ready and as we close the door on the way out, Son starts screaming that he hasn’t said good-bye and rushes to us. Because we are already running late, we plant superficial kisses on him, while he plants a really nice oily post-breakfast one on my clean dress. I leave in consternation. A dusty 5-minute drive later through the diplomatic zone, we enjoy sights like endless construction, a stray cat, 4 men peeing in the gutter, women raising massive clouds of choking dust in the air while doing something that might be mistaken for sweeping the streets, and a bunch of construction workers in various stages of nakedness washing their teeth and bodies with water sprouting from a rubber hose whose origin is better left unknown. I know that in some more colorful posts in Africa, officers play bingo on the way to the office – checking off chickens, goats, peeing men and similar fauna. If we get stuck in the traffic which collects literally a block away from the Embassy, we leave the car and walk. My high-heeled shoes are never amused. The heaps of rickshaw-wallahs and general random bystanders, however, are. At least someone is. We flash our Embassy IDs and enter the compound at the entrance where all visa applicants line up. We are stared at intensely by the hundred or so people gathered there. Awkward. We stare back for good measure which creates confusion. We then go inside our awesome consular section, where we are greeted with a blast of freezing A/C air and the chatter of our local staff doing intake from the visa applicants. I happily greet my colleagues and plant my butt on my particularly non-ergonomic chair, ready to face an awesome day of issuing visas. At various points during those first 30 mins at work, we all procure coffee, tea, soda, fatty breakfasts and finally settle down to some incredible admin work before the visa interviews begin. ADMIN WORK. Man, if there ever was good entertainment that is IT. OK, I am lying. Finally, it is TIME and we all head to the interviewing windows. This is my favorite part and has single-handedly allowed me to get to know Bangladeshis as a nation and as individuals. I recommended consular work to everyone – it gives you the opportunity to talk to people every day, to learn their culture, norms and styles, and to speak the language on a wonderful street/village level. At 12.30, we take a brief but satisfying lunch break in the Embassy cafeteria, where we get to meet our equally erudite colleagues from the other sections and exchange playful, intellectual banter about world affairs – you know, diplomat stuff. OK, I am lying again. Typically we discuss our latest diarrhea issues, internet and electricity outages, the outrageously dugout diplomatic zone by the water company, trashy shows that we watch on Hulu, various sporting results from college basketball or football games no one gets to watch now, or how cheap we managed to buy this or that. After this refreshing interlude, I rush to the interviewing window invigorated and ready for some more. OK, not invigorated. More like struggling not to fall asleep after eating a huge mound of overly buttered rice and some other fried substance that went with it. Once we are done interviewing, we go to our desks to work on “projects” and for some more fantastic admin work. If I am lucky, I can go to a student outreach event, or give women-empowerment talk to high schoolers, or even write a well-researched, pivotal, thought-provoking and policy-setting cable that will be read by at least 7 people in the entire Department of State. OK, maybe 4 on a slow day. On some days, I go to teach English to the Embassy drivers and cleaning staff. If you ever get an opportunity like this in your Mission, I strongly urge you to do it – few things are more rewarding than teaching eager students for free and learning bits and pieces of their lives. On others, I will run to the Commissary to replenish our wine supplies. I generally do not shop there for groceries even though I consider the place quite well stocked. I always feel like I am cheating on an exam if I do that – in other words, if I am told to live in Bangladesh, I should try to live off the local markets. Unfortunately, as ambitious as that sounds, it is also kinda impossible so I do break down and buy really nice American stuff from the Commissary (think Italian pork sausage!). But I draw the line at milk and bread. I just can’t bring myself to buy a box of funny-tasting milk for $5 or eat bread that has been frozen for who knows how long and tastes just as papery as the local stuff but is 3 times more expensive. Finally, I am on my way home. Since the A/C in my car is broken again, I would have to navigate the dusty  dugout streets of the dip zone in the late afternoon 110-degree humid heat with my windows rolled down. My driver, bless his heart, knows not to talk to me as I relax in the back and swear audibly at the incompetence of the other drivers. Somehow we navigate the massive holes dug out practically by hand by hundreds of workers carrying out some insane modernizing project of the water company. Again, I remain amazed at the extent of manual labor – not only are the massive gaping holes dug out by hand (imagine three men holding a huge metal poke pointed at the asphalt of the street, while a forth one is pounding it with a heavy hammer – slowly, the street covering is broken down and torn apart by hand; you can’t believe it until you actually watch it), but they are also later on filled by hand, one jute basket of soil at a time. I come home, ringing the bell madly because I want to hear the scrambling feet of Son who lets out a real Apache shriek and jumps into my open arms. It is tough to perform this in 5 inch heels but fun to try every day. My housekeeper flashes her usual 24-carat smile and ensures me that Son has been “reel gut boy too-day, madam!” and then continues on to give me a full account on his eating for the day – key information given that Son looks like a mosquito and wears pants 2 sizes smaller for his age. After these pleasantries, she promises to come back in 3 hours to babysit while the Diplomat and I go on to yet another party or event. Yup, this day has only just began.",
    },
  ]);
  // const [allPosts, setAllPosts] = useState([]) // can also be used
  const [isCreateNewPost, setIsCreateNewPost] = useState(false);
  const [isModifyPost, setIsModifyPost] = useState(false);
  const [isSinglePost, setIsSinglePost] = useState(false);
  const [editPostId, setEditPostId] = useState("");

  // Initialize useRef (to empty title and content once saved)
  const getTitle = useRef();
  const getContent = useRef();

  // function 1 (accepting title in state by user input)
  const savePostTitleToState = (event) => {
    setTitle(event.target.value);
  };

  // function 2 (accepting content/description in state by user input)
  const savePostContentToState = (event) => {
    setContent(event.target.value);
  };

  // function 3 (to save title and content in allPosts state)
  const savePost = (event) => {
    event.preventDefault();
    const id = Date.now();
    setAllPosts([...allPosts, { title, content, id }]);
    getTitle.current.value = "";
    getContent.current.value = "";
    toggleCreateNewPost();
  };

  // function 4 (toggle create new post visibility)
  const toggleCreateNewPost = () => {
    setIsCreateNewPost(!isCreateNewPost);
  };

  // function 5 (toggle post editing)
  const toggleModifyPostComponent = () => {
    setIsModifyPost(!isModifyPost);
  };

  // function 6 (to edit posts)
  const editPost = (id) => {
    setEditPostId(id);
    toggleModifyPostComponent();
  };

  // function 5 (toggle post editing)
  const toggleSinglePostComponent = () => {
    setIsSinglePost(!isSinglePost);
  };

  // function 6 (to edit posts)
  const showPost = (id) => {
    setEditPostId(id);
    toggleSinglePostComponent();
  };

  // function 7 (to update the posts)
  const updatePost = (event) => {
    event.preventDefault();
    const updatedPost = allPosts.map((eachPost) => {
      if (eachPost.id === editPostId) {
        return {
          ...eachPost,
          title: title || eachPost.title,
          content: content || eachPost.content,
        };
      }

      return eachPost;
    });
    setAllPosts(updatedPost);
    toggleModifyPostComponent();
  };

  // function 8 (to delete posts)
  const deletePost = (id) => {
    const modifiedPost = allPosts.filter((eachPost) => {
      return eachPost.id !== id;
    });
    setAllPosts(modifiedPost);
  };

  if (isCreateNewPost) {
    return (
      <>
        <CreateNewPost
          savePostTitleToState={savePostTitleToState}
          savePostContentToState={savePostContentToState}
          getTitle={getTitle}
          getContent={getContent}
          savePost={savePost}
        />
        {/* Cancel Button */}
        <button
          className="btn btn-danger cancel-button"
          onClick={toggleCreateNewPost}
        >
          Cancel
        </button>
      </>
    );
  } else if (isModifyPost) {
    const post = allPosts.find((post) => {
      return post.id === editPostId;
    });

    return (
      <>
        <ModifyPost
          title={post.title}
          content={post.content}
          updatePost={updatePost}
          savePostTitleToState={savePostTitleToState}
          savePostContentToState={savePostContentToState}
          toggleCreateNewPost={toggleCreateNewPost}
        />
        <button
          className="btn btn-danger cancel-update-button"
          onClick={toggleModifyPostComponent}
        >
          Cancel
        </button>
      </>
    );
  } else if (isSinglePost) {
    const post = allPosts.find((post) => {
      return post.id === editPostId;
    });

    return (
      <>
        <SinglePost id={post.id} title={post.title} content={post.content} />
        <button
          className="btn btn-info back-button"
          onClick={toggleSinglePostComponent}
        >
          Back
        </button>
      </>
    );
  }

  return (
    <>
      <h2>Diplomatic MOM Blogspot</h2>
      <button
        className="btn btn-outline-info button-edits create-post"
        onClick={toggleCreateNewPost}
      >
        Create New
      </button>
      {!allPosts.length ? (
        <div>
          <h3 className="nopost">There are no posts yet.</h3>
        </div>
      ) : (
        allPosts.map((eachPost) => (
          <Post
            id={eachPost.id}
            key={eachPost.id}
            title={eachPost.title}
            content={eachPost.content}
            editPost={editPost}
            deletePost={deletePost}
            showPost={showPost}
          />
        ))
      )}
    </>
  );
};
export default DisplayAllPosts;
