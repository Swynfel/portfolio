<template>
  <section class="section">
    <div class="container">
      <h1 class="title has-text-centered"><b-icon pack="fas" icon="code" size="is-medium" custom-size="null"/> Coding proficiencies</h1>

      <Language name='C#' :filled='advanced' :opened="opened" @selected="selected" startopen>
        I have programmed in <b>C#</b> for about 8 years.
        <br/>
        <b>C#</b> was one of the main programming language I used during my 6 month internship at Optimystic Labs.
        <br/>
        I also use <b>C#</b> often in combination with <b>Unity</b> when making games. One such example is "What did you say Captain?", a game made with a friend in 72h for the Ludum Dare game jam :
        [gif]
      </Language>
      <Language name='Python' :filled='advanced' :opened="opened" @selected="selected" startopen>
        I have used <b>Python</b> in combination with <b>Tensorflow</b> during my Master research.
        <br/>
        I also made a website using the <b>Django</b> framework, that uses <b>Python</b> (cf Web).
      </Language>
      <Language name='C++' :filled='intermediate' :opened="opened" @selected="selected">
        It is the first language I learned. We used the <b>Unreal Engine</b> during my 6 month internship at Optimystic Labs, which uses <b>C++</b>.
        <br/>
        I also had some class focusing on <b>C++</b> and distribution.
      </Language>
      <Language name='Rust' :filled='familiar' :opened="opened" @selected="selected">
        I made a Catan environment in Rust for my Master's Research for better efficiency.
      </Language>
      <Language name='Java' :filled='familiar' :opened="opened" @selected="selected">
        Used Java in multiple school project, and for my Master Thesis I had to modify a Java implementation of Catan in Java to support my agent.
      </Language>
      <Language name='Web' :filled='familiar' :opened="opened" @selected="selected">
        I made this very website using <b>HTML</b>, <b>CSS</b>, some <b>Javascript</b>, and <b>Vue</b>.
        <br/>
        During school, I also greatly contributed to making the website for a role-playing event, <b>faerix.net</b>, made using <b>HTML</b>, <b>CSS</b> and <b>Django</b>.
      </Language>
    </div>
  </section>
</template>

<script>
  import Language from './Language'
  export default {
    components: {
      Language,
    },
    data() {
      return {
        advanced: 80,
        intermediate: 60,
        familiar: 40,
        opened: '',
        collapses: [
        {
          title: 'C#',
          filled: 80,
          text: 'C# is good'
        },
        {
          title: 'Python',
          filled: 80,
          text: 'print(stuff)'
        },
        {
          title: 'C++',
          filled: 60,
          text: 'Not that confident actually...'
        },
        {
          title: 'Rust',
          filled: 40,
          text: 'Rusty'
        },
        {
          title: 'Java',
          filled: 40,
          text: 'I don\'t really like this language to be honnest...'
        },
        {
          title: 'HTML/CSS/JS',
          filled: 40,
          text: 'Web'
        }
        ]
      }
    },
    methods: {
      selected(i) {
        this.opened = i
      }
    }
  }
</script>
