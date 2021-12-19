import React from "react";
import './Book.css';
import ViewBook from './../viewBook'
import AddBook from './../addBook'
class Book extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = {
      isEditClicked: false,
      currentPage:'-1',
      pageDetails:[
        {
            "pageTitle":"ALICES EVIDENCE",
            "pageText":"Here! cried Alice, quite forgetting in the flurry of the moment how large she had grown in the last few minutes, and she jumped up in such a hurry that she tipped over the jury–box with the edge of her skirt, upsetting all the jurymen on to the heads of the crowd below, and there they lay sprawling about, reminding her very much of a globe of goldfish she had accidentally upset the week before.Oh, I BEG your pardon! she exclaimed in a tone of great dismay, and began picking them up again as quickly as she could, for the accident of the goldfish kept running in her head, and she had a vague sort of idea that they must be collected at once and put back into the jury–box, or they would die.The trial cannot proceed, said the King in a very grave voice, until all the jurymen are back in their proper places—ALL, he repeated with great emphasis, looking hard at Alice as he said do. Alice looked at the jury–box, and saw that, in her haste, she had put the Lizard in head downwards, and the poor little thing was waving its tail about in a melancholy way, being quite unable to move. She soon got it out again, and put it right; not that it signifies much, she said to herself; I should think it would be QUITE as much use in the trial one way up as the other. As soon as the jury had a little recovered from the shock of being upset, and their slates and pencils had been found and handed back to them, they set to work very diligently to write out a history of the accident, all except the Lizard, who seemed too much overcome to do anything but sit with its mouth open, gazing up into the roof of the court."
        },
        {
            "pageTitle":"DOWN THE RABBIT-HOLE",
            "pageText":"Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it, ‘and what is the use of a book,’ thought Alice ‘without pictures or conversations?’So she was considering in her own mind (as well as she could, for the hot day made her feel very sleepy and stupid), whether the pleasure of making a daisy-chain would be worth the trouble of getting up and picking the daisies, when suddenly a White Rabbit with pink eyes ran close by her."
        },
        {
            "pageTitle":"THE POOL OF TEARS",
            "pageText":"Alice realizes that the fanning motion causes her to shrink, so she fans herself down to a size that will allow her to fit through the door. Once again, Alice has forgotten the key, but before she can become upset, she tumbles into a pool of salt water. She thinks she has fallen into the sea, but quickly realizes that she is swimming in her own giant tears. As she swims, she comes across a Mouse, whom she asks for help. The Mouse doesn’t understand Alice, so she tries to speak French to him. She recites a line from her French lessons, inquiring after a cat. At the mention of the cat, the Mouse leaps with fright. Alice apologizes but then absentmindedly chatters about her cat Dinah. The Mouse becomes offended, so she changes the subject to dogs. The talk of dogs only frightens the Mouse more, and he begins to swim away. Alice promises to stop talking about cats and dogs if the Mouse will come back. The Mouse swims back to Alice, telling her to follow it to shore, where he will tell his history to explain his hatred for cats and dogs. Now accompanied by several other animals that have fallen into the pool, including a Duck, a Dodo, a Lory, and an Eaglet, Alice and the Mouse swim to shore."
        },
        {
            "pageTitle":"A CAUCUS-RACE AND A LONG TALE ",
            "pageText":"After eating their mints, the Mouse declares that it will tell its tale. Alice confuses “tale” and “tail,” and focuses on the Mouse’s appendage as it talks about Fury prosecuting a mouse in court. The Mouse chides Alice for not paying attention, and though Alice apologizes, the two misunderstand each other and the Mouse leaves in a huff. The other animals lament the Mouse’s absence, and Alice mentions that she wishes her cat Dinah were there to bring the Mouse back. Alice continues to tell the animals that Dinah eats birds, which causes all of the animals to scatter in fear. Alone again, Alice begins to cry until she hears the distant pattering of footsteps."
        },
        {
            "pageTitle":"THE RABBIT SENDS IN A LITTLE BILL",
            "pageText":"Alice decides that her adventures are like a fairy tale and imagines writing her own stories once she grows up. Given her new size, she reasons that perhaps she has in fact grown up and will never age. The White Rabbit interrupts her train of thought by calling for his fan and gloves. He tries to storm into the house, but Alice’s giant arm prevents the door from opening. The Rabbit tries to climb through the window, but Alice bats him away with her giant hand. The Rabbit calls out for his servant, Pat, and the two begin to plot a way to deal with Alice when she swats them away again. The Rabbit and Pat recruit another servant, a lizard named Bill, to climb down the chimney, but Alice launches him into the air with her foot. A crowd gathered outside calls to burn down the house. Alice threatens to send Dinah to get them and they begin hurling pebbles through the window at her face. The pebbles transform into cakes, and reasoning that the cakes might cause her to become smaller, Alice eats one and shrinks. She leaves the house and encounters a mob of animals ready to rush her."
        },
        {
            "pageTitle":"ADVICE FROM A CATERPILLAR",
            "pageText":"Alice tastes the right-hand portion of the mushroom and shrinks. She next tries part of the left-hand portion of the mushroom, and her neck grows so long that her head is above the treetops. Realizing she cannot get the other part of mushroom to her mouth, she attempts to reorient herself when a Pigeon attacks her. The Pigeon has mistaken Alice for a serpent who wants to eat its eggs. Alice assures the Pigeon that she is not a serpent, and the Pigeon skulks back to its nest, leaving Alice to nibble at the two pieces of the mushroom until she returns to her original height. Back at her proper size, Alice wanders around the forest looking for the garden when she encounters a four-foot-tall house. She decides to visit the house and eats the portion of the mushroom to reduce her size to nine inches tall."
        },
        {
            "pageTitle":"PIG AND PEPPRR",
            "pageText":"Alice inquires why the cat grins and learns from the Duchess that it is a Cheshire Cat. Wondering aloud why a cat would grin at all, the Duchess insults Alice, telling her that she must not know very much. Meanwhile, the Cook hurls objects randomly at the Duchess and the baby, including fire-irons, saucepans, and plates. Alice tells the Cook to mind herself, and attempts to change the subject of conversation by bringing up the earth’s axis. The Duchess mishears Alice, and thinking she is talking about axes, spontaneously shouts, “Chop off her head!” The Duchess starts to sing a nasty lullaby to the baby, roughly tussling it as she sings. Upon finishing, she flings the baby at Alice and hurries out of the room to prepare for croquet with the Queen."
        },
        {
            "pageTitle":"A MAD TEA-PARTY",
            "pageText":"Alice gives up on the riddle and becomes angry with the Mad Hatter when she discovers that he doesn’t know the answer either. She tells him he should not waste time asking riddles that have no answers. The Mad Hatter calmly explains that Time is a “him,” not an “it.” He goes on to recount how Time has been upset ever since the Queen of Hearts said the Mad Hatter was “murdering time” while he performed a song badly. Since then, Time has stayed fixed at six o’clock, which means that they exist in perpetual tea-time. Bored with this line of conversation, the March Hare states that he would like to hear a story, so they wake up the Dormouse. The Dormouse tells a story about three sisters who live in a treacle-well, eating and drawing treacle. Confused by the story, Alice interjects with so many questions that the Dormouse becomes insulted. Alice continues to ask questions until the Mad Hatter insults her and she storms off in disgust. As she walks, she looks back at the Mad Hatter and the March Hare as they attempt to stuff the Dormouse into a teapot."
        },
        {
            "pageTitle":"THE QUEEN'S CROQUET-GROUND",
            "pageText":"Alice has a difficult time adjusting to the curious version of croquet played by the Queen. The croquet ground is ridged, the croquet balls are live hedgehogs, and the mallets are live flamingos. The various playing cards stand on all fours to form the arches that the balls are hit through. As she plays, the Queen apoplectically shouts for everyone’s decapitation. Alice attempts to slip away from the croquet match, but catches sight of the Cheshire Cat’s grin. The Cheshire Cat asks her how she is getting on, and Alice begins to complain about the Queen’s unusual behavior. The King notices the conversation and attempts to bully the Cheshire Cat, but it refuses to give in to the King’s taunts. The King becomes aggravated and calls for the Queen to remove the Cheshire Cat. The Queen carelessly orders its decapitation, but the executioner and the King cannot agree on how to execute the Cheshire Cat, who at this point is only a head floating in midair. They appeal to Alice, who suggests that they get the advice of the Duchess, who owns the Cheshire Cat. By the time the Duchess arrives, the Cheshire Cat has completely vanished."
        },
        {
            "pageTitle":"THE MOCK TURTLE'S STORY",
            "pageText":"Amid constant sobbing, the Mock Turtle begins his tale by explaining that he used to be a real turtle. He went to sea school every day, and his master was an old turtle named Tortoise. Alice interrupts, asking why the teacher would go by the name of “Tortoise” if he wasn’t a tortoise. The Mock Turtle chastises her, explaining that he was so named because he “taught us.” He goes on to talk about his education, which he considers to be the finest available. He studied a variety of unusual subjects, including Reeling and Writing, as well as Ambition, Distraction, Uglification, and Derision. Alice inquires about the length of the lessons, and the Mock Turtle says that they became shorter with each passing day. Alice finds this puzzling, but the Mock Turtle explains that they were called lessons because they “lessen.” When Alice asks what happened when there was no time left for lessons, the Gryphon changes the subject to games."
        }
    ]
    };
    this.clickBack = this.clickBack.bind(this);
    this.savePage = this.savePage.bind(this);
    this.addNew = this.addNew.bind(this);
    this.editClicked = this.editClicked.bind(this);
  }
  addNew(){
      this.setState({currentPage:'-1',isEditClicked:true})
  }

  clickBack(){
      this.setState({isEditClicked:false})
  }
  editClicked(index){
      this.setState({currentPage:index,isEditClicked:true})
  }
  savePage(page_details,current_page){
      if(current_page === '-1'){
      this.state.pageDetails.push(page_details)
      }
      else{
          for(let i in this.state.pageDetails){
              if(current_page === i){
                  var pageDetails = this.state.pageDetails;
                  pageDetails[i] = page_details
                  this.setState({pageDetails})
              }
          }
      }
      this.clickBack();
  }

    render() {
        return (
            <div>
            {
                this.state.isEditClicked||this.state.pageDetails.length===0?
                <AddBook currentPage={this.state.currentPage}  clickBack={this.clickBack}  pageDetails={this.state.pageDetails} savePage={this.savePage}></AddBook>:
                <div>
                    <ViewBook pageDetails={this.state.pageDetails} editClicked={this.editClicked} addNew={this.addNew}>
                    </ViewBook>
                
                </div>

            }
            </div>
        )
    }
}
export default Book;