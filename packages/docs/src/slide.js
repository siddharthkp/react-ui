import React from 'react'
import { Twitter } from 'react-feather'

function Twip() {
  return (
    <div style={{ color: '#1DA1F2', textAlign: 'center', marginBottom: 20 }}>
      <Twitter />
    </div>
  )
}

const slides = [
  null,

  <>
    <h1>Hallo</h1>
    <h2>nieuwe burger, who dis?</h2>
  </>,

  <h1>Design Systems</h1>,

  <>
    <h1>Design Systems</h1>
    <h2>Siddharth Kshetrapal</h2>
  </>,

  <>
    <h1>Design Systems</h1>
    <h2>
      Sid<span style={{ opacity: 0.25 }}>dharth Kshetrapal</span>
    </h2>
  </>,

  <>
    <img
      style={{ borderRadius: 5 }}
      alt="logo"
      src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/91c76e5a-59a4-476c-af40-457844de34f5/Screenshot_2019-09-13_at_12.01.52_AM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAT73L2G45GKAOCPJR%2F20190912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20190912T220219Z&X-Amz-Expires=86400&X-Amz-Security-Token=AgoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIGrrF0OYUtO1AfYpmxgeijcjT6pSUTqw2HOwW%2B%2B1dHemAiAvm%2BLY33F3pKXY5Wpk%2FCXFHIIoWy%2BlMlhA1nFTKBuACyrjAwj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDI3NDU2NzE0OTM3MCIMT01BVQWKofEeflktKrcDQx3Pv12bJq2mSo5NonhLUOTmKRqX4xY94YXJmigvJzHyWHkFOrnU2XsVFPQjY2XGsgrYaL9BIkkqc4Uv%2BtXsOLTh5lVGKJHQUNtvu%2FL71qsGIJH1lk38TWpqS7%2FqutLJQOmmVBdaKw1QsW6ONlDZRg%2B1ZhhMsIeZQxpBwJ74JypNrYI9l4Eu68ZALUI8DONnpY8tKFezaj3aCa2OMbaBxbn10xgPVK4d5kfimts88aqArqTq9aJKLFpWEl1pdf7vh%2BcsrlwSDTjW39ZPfoQ0UFzi762bjeEFZp%2BHCAmjutK1jPQJaxmC39Jyd2WL7qvYl%2B1fiNiLelSH3fdG0JysGSJVx6aSr46hO2dSq72j7Q%2BOQ9cSE79zLb1GcEZ6GZqJHqaYAo62JCUr9lzk0cxXCL4ClbnkwJtrZSByKzwdr5CdT52BQ00UnyB5y3y853Pn5AqAXX2iKidCxNONXbAz2Y0vltSo7UiNC4qedixiCjENEnkkTrf%2BxXCfhD215A1orOcwnyixKUcMMshmXoxoACdXWo35hOA8yiJI3uOyLGjUzMPmM%2B1KDPDXrTRxUOtd0O%2B3qElGUTDB0%2BrrBTq1ASoYd%2BMiPh%2BA%2FFxx9ScKVHDGYmR3ShS73nJu3SrlRZlNc77oI%2BV7rb%2BCy%2F71c4LWkWg%2B1xgLjPBM%2Fmkzp206gm6Bhy3uaaBrasPQmVyMRYhOU3r8Xi%2Bo8%2Bs0fQYkjZDKDBiYEH9Knt%2BIZRVtdSTX0OwpBxLPC%2FcUHYBmZAJzCCOpOHs9tDByRZri3vnS5wg2d7yPNLHZ8QnHGnMUvFpWP9eDqimY3jXyPd9rAh25SfrC59bcRY0%3D&X-Amz-Signature=4356580fe97972e811addb005bb54a4afd38169fe6e58286700384be89a26f06&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Screenshot_2019-09-13_at_12.01.52_AM.png%22"
    />
  </>,

  <blockquote>
    <img
      alt="DESIGN SYSTEMS"
      src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/2cdff446-74e2-4619-9ba3-bdfab08927a5/Screenshot_2019-09-12_at_10.04.49_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAT73L2G45I32PFFGN%2F20190912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20190912T200520Z&X-Amz-Expires=86400&X-Amz-Security-Token=AgoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIBhx%2BNt2ikmWqNX3T6eiQ%2FNhRNAeT6zHCT750R2LK4%2FOAiEAgEeizjrkDoVxbNGw8UfuBYOE0VyGQNYiqFpRKfke8MAq4wMI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwyNzQ1NjcxNDkzNzAiDMWqI6fnRwj6fd%2Blmyq3A%2BGngRA6htkpNZSy73zoCeZJsHAXiobT9mZ7B2xaK2bImrnyB7TT%2F3DqP2O%2BN1woyQQPmDQ2e7Vvs4v9QcFgp%2FRinyB4xidb3Iai8uck6H4tDVfpzo2h1RDjODMr6hE2bprS%2FQIIi55Nqyudcng6Oc3XQvLQT7yJ6FwjewGoOvNw0eeMcVMrhRUALtj6OQmx9Umaj0OlnlDHFBJpwbhQcS0cQusQg5617S%2F2%2BasMsCNQ%2Fj%2Bvquw62mj%2BQ3eX%2BZ0epCRVEaa7pqk8nOkHTRbtdYUkqACve0PmkpZtABBXBbuPx2jPoJmiy%2BkmYk55sm4wJAjsIP0TQsX6f12A9BoE7W4kEHe0HjO90XSmrWyQKKrcONNeDTGeAeNKuBPa7IF%2FGo9QBkzAhl0T3zo29NWpOKSskLJGNwEv6JsIwAIzm85jkIARI5bB163uxbn%2FEfAi5ImH8qFq8h9a%2F7WvN2aIdxMvp200Lqc8bx%2B3UAPFbUnIk4bR0QTMqcaa%2F%2F3bebFw1CtXRjnQBgqC1KaMwctpapfzcQPVl3SzvO58sRwfL5Sw8VGateMEuhqlAMIheN%2BAjQRpVWR13L8w07Dq6wU6tAEzBkt3CnP%2Fd%2FblqH9GKBfiyZ0X%2B18TWRMTJKL16tNoxlIM6e1PgBw8cwKwd8pBkU9hemQSWSZlNMpq9kGijU3fWrisz%2FZ34vFcf2767XT3LTDSyyqMk%2Fi6tbE2Yx8sZ47rUC7wNT5NohUL9irjnJtUmpbwP8feH9h9ZPrKm7rhf6%2BP0bOQfiKNUbfcJ0bIW7aUH%2BGwTv0VCvZ7%2FLRunKtHuHgytTF8NolpPcjyrnk4D7Z%2BM%2FM%3D&X-Amz-Signature=18afffba7376a2a65a05ce3ae1f8bb8b04980e44a77feb59430721c949949442&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Screenshot_2019-09-12_at_10.04.49_PM.png%22"
    />
  </blockquote>,

  <blockquote>
    <Twip />
    When you hear designers refer to a Design System, they're referring to the
    design language & visual components.
    <br />
    <br />
    When you hear developers refer to a Design System they're referring to the
    component library.
    <br />
    <br />
    A Design System is both of these wrapped in a style guide 💻
    <br />
    <br />— Emma Wedekind (@EmmaWedekind)
  </blockquote>,

  <blockquote>
    Set of principles and patterns, shared and integrated, that define the
    overall design of a product
    <br />
    <br />— Karri Saarinen (@karrisaarinen)
  </blockquote>,

  <blockquote>
    An ecosystem of tools, guidelines, shared values & principles which helps
    teams more efficiently ship consistent design
    <br />
    <br />— Emily Plummer(@emplums)
  </blockquote>,

  <blockquote>
    <img
      alt="venn"
      src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a5751d8f-c401-4402-8b0f-0abcb6d0ec8b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAT73L2G45M3SHBSEE%2F20190912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20190912T194548Z&X-Amz-Expires=86400&X-Amz-Security-Token=AgoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIFzHniPM41nWOduqpceLq66XkpQpYPWmkN6b1c2TSkSvAiA2KFB8zGLmyI5xIfXJCrAOiu5XXQ0begUPz1L7%2F826RCrjAwj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDI3NDU2NzE0OTM3MCIMoXiU1gcGvhowFDOPKrcDWv16cxjozbtjY3YqYhOyQt217h0SU1FPRRs0NHC%2Frrs2hBC6cGFl%2BRfRvSt0xXhkTReiXTUd5rliJCy5xrVQR%2BvRclLE143MXxEoBkmmXrL%2BZEhgfZuh63tIkRubgrnrVRSscp6fMLs8AfhU4eElUrNhb5kmZEvO7uj5ZlvHkDz8fALFEWAl07Oe2Xx6Du5XOjvBsTfywMd9%2FAvkYc6JNgmURTg84AaJgIBuW721Iez9Hj9sgIZZL034fbSEyqTyLKdJX1Hpljt2dtB%2BYJ6TGWk3pachejFiU8dDticEU0KtNqF%2B4kWaGTvrCuocQiHTufhu%2Fhr37HxRsDZuhe4YXiZ4DkAhvwuIIk9jJmCNqd%2BsdxfSOvkbgmn4vQ0D2lcY59KO%2FDJWGayJ1wQOBpjXZ6D7QmSRp4esKdlZC0FA%2BANXgA2trpNrRdvKS8fUkf0KnuRCPwZ2O2lRY4M8a3SPOhZVgpOwD2Ns5JLdTBADvM28eFkBJtZV7IpnCVDJ9zn%2BvjewVYrt8hdJ6tNIw6UNDoGN6c2WNOakuqjavKSYtpx5%2Fu2t5l7O2GjkekKGpYe0OBGAg6k1YzCan%2BrrBTq1ATbutQ%2FXhwMfBa9eybpnhqewhiUAg3VgOGGKI3e55QMoY84%2B3sLUOaUyBcZfTr1%2FGZOsfb8BJWveKjpNnSO0V4%2FoBAYr1mOtmUzNTUQ%2Fw9LcO26SJkLsfCX8l39QYzyd031TuAJfmBJa1EbRCvkYIJgLxfxn%2Fld%2BwRxY2j94BKtBaB9e8jF2n%2FkVaG%2F1vgkqR%2BBrs3bIyPBL94y%2FcBJgK%2B2%2Flu0hhX0FA6xmBoMDT9MY1tccvNU%3D&X-Amz-Signature=adf37ca87b8d80d80a0a184289b6eb825cf09847e1848943a578f590aea2789e&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22"
    />
    <br />
    Nate Baldwin (@NateBaldwinArt)
  </blockquote>,

  <blockquote>
    <img
      alt="growing maturity"
      src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/4d71300b-abc2-4171-9c6a-595af037346f/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAT73L2G45N4QTSDVN%2F20190912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20190912T194839Z&X-Amz-Expires=86400&X-Amz-Security-Token=AgoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQDy9SPWJVvHFjvS1c%2BF02R66391TnwfF00fVPhwj9JS6QIhAIQQicX%2FxAfav8D0IN2IJseTdzAgD56aifq%2FmK7GpxW5KuMDCPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMjc0NTY3MTQ5MzcwIgx15WlA5kHS0aFIPKAqtwMwwv60UEM5qDj4CS7XeLTj8x53zZssW8KOjgGbloW8nXPOpN650GPghQdWE5p9RRQ2tnhxD2Q%2F4qINwPpqHuZD6vOgawwtvSFrvsOWXSoxvzH%2FVJ8g3WL4TuPqehGcBzFk2Btt6iD3f55GR5RoJ31fX5KgZsxXsv97fbvs1hA7K11k4j89bYTwQNo8Ijel2DuVvvQmZzMbmY8UT3os9u5UltT1MDCPh9EehBNaxhb07%2FNjXuG5TbYcxGT2NAVQFE54ym4w1iqkxej7lI6Nw6IXX4p2lzU8vpbU19NNFoS0IUZWeq4GPhWzyMRBe1%2FKwOzl0lrEyIeT8N9SKGLJseTovgIpYqOGJx3FoqvrFU%2FEVLKIs5rr%2BAiXTGWbSldiPUsK166KRarENRiMgWojzEmSDajHSOJBqavukBUVazsOpTToXlJA4u0vVj8y%2BHMxfj%2FJ%2BG4ZEb1R6DopYBCDOw49xwmdX42kowu%2BGMLRt8q%2FnSQiPkJOGQMMzzKBE%2Fb58rC%2FirWkq4laWGhz2DylLq4K0AquXA168ecUAzCB1bE7EhsWDmiuXF3MxKQmDSuO31wGUlDBuPE%2BMNub6usFOrMBl188fZz0MRpnPmQW2mgNQVp7uwPbXpFt0uOW62OO0pY9viyIvmtz62gkGfP8UdE4jtFR%2FqrAahod2efJUwsM%2FPTQCtPGNDDoC3rvsAxL8qwZEi6GtEmkAlqA43Epu4wIg7gyxf8smxFzeHTD%2BH9SEpHPmdEfNIRsQHRFM0VRIYoj3dt5mozmlthmxYoh47GBUJST1nL0uDJjbZJNB6kGejIcYht5a1Gml%2BsSBupV3VVe9pA%3D&X-Amz-Signature=4d1eac102229c70640e7b8e316deeb5ce178b42644bb549ae967f319d3337491&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22"
    />
    <br />
    Adam Zeiner (@_dezein)
  </blockquote>,

  <blockquote>
    <img
      alt="cosmos"
      src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/338201bb-050e-4a25-a9ef-6a36716e1ac9/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAT73L2G45FUNVDZBB%2F20190912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20190912T195030Z&X-Amz-Expires=86400&X-Amz-Security-Token=AgoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIACZJYXXYeHAVf1D1WOSShwBu3gtySMjLqu%2FuYiSm%2B%2BJAiEA2zUBmcLtKO%2BLlVclzdKdraTI7E0JmLfrOSDQpUYtJkwq4wMI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwyNzQ1NjcxNDkzNzAiDFQVg0rFefngsKZriyq3A8OyjR%2F70W1Bv4ld4Q9vPhRxTYQEWm8%2FbhwNx9eKiP6S%2BClrX%2FXS8sqJCmFaNWGSVEcEpyIzcN5%2BG%2F9kb2%2FvtnooVrm7KUC0ux8%2B3j7l2jytJQPLlmzI48nDIV6ClDHUUVH%2BULPCtTdxAGlDBaygaM3lpBTic0Xci%2Fj1eWvJC4xIc9LJP3QX5DIeGaCtvvBNhsGWiH1N3LL7niHzB5yXAdRZ85gi10syrl1riIk2RqrVjzjNCPn3Q75Gewnd8c7OISqD54xdzdppqacopoRN4Yx62F%2BaPq9%2BtP6b0qafWIpzj4nu6YrHXp%2FPgo9uFaNrHhIAV5rb72q87AwrY8Y4o%2B%2FjjGDnEvcPIsz%2FJhYJHpO95jKPywGAavZe%2B6rWRzH%2F3LXnVQsQhaLTSb3k3MP9a5gz%2FJjNqwO8POFiRi8B1Rzqg5yH78vCnDL55V4oAyemkH8JcQirAxzu3oKZh2s7uIkVd6GNFoYitpWLyz3l0M4J2OGHtXE%2BYrzQR7RRsImQ0rZwIIrLWmvmnklRkniU9TIZTvxiSDU0afq54Lw3zxe%2FgILjwuu7ZYc6TIr%2F63LSDO%2BEBLMb5GAw3Znq6wU6tAENe7KAfkTVd77hCFstzq%2BeM4B3oPxe9JRfej8Z4ElGgZZMcCPRzMPCWWW0bjW99QbUanCj068p%2BAjtS8dshwNfpYIu7KEPrDUgzRKhT6fsJ15omZ6YqbGgMFlDly0c%2Blys6ijbPxlRP45pOEoy6AdDBUVYxF%2FQN7CS6HYWYoa6kaTvcIlB%2FSE0b1%2FI%2BzY4pNgDfSO4WTuXnlsR%2FVSgRZrbw7Alufl3dZ0I2z%2F9nIy5T85IZb4%3D&X-Amz-Signature=5641073cb1ab0a7bf99be238a677ce8015c3d16bc6a76b3ec23b9dfa11f0e130&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22"
    />
    <br />
    auth0-cosmos.now.sh/docs
  </blockquote>,

  <blockquote>
    <img
      alt="cosmos venn"
      src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b56fb90d-9d6b-4e67-b288-f10b3922251b/Screenshot_2019-09-12_at_12.38.41_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAT73L2G45OKVRZRVK%2F20190912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20190912T195156Z&X-Amz-Expires=86400&X-Amz-Security-Token=AgoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIGI1aKyOXJah7Gj7MrNYtRXVw2x2NmRXFaOOErtd2CnNAiEAzM6VXWaejPtxBwKuCKytFKcBnyGf6gX4WYBXEqTbPUkq4wMI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwyNzQ1NjcxNDkzNzAiDMzoTKANYPLHMJk10iq3AzLb4Wh3WZwufM9SHNUXobJNepxpKPG3lsHjexRtHQ23G4g8BsQ5ospmHNMPKYrVyXafWEzMWTZKty08xrszdhYHUy9SxgnU1t5tAO8H9rDyGfaZhRIdBoA1G0zNlalQ3kQQ%2BViGMopHepnEe4yDjSb9bOYtkUjcNBMqGpi5c0QG%2BtsuN3Kq%2BNfyLiKPwIRtd5GQRaGBUci7ifMMqi3wsMJ0V%2B%2FTwSBDElxdou%2B%2B19Bjd3DRn1edtv4xp%2Bnux05QpHCfXrq%2FfD5QXUhofyKVC%2BVcS4WGfAbMeKcobYAU0Yl4qbSspqWikQCNuYULADOgcJBHrZ%2FpiYrD1F%2FkLLEkrMFSsezQiq7sDtCI9ahTBPIaJ7YvNQRcAxVU%2FBy7mFZc5QQvyAFjyqsGZkaVVnu6CfzQQZrtabjfWOwtYdiejuJpyPfaDfrKR85JHYWN%2BGN5uKs41KKIpQ%2BaAEXaLGTAWgqOrqKrOIavLBDFbbOHH1LuWJH8wahyslnEpNwq1JW8Yssg6FFNi3gwfdTj3D5VhTBv0aYq%2FGVC%2FOYEb4TlLRYcdV%2FPutFvrl%2Fb4ubqOOfkXCFJaPv5TH0wjqDq6wU6tAF0OpHOACUH5fOHTg%2Bs2rIaFko9uWhbmZECvWR8AUPTDGxq76hYFgUSl5qJ8vjErY1x1rHS0bzgu36B4eTchd1BWX4gscY91SII2kUYS7bHmvhcQtD7slo%2BGJRvf4H6eqvuJXNhajwp1Yy3XYkpYJdmannnsRHEipiKCCcNQR5QLZINuFcw4HXKYfmFrdoe0cAt2YKD81hCJzKCgAuTrPLy7pD0gTqc%2FelQMfmnK1dT42cHX8A%3D&X-Amz-Signature=d27c128fdacb8d9f24823815911e66c6a153bf22ec80b45e112cd9fc74b18e0f&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Screenshot_2019-09-12_at_12.38.41_PM.png%22"
    />
  </blockquote>,

  <blockquote>
    <img
      alt="it me"
      src=" https://i.ytimg.com/vi/60tmvBW1kfc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAYABAQ==&rs=AOn4CLDG04Q0Zz-X4WYiCBIZe5d8TVVgyA"
    />
    <br />
    it me, a mario @Design Systems London
  </blockquote>,

  'build a component library',

  <blockquote>
    Brand on a spectrum <br />
    <br />— Sophie Shepherd (@sophshepherd)
  </blockquote>,

  <blockquote>
    <Twip />
    The longer I do this, the more convinced I am that global design tokens and
    component design tokens are hugely different problems and the fact that
    everyone is treating them the same is why much of current solutions are
    brittle and rely almost entirely on convention.
    <br />
    <br /> Global tokens are to align on primitive values (colors, type, etc)
    and it's an important but somewhat smaller problem. They're one value
    (primary-color).
    <br />
    <br /> Component tokens are part of a platform-agnostic representation of
    how a component should look. They can't exist singularly. Fwiw I am actually
    thinking about this as separate from theming as well. Much of these tokens
    aren't necessarily designed to be customized by an end user.
    <br />
    <br />— Sarah Federman (@sarah_federman)
  </blockquote>,

  <blockquote>
    Strings are familiar and powerful for writing CSS, but objects contain an
    order of magnitude more power in how we author, transform, and apply styles
    <br />
    <br />— Christopher Biscardi(@chrisbiscardi)
  </blockquote>,

  <blockquote>
    Prior Art: <br />
    <br /> styled-system
    <br /> theme-ui
    <br /> salesforce-ux/theo
  </blockquote>,

  <blockquote>
    <Twip />
    Design Systems are for PEOPLE.
    <br />
    <br /> Design Systems tooling is great. But what makes a design system truly
    living, thriving, and successful are the people. Get the people parts right
    and you’re set up for success.
    <br />
    <br />— Jina Anne (@jina)
  </blockquote>,

  <blockquote>
    Notes:
    <br />
    <br />
    <span style={{ opacity: 0.5 }}>https://</span>sid.st/reactlive
    <br />
    <br />
    @siddharthkp
  </blockquote>
]

function Slide({ number }) {
  return <div>{slides[number] || 'fin'}</div>
}

export default Slide
