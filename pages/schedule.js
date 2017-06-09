import {
  Wrapper,
  Talk,
  Box,
  NavLink,
  Text
} from '../components'

export default () => (
  <Wrapper title='Schedule'>
    <Text>
      More coming soon.
    </Text>
    <NavLink mb={5} prefetch href={'/call-for-speakers'}>Submit your talk.</NavLink>

    <Talk
      speaker='Glen Maddern'
      twitter='glenmaddern'
      title='Styled Components and the Road to Unification'
      profilePicture='https://avatars0.githubusercontent.com/u/23264?v=3&s=460'
    >
      <Text>
        It seems inevitable. As we’ve moved to a more component-centric UI architecture, we’ve moved our JS and HTML and CSS closer and closer together. Surely they’ll eventually end up all in a single file, right? Not long ago, this idea was unthinkable—our units of composition were too large and divided along language boundaries. But things are changing. This is a talk about the dream of a unified development language for components, and the progress one library, Styled Components, has made towards that goal.
      </Text>
    </Talk>

    <Talk
      speaker='Melissa Kaulfuss'
      twitter='MelissaKaulfuss'
      title='How to be a happy developer'
      profilePicture='https://pbs.twimg.com/profile_images/445091827310284800/bWZU2x8c_400x400.png'
    >
      <Text>
        Some of you may wonder why this is even a talk title, because solving problems is fun, right? _Right_. Others however, may be more like me, a bundle of insecurity who puts immense pressure on oneself and struggles with the physical manifestation of anxiety and the mostly self inflicted stress in relation to work, life and almost everything. This is the tale of my first year as a developer and will outline some strategies for dealing with anxiety and juggling life and our work (which lets face it, is all consuming).
      </Text>
    </Talk>
    <Talk
      speaker='Tommy-Carlos Williams'
      twitter='theRealDevgeeks'
      title='How to be a happy developer'
      profilePicture='https://avatars2.githubusercontent.com/u/554999?v=3&s=460'
    >
      <Text>
        “I tried it once, it was just too slow”. It’s a refrain I hear too often, but in the fast paced world of development (especially JavaScript) when was the last time that something was still the same as it was years ago? PhoneGap and Cordova are no exception. With the proliferation of faster hardware, better and more up to date webviews, and cutting edge JS frameworks... Hybrid App Development could be the solution you need. Between the rapid development cycle, the benefit of using existing web domain knowledge, a path to publishing PWAs for platforms that support it, and the potential for a large amount of shared code... isn’t it time you gave it another look?
      </Text>
    </Talk>
  </Wrapper>
)
