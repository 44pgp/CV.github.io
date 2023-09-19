(this["webpackJsonpgazi-jarin"] = this["webpackJsonpgazi-jarin"] || []).push([
  [0],
  {
    160: function (e, t, a) {
      e.exports = a(304);
    },
    165: function (e, t, a) {},
    166: function (e, t, a) {},
    292: function (e, t, a) {},
    294: function (e, t, a) {},
    295: function (e, t, a) {},
    296: function (e, t, a) {
      e.exports = a.p + "";
    },
    297: function (e, t, a) {},
    298: function (e, t, a) {},
    299: function (e, t, a) {},
    300: function (e, t, a) {},
    304: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        i = a.n(n),
        r = a(25),
        c = a.n(r),
        o = (a(165), a(1)),
        l = a(5),
        s = a(14),
        d = a(3),
        m = a(4),
        u = a(327),
        h = a(66),
        p = a.n(h),
        v = a(146),
        f = a.n(v),
        g = a(70),
        b = a.n(g),
        E = (a(166), a(103), a(36));
      function y(e) {
        var t = i.a.useState(!1),
          a = Object(E.a)(t, 2),
          n = a[0],
          r = a[1],
          c = i.a.useRef();
        return (
          i.a.useEffect(function () {
            new IntersectionObserver(function (e) {
              e.forEach(function (e) {
                return r(e.isIntersecting);
              });
            }).observe(c.current);
          }, []),
          i.a.createElement(
            "div",
            {
              className: "fade-in-section ".concat(n ? "is-visible" : ""),
              style: { transitionDelay: "".concat(e.delay) },
              ref: c,
            },
            e.children
          )
        );
      }
      var w = window.innerWidth < 600,
        j = (function (e) {
          Object(d.a)(a, e);
          var t = Object(m.a)(a);
          function a() {
            var e;
            return (
              Object(o.a)(this, a),
              ((e = t.call(this)).state = { expanded: !0, activeKey: "1" }),
              (e.handleSelect = e.handleSelect.bind(Object(s.a)(e))),
              e
            );
          }
          return (
            Object(l.a)(a, [
              {
                key: "handleSelect",
                value: function (e) {
                  this.setState({ activeKey: e });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.state.expanded,
                    t = [
                      i.a.createElement("a", { href: "/" }, "/home"),
                      i.a.createElement("a", { href: "#about" }, "/about"),
                      i.a.createElement(
                        "a",
                        { href: "#experience" },
                        "/experience"
                      ),
                      i.a.createElement(
                        "a",
                        { href: "#projects" },
                        "/software-creations"
                      ),
                    ];
                  return i.a.createElement(
                    "div",
                    { className: "sidebar-nav" },
                    !w &&
                      i.a.createElement(
                        u.a,
                        {
                          expanded: e,
                          defaultOpenKeys: ["3", "4"],
                          activeKey: this.state.activeKey,
                          onSelect: this.handleSelect,
                          appearance: "subtle",
                        },
                        i.a.createElement(
                          u.a.Body,
                          null,
                          i.a.createElement(
                            "div",
                            { className: "sidebar-links" },
                            t.map(function (e, t) {
                              return i.a.createElement(
                                y,
                                { delay: "".concat(t + 1, "00ms") },
                                i.a.createElement("div", null, e)
                              );
                            })
                          )
                        )
                      ),
                    i.a.createElement(
                      "div",
                      { className: "sidebar-logos", href: "/" },
                      i.a.createElement(
                        "a",
                        { href: "mailto:44btc@gmx.com" },
                        i.a.createElement(p.a, { style: { fontSize: 20 } })
                      ),
                      i.a.createElement(
                        "a",
                        { href: "https://github.com/44pgp" },
                        i.a.createElement(b.a, { style: { fontSize: 19 } })
                      ),
                      i.a.createElement(
                        "a",
                        { href: "https://www.linkedin.com/in/dahir-abib-/" },
                        i.a.createElement(f.a, { style: { fontSize: 21 } })
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(i.a.Component),
        S = (a(292), a(147)),
        k = a.n(S),
        N = a(6),
        O = a(148),
        x = (function (e) {
          Object(d.a)(a, e);
          var t = Object(m.a)(a);
          function a() {
            return Object(o.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(l.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  !(function () {
                    var e,
                      t,
                      a,
                      n,
                      i,
                      r,
                      c,
                      o = new N.i();
                    function l(e, t, a) {
                      var n = (function (e, t, a) {
                        var n = 0,
                          i = 0,
                          r = { x: window.innerWidth, y: window.innerHeight };
                        e <= r.x / 2 &&
                          (n =
                            ((a * (((r.x / 2 - e) / (r.x / 2)) * 100)) / 100) *
                            -1);
                        e >= r.x / 2 &&
                          (n = (a * (((e - r.x / 2) / (r.x / 2)) * 100)) / 100);
                        t <= r.y / 2 &&
                          (i =
                            ((0.5 * a * (((r.y / 2 - t) / (r.y / 2)) * 100)) /
                              100) *
                            -1);
                        t >= r.y / 2 &&
                          (i = (a * (((t - r.y / 2) / (r.y / 2)) * 100)) / 100);
                        return { x: n, y: i };
                      })(e.x, e.y, a);
                      (t.rotation.y = N.G.degToRad(n.x)),
                        (t.rotation.x = N.G.degToRad(n.y));
                    }
                    !(function () {
                      ((e = new N.eb()).background = new N.j(661807)),
                        (e.fog = null),
                        ((t = new N.rb({ alpha: !0 })).shadowMap.enabled = !0),
                        t.setSize(
                          0.35 * window.innerWidth,
                          0.35 * window.innerHeight
                        ),
                        document
                          .getElementById("dahir-model")
                          .appendChild(t.domElement),
                        ((a = new N.V(
                          65,
                          window.innerWidth / window.innerHeight,
                          0.1,
                          1e3
                        )).position.z = 30),
                        (a.position.x = 0),
                        (a.position.y = -3);
                      var o = new N.L({ color: 13424374, skinning: !0 });
                      new O.a().load(
                        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1376484/stacy_lightweight.glb",
                        function (t) {
                          n = t.scene;
                          var a = t.animations;
                          n.traverse(function (e) {
                            e.isMesh &&
                              ((e.castShadow = !0),
                              (e.receiveShadow = !0),
                              (e.material = o)),
                              e.isBone && "mixamorigNeck" === e.name && (i = e),
                              e.isBone &&
                                "mixamorigSpine" === e.name &&
                                (r = e);
                          }),
                            n.scale.set(15, 15, 15),
                            (n.position.y = -23),
                            e.add(n),
                            (c = new N.b(n));
                          var l = N.a.findByName(a, "idle");
                          l.tracks.splice(3, 3),
                            l.tracks.splice(9, 3),
                            c.clipAction(l).play();
                        },
                        void 0,
                        function (e) {
                          console.error(e);
                        }
                      );
                      var l = new N.p(16777215, 16777215, 0.61);
                      l.position.set(0, 50, 0), e.add(l);
                      var s = 8.25,
                        d = new N.k(16777215, 0.54);
                      d.position.set(-8, 12, 8),
                        (d.castShadow = !0),
                        (d.shadow.mapSize = new N.ob(1024, 1024)),
                        (d.shadow.camera.near = 0.1),
                        (d.shadow.camera.far = 1500),
                        (d.shadow.camera.left = -8.25),
                        (d.shadow.camera.right = s),
                        (d.shadow.camera.top = s),
                        (d.shadow.camera.bottom = -8.25),
                        e.add(d);
                      var m = new N.W(5e3, 5e3, 1, 1),
                        u = new N.L({ color: 661807, shininess: 0 }),
                        h = new N.J(m, u);
                      (h.rotation.x = -0.5 * Math.PI),
                        (h.receiveShadow = !0),
                        (h.position.y = -11),
                        e.add(h);
                      var p = new N.ib(16, 46, 46),
                        v = new N.K({ color: 6619098 }),
                        f = new N.J(p, v);
                      (f.position.z = -30),
                        (f.position.y = -2.5),
                        (f.position.x = -0.25),
                        e.add(f);
                    })(),
                      (function n() {
                        if (
                          (c && c.update(o.getDelta()),
                          (function (e) {
                            var t = e.domElement,
                              a = window.innerWidth,
                              n = window.innerHeight,
                              i = t.width / window.devicePixelRatio,
                              r = t.height / window.devicePixelRatio,
                              c = i !== a || r !== n;
                            c && e.setSize(a, n, !1);
                            return c;
                          })(t))
                        ) {
                          var i = t.domElement;
                          (a.aspect = i.clientWidth / i.clientHeight),
                            a.updateProjectionMatrix();
                        }
                        t.render(e, a), requestAnimationFrame(n);
                      })(),
                      document.addEventListener("mousemove", function (e) {
                        var t = (function (e) {
                          return { x: e.clientX, y: e.clientY };
                        })(e);
                        i && r && (l(t, i, 50), l(t, r, 30));
                      });
                  })();
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this;
                  return i.a.createElement("div", {
                    ref: function (t) {
                      return (e.mount = t);
                    },
                  });
                },
              },
            ]),
            a
          );
        })(n.Component),
        z = (function (e) {
          Object(d.a)(a, e);
          var t = Object(m.a)(a);
          function a() {
            var e;
            return (
              Object(o.a)(this, a),
              ((e = t.call(this)).state = {
                expanded: !0,
                activeKey: "1",
                visible: !0,
              }),
              (e.handleSelect = e.handleSelect.bind(Object(s.a)(e))),
              e
            );
          }
          return (
            Object(l.a)(a, [
              {
                key: "handleSelect",
                value: function (e) {
                  this.setState({ activeKey: e });
                },
              },
              {
                key: "render",
                value: function () {
                  return i.a.createElement(
                    "div",
                    { id: "intro" },
                    i.a.createElement(
                      "div",
                      { id: "dahir-model" },
                      i.a.createElement(x, null)
                    ),
                    i.a.createElement(
                      k.a,
                      { avgTypingDelay: 120 },
                      i.a.createElement(
                        "span",
                        { className: "intro-title" },
                        "hi, ",
                        i.a.createElement(
                          "span",
                          { className: "intro-name" },
                          "dahir"
                        ),
                        " here."
                      )
                    ),
                    i.a.createElement(
                      y,
                      null,
                      i.a.createElement(
                        "div",
                        { className: "intro-subtitle" },
                        "I hack stuff sometimes."
                      ),
                      i.a.createElement(
                        "div",
                        { className: "intro-desc" },
                        "I'm a Senior Technical Lead at a private healthcare company and software engineer based in Manchester. I have profound interest in pen testing, machine learning, full-stack development, human-computer interactions, and everything in between."
                      ),
                      i.a.createElement(
                        "a",
                        {
                          href: "mailto:44btc@gmx.com",
                          className: "intro-contact",
                        },
                        i.a.createElement(p.a, null),
                        "  Say hello"
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(i.a.Component),
        A = a(153),
        T = a(325),
        I = a(329),
        P = a(326),
        C = a(324),
        M = a(328),
        B = window.innerWidth < 600;
      function D(e) {
        var t = e.children,
          a = e.value,
          n = e.index,
          r = Object(A.a)(e, ["children", "value", "index"]);
        return B
          ? i.a.createElement(
              "div",
              Object.assign(
                {
                  role: "tabpanel",
                  hidden: a !== n,
                  id: "full-width-tabpanel-".concat(n),
                  "aria-labelledby": "full-width-tab-".concat(n),
                },
                r
              ),
              a === n &&
                i.a.createElement(
                  M.a,
                  { p: 3 },
                  i.a.createElement(C.a, null, t)
                )
            )
          : i.a.createElement(
              "div",
              Object.assign(
                { role: "tabpanel", hidden: a !== n, id: "vertical-tabpanel" },
                r
              ),
              a === n &&
                i.a.createElement(
                  M.a,
                  { p: 3 },
                  i.a.createElement(C.a, null, t)
                )
            );
      }
      var R = Object(T.a)(function (e) {
          return {
            root: {
              flexGrow: 1,
              backgroundColor: "theme.palette.background.paper",
              display: "flex",
              height: 300,
            },
            tabs: { borderRight: "1px solid ".concat(e.palette.divider) },
          };
        }),
        K = function () {
          var e = R(),
            t = i.a.useState(0),
            a = Object(E.a)(t, 2),
            n = a[0],
            r = a[1],
            c = {
              SHU: {
                jobTitle: "BSc Cyber Security @",
                duration: "Sept 2019 - July 2022 ",
                desc: [
                  "Database Administration & Security",
                  " Secure Networking Technologies",
                  "Mathematics & Cryptography",
                  "Enterprise Applications Management",
                 
                ],
              },
              Newny: {
                jobTitle: "Data Analyst @",
                duration: "Jan 2020 - May 2021",
                desc: [
                  "During my time here, I helped launch Newny's Insights features. This alone produced an increase in usage by 35%",
                  "I worked on improving the data points collected to help increase the quality of metrics for our ends users",
                  "Measured and analysed real-world user metrics by leveraging amplitude and datadog",
                  "I also led the introduction of a 1 to 5 star rating for our feedback feature to help our customers understand the overall attendee perception of their events",
                ],
              },
              BlackBoxCollective: {
                jobTitle: "Web3.0 Junior Developer @",
                duration: "January 2022 - July 2022",
                desc: [
                  " Aiding in writing smart contracts using solidity for the NFT passes we have",
                  "Write up the stand-up meeting notes everyday to keep organised and be accountable. / Book flights and hotels for the team",
                ],
              },
              Salesforce: {
                jobTitle: "Mountaineer",
                duration: "EXPIRY : No End Date",
                desc: [
                  "Using Trailhead to learn CRM skills to further advance my horizon in linking technology and sales together",
                  
                  "Skills I've learnt include Cyber Security Risk Management, Data Management, App Security and Web Security",
                  "Check my points --> https://trailblazer.me/id/dabib"

                ],
              },
              ServiceNow: {
                jobTitle: "Contract | Technical Support Engineer @",
                duration: "June 2022 - June 2023",
                desc: [
                  "Responsible for managing and resolving UX and functionality issues on the ServiceNow platform",
                  "Focusing on data intergration on the ServiceNow platform",
                  "Debugging object oriented code before it gets to developers",
                ],
              },
              Tekihealth: {
                jobTitle: "Senior Technical Lead @",
                duration: "July 2023 - Present",
                desc: [
                  "I orchestrate the end-to-end management of the organisations infrastructure, covering system design, deployment, ensuring peak performance, scalability and security",
                  "My role included devising cost-effective strategies to optimize infrastructure expenditures and simultaneously deliver high availability and reliability, crafting scalable solutions aligning technology investments with overarching business objectives.",
                  
                ],
              },
              
            };
          return i.a.createElement(
            "div",
            { className: e.root },
            i.a.createElement(
              I.a,
              {
                orientation: B ? null : "vertical",
                variant: B ? "fullWidth" : "scrollable",
                value: n,
                onChange: function (e, t) {
                  r(t);
                },
                className: e.tabs,
              },
              Object.keys(c).map(function (e, t) {
                return i.a.createElement(
                  P.a,
                  Object.assign(
                    { label: B ? "0".concat(t, ".") : e },
                    ((a = t),
                    B
                      ? {
                          id: "full-width-tab-".concat(a),
                          "aria-controls": "full-width-tabpanel-".concat(a),
                        }
                      : { id: "vertical-tab-".concat(a) })
                  )
                );
                var a;
              })
            ),
            Object.keys(c).map(function (e, t) {
              return i.a.createElement(
                D,
                { value: n, index: t },
                i.a.createElement(
                  "span",
                  { className: "joblist-job-title" },
                  c[e].jobTitle + " "
                ),
                i.a.createElement(
                  "span",
                  { className: "joblist-job-company" },
                  e
                ),
                i.a.createElement(
                  "div",
                  { className: "joblist-duration" },
                  c[e].duration
                ),
                i.a.createElement(
                  "ul",
                  { className: "job-description" },
                  c[e].desc.map(function (e, t) {
                    return i.a.createElement(
                      y,
                      { delay: "".concat(t + 1, "00ms") },
                      i.a.createElement("li", { key: t }, e)
                    );
                  })
                )
              );
            })
          );
        },
        W =
          (a(294),
          (function (e) {
            Object(d.a)(a, e);
            var t = Object(m.a)(a);
            function a() {
              var e;
              return (
                Object(o.a)(this, a),
                ((e = t.call(this)).state = { expanded: !0, activeKey: "1" }),
                (e.handleSelect = e.handleSelect.bind(Object(s.a)(e))),
                e
              );
            }
            return (
              Object(l.a)(a, [
                {
                  key: "handleSelect",
                  value: function (e) {
                    this.setState({ activeKey: e });
                  },
                },
                {
                  key: "render",
                  value: function () {
                    return i.a.createElement(
                      "div",
                      { id: "experience" },
                      i.a.createElement(
                        y,
                        null,
                        i.a.createElement(
                          "div",
                          { className: "section-header " },
                          i.a.createElement(
                            "span",
                            { className: "section-title" },
                            "/ experience"
                          )
                        ),
                        i.a.createElement(K, null)
                      )
                    );
                  },
                },
              ]),
              a
            );
          })(i.a.Component)),
        L =
          (a(295),
          (function (e) {
            Object(d.a)(n, e);
            var t = Object(m.a)(n);
            function n() {
              var e;
              return (
                Object(o.a)(this, n),
                ((e = t.call(this)).state = { expanded: !0, activeKey: "1" }),
                (e.handleSelect = e.handleSelect.bind(Object(s.a)(e))),
                e
              );
            }
            return (
              Object(l.a)(n, [
                {
                  key: "handleSelect",
                  value: function (e) {
                    this.setState({ activeKey: e });
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = i.a.createElement(
                        "p",
                        null,
                        "Experienced Cyber Security Alumni from  ",
                        i.a.createElement(
                          "b",
                          null,
                          "Sheffield Hallam University"
                        ),
                        " with prior Technical Support Engineer experince at ",
                        " ",
                        i.a.createElement("b", null, " ServiceNow "),
                        ", now serving as a Senior Technical Lead at ",
                        " ",
                        i.a.createElement(
                          "a",
                          { href: "https://Tekihealth.com/" },
                         
                        ),
                        " ",
                        i.a.createElement("b", null, "Tekihealth Solutions"),
                        "."
                      ),
                      t = i.a.createElement(
                        "p",
                        null,
                        "I'm into any sort of ",
                        i.a.createElement("b", null, "software development"),
                        " that requires creativity. My other technical interests include ",
                        i.a.createElement("b", null, "machine learning"),
                        ",",
                        " ",
                        i.a.createElement(
                          "b",
                          null,
                          "human-computer interactions"
                        ),
                        " and ",
                        i.a.createElement("b", null, "pen testing"),
                        ". I also like my fair share of computational thinking in my own time and further advancing my skills to better my portofolio. I am a well rounded, exceedingly logical and expressive indiviudal with a keen eye for detail and a refreshingly unorthodox approach to solving programming problems."
                      ),
                      n = [e, t],
                      r = [
                        "Python",
                        "JavaScript, HTML & CSS",
                        "SQL Server",
                        "Pen Testing with Kali Linux",
                        "XML | structural programming concepts",
                        "Network Intrusion Detection",
                        "ITIL Processes",
                        "ServiceNow Platform [Rome, San Diego, Tokyo, Utah]"
                      ],
                      c =
                        (r.map(function (e) {
                          return i.a.createElement("li", null, e);
                        }),
                        a(296));
                    return i.a.createElement(
                      "div",
                      { id: "about" },
                      i.a.createElement(
                        y,
                        null,
                        i.a.createElement(
                          "div",
                          { className: "section-header " },
                          i.a.createElement(
                            "span",
                            { className: "section-title" },
                            "/ about me"
                          )
                        ),
                        i.a.createElement(
                          "div",
                          { className: "about-content" },
                          i.a.createElement(
                            "div",
                            { className: "about-description" },
                            n,
                            "Here are some technologies I have been working with:",
                            i.a.createElement(
                              "ul",
                              { className: "tech-stack" },
                              r.map(function (e, t) {
                                return i.a.createElement(
                                  y,
                                  { delay: "".concat(t + 1, "00ms") },
                                  i.a.createElement("li", null, e)
                                );
                              })
                            )
                          ),
                          i.a.createElement(
                            "div",
                            { className: "about-image" },
                            i.a.createElement("img", { src: c })
                          )
                        )
                      )
                    );
                  },
                },
              ]),
              n
            );
          })(i.a.Component)),
        H = (a(297), a(149)),
        J = a.n(H),
        G = a(150),
        q = a.n(G),
        F = (function (e) {
          Object(d.a)(a, e);
          var t = Object(m.a)(a);
          function a() {
            var e;
            return (
              Object(o.a)(this, a),
              ((e = t.call(this)).state = { expanded: !0, activeKey: "1" }),
              (e.handleSelect = e.handleSelect.bind(Object(s.a)(e))),
              e
            );
          }
          return (
            Object(l.a)(a, [
              {
                key: "handleSelect",
                value: function (e) {
                  this.setState({ activeKey: e });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = {
                    "Text User Interface [TUI] O'thello Game/Reversi ": {
                      desc: "An application created for Sheffield Hallam University to showcase my python coding ability. The game is a strategy board game for two players, played on an 8x8 uncheckered board",
                      techStack: "Python",
                      link: "https://github.com/44pgp/Othello-Game-TUI-GUI",
                      open: "https://github.com/44pgp/Othello-Game-TUI-GUI",
                    },
                    "Binance Hack - 7,000 bitcoins stolen.": {
                      desc: "I've written a report about the world's largest cryptocurrency exchange being hacked and showcasing the hacking methodolgoies. This report includes prevention, remediation and an Attack Analysis using Mitre ATT&CK which is a globally-accessible knowledge database of tactics and techniques based on real-world observations ",
                      techStack: "Javascript, HTML / CSS",
                      link: "https://github.com",
                      open: "https://github.com",
                    },
                    Project3: {
                      desc: "Brief about project 3",
                      techStack: "Technical skills I used",
                      link: "https://github.com",
                      open: "https://github.com",
                    },
                    Project4: {
                      desc: "Brief about project 4",
                      techStack:
                        "Javascript, Node.js, Natural NLP, Telegram API",
                      link: "https://github.com/",
                      open: "",
                    },
                    Project5: {
                      desc: "Brief about project 5",
                      techStack: "1, 2",
                      link: "https://github.com/",
                      open: "",
                    },
                    Project6: {
                      desc: "Brief about project 6",
                      techStack: "1",
                      link: "https://github.com/",
                      open: "",
                    },
                  };
                  return i.a.createElement(
                    "div",
                    { id: "projects" },
                    i.a.createElement(
                      "div",
                      { className: "section-header " },
                      i.a.createElement(
                        "span",
                        { className: "section-title" },
                        "/ software-creations"
                      )
                    ),
                    i.a.createElement(
                      "div",
                      { className: "project-container" },
                      i.a.createElement(
                        "ul",
                        { className: "projects-grid" },
                        Object.keys(e).map(function (t, a) {
                          return i.a.createElement(
                            y,
                            { delay: "".concat(a + 1, "00ms") },
                            i.a.createElement(
                              "li",
                              { className: "projects-card" },
                              i.a.createElement(
                                "div",
                                { className: "card-header" },
                                i.a.createElement(
                                  "div",
                                  { className: "folder-icon" },
                                  i.a.createElement(J.a, {
                                    style: { fontSize: 35 },
                                  })
                                ),
                                i.a.createElement(
                                  "span",
                                  { className: "external-links" },
                                  i.a.createElement(
                                    "a",
                                    {
                                      className: "github-icon",
                                      href: e[t].link,
                                    },
                                    i.a.createElement(b.a, {
                                      style: {
                                        fontSize: 20,
                                        color: "var(--lightest-slate)",
                                      },
                                    })
                                  ),
                                  e[t].open &&
                                    i.a.createElement(
                                      "a",
                                      {
                                        className: "open-icon",
                                        href: e[t].open,
                                      },
                                      i.a.createElement(q.a, {
                                        style: {
                                          fontSize: 25,
                                          color: "var(--lightest-slate)",
                                        },
                                      })
                                    )
                                )
                              ),
                              i.a.createElement(
                                "div",
                                { className: "card-title" },
                                t
                              ),
                              i.a.createElement(
                                "div",
                                { className: "card-desc" },
                                e[t].desc
                              ),
                              i.a.createElement(
                                "div",
                                { className: "card-tech" },
                                e[t].techStack
                              )
                            )
                          );
                        })
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(i.a.Component),
        V =
          (a(298),
          (function (e) {
            Object(d.a)(a, e);
            var t = Object(m.a)(a);
            function a() {
              var e;
              return (
                Object(o.a)(this, a),
                ((e = t.call(this)).state = { expanded: !0, activeKey: "1" }),
                (e.handleSelect = e.handleSelect.bind(Object(s.a)(e))),
                e
              );
            }
            return (
              Object(l.a)(a, [
                {
                  key: "handleSelect",
                  value: function (e) {
                    this.setState({ activeKey: e });
                  },
                },
                {
                  key: "render",
                  value: function () {
                    return i.a.createElement(
                      y,
                      null,
                      i.a.createElement(
                        "div",
                        { id: "credits" },
                        i.a.createElement(
                          "div",
                          { className: "ending-credits" },
                          i.a.createElement(
                            "div",
                            null,
                            "Built and designed by Dahir Abib. "
                          ),
                          i.a.createElement(
                            "div",
                            null,
                            "All rights reserved. \xa9"
                          )
                        )
                      )
                    );
                  },
                },
              ]),
              a
            );
          })(i.a.Component));
      a(299), a(300), a(301);
      var Y = function () {
        return i.a.createElement(
          "div",
          { className: "App" },
          i.a.createElement(
            "div",
            { id: "content" },
            i.a.createElement(z, null),
            i.a.createElement(L, null),
            i.a.createElement(W, null),
            i.a.createElement(F, null),
            i.a.createElement(V, null)
          ),
          i.a.createElement(j, null)
        );
      };
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      a(302);
      var U = a(152);
      c.a.render(
        i.a.createElement(U.a, null, i.a.createElement(Y, null)),
        document.getElementById("root")
      ),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready
            .then(function (e) {
              e.unregister();
            })
            .catch(function (e) {
              console.error(e.message);
            });
    },
  },
  [[160, 1, 2]],
]);
//# sourceMappingURL=main.a0b10588.chunk.js.map
