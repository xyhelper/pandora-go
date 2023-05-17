(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [606],
  {
    69403: function (e, n, t) {
      "use strict";
      var r, a, i, o, s, l, u, c, d;
      t.d(n, {
        Jq: function () {
          return s;
        },
        Os: function () {
          return i;
        },
        uU: function () {
          return o;
        },
      }),
        ((l = r || (r = {})).Default = "default"),
        (l.Dark = "dark"),
        ((a || (a = {})).Retrieval = "retrieval"),
        ((u = i || (i = {})).Next = "next"),
        (u.Variant = "variant"),
        (u.Continue = "continue"),
        ((c = o || (o = {})).Unknown = "unknown"),
        (c.User = "user"),
        (c.Assistant = "assistant"),
        (c.System = "system"),
        (c.Critic = "critic"),
        (c.Tool = "tool"),
        ((d = s || (s = {})).Root = "root"),
        (d.System = "system"),
        (d.Prompt = "prompt"),
        (d.Completion = "completion");
    },
    22287: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return el;
        },
      });
      var r = t(22830),
        a = t(35250),
        i = t(61888),
        o = t(70079),
        s = t(39324),
        l = t(71209),
        u = t(3001),
        c = t(75908),
        d = t(35290),
        f = t(82841),
        h = t(36218),
        m = t(32787),
        g = t(85023),
        p = t(71204),
        x = t(88038),
        v = t(27553),
        b = (0, u.vU)({
          welcomeBack: {
            id: "existingUserAgeConfirmationModal.welcomeBack",
            defaultMessage: "Welcome back, Italy!",
            description:
              "Title for the age confirmation modal for Italian users",
          },
          ageRequirementsButton: {
            id: "existingUserAgeConfirmationModal.ageRequirementsButton",
            defaultMessage: "I meet OpenAI's age requirements",
            description:
              "Primary button to confirm the user meets the age requirements",
          },
          logoutButton: {
            id: "existingUserAgeConfirmationModal.logoutButton",
            defaultMessage: "Log out",
            description: "Secondary button to log out of the platform",
          },
          announcementParagraph1: {
            id: "existingUserAgeConfirmationModal.announcementParagraph1",
            defaultMessage:
              "We’re pleased to resume offering ChatGPT in Italy. To continue on ChatGPT, please confirm that you are 18+ or are 13+ and have consent from your parent or guardian to use ChatGPT.",
            description:
              "First paragraph of the announcement, explaining the age requirements",
          },
          privacyPolicyLink: {
            id: "existingUserAgeConfirmationModal.privacyPolicyLink",
            defaultMessage: "Privacy policy",
            description: "Link to the privacy policy",
          },
          helpCenterArticleLink: {
            id: "existingUserAgeConfirmationModal.helpCenterArticleLink",
            defaultMessage: "this help center article",
            description:
              "Link to the help center article about ChatGPT development",
          },
          announcementParagraph2: {
            id: "existingUserAgeConfirmationModal.announcementParagraph2",
            defaultMessage:
              "For information about how we collect and use personal data, please see our {privacyPolicyLink}. For information about how we develop and train ChatGPT, please see {helpCenterArticleLink}.",
            description:
              "Second paragraph of the announcement, providing links to more information",
          },
        }),
        y = "2023-04-25",
        j = "".concat("oai/apps/hasSeenAgeConfirmationModal", "/").concat(y);
      function w(e) {
        var n = e.onClose,
          t = (0, c.Z)(),
          r = (0, o.useCallback)(
            function () {
              g.m.setItem(j, !0), n();
            },
            [n]
          ),
          s = (0, f.WS)();
        return (
          (0, o.useEffect)(function () {
            s && s(h.s6.ageConfirmationModal, { content: y });
          }, []),
          (0, a.jsx)(v.ZP, {
            size: "small",
            isOpen: !0,
            onModalClose: i.noop,
            type: "success",
            title: t.formatMessage(b.welcomeBack),
            primaryButton: (0, a.jsx)(v.mH, {
              title: t.formatMessage(b.ageRequirementsButton),
              color: "primary",
              onClick: r,
            }),
            secondaryButton: (0, a.jsx)(v.mH, {
              title: t.formatMessage(b.logoutButton),
              color: "light",
              onClick: function () {
                s(h.s6.clickLogOut, { eventSource: "mouse" }), (0, m.w7)();
              },
              className: "border-gray-800 hover:border-gray-700",
            }),
            className: "sm:max-w-[480px]",
            children: (0, a.jsx)(C, {}),
          })
        );
      }
      var C = function () {
          var e = (0, c.Z)();
          return (0, a.jsx)("div", {
            className: "mb-6 mt-4 sm:mt-6",
            children: (0, a.jsxs)("div", {
              className: "prose prose-invert text-base text-gray-500",
              children: [
                (0, a.jsx)("p", {
                  children: (0, a.jsx)(
                    d.Z,
                    (0, s._)({}, b.announcementParagraph1)
                  ),
                }),
                (0, a.jsx)("p", {
                  children: (0, a.jsx)(
                    d.Z,
                    (0, l._)((0, s._)({}, b.announcementParagraph2), {
                      values: {
                        privacyPolicyLink: (0, a.jsx)("a", {
                          href: "https://openai.com/policies/privacy-policy",
                          target: "_blank",
                          className: "text-gray-500 underline",
                          rel: "noreferrer",
                          children: e.formatMessage(b.privacyPolicyLink),
                        }),
                        helpCenterArticleLink: (0, a.jsx)("a", {
                          href: "https://help.openai.com/en/articles/7842364-how-chatgpt-and-our-language-models-are-developed",
                          target: "_blank",
                          className: "text-gray-500 underline",
                          rel: "noreferrer",
                          children: e.formatMessage(b.helpCenterArticleLink),
                        }),
                      },
                    })
                  ),
                }),
              ],
            }),
          });
        },
        k = t(54887),
        _ = t.n(k),
        T = t(68555),
        M = t(4337),
        N = t(34303),
        P = t(53086),
        S = t(5759),
        I = t(66958);
      function Z() {
        var e = (0, M._)(["flex gap-4 mt-6"]);
        return (
          (Z = function () {
            return e;
          }),
          e
        );
      }
      function R(e) {
        var n = e.onBack,
          t = e.onNext,
          r = e.onSubmit;
        return (0, a.jsxs)(D, {
          children: [
            n &&
              (0, a.jsx)(I.z, {
                as: "button",
                color: "neutral",
                onClick: n,
                children: "Back",
              }),
            t &&
              (0, a.jsx)(I.z, {
                as: "button",
                onClick: t,
                color: "neutral",
                className: "ml-auto",
                children: "Next",
              }),
            r &&
              (0, a.jsx)(I.z, {
                as: "button",
                onClick: r,
                color: "primary",
                className: "ml-auto",
                children: "Done",
              }),
          ],
        });
      }
      var D = N.Z.div(Z());
      function L() {
        var e = (0, M._)(["prose dark:prose-invert"]);
        return (
          (L = function () {
            return e;
          }),
          e
        );
      }
      function F() {
        var e = (0, M._)(["!mt-4 font-normal !mb-2"]);
        return (
          (F = function () {
            return e;
          }),
          e
        );
      }
      function A() {
        var e = (0, M._)(["mb-4"]);
        return (
          (A = function () {
            return e;
          }),
          e
        );
      }
      function E() {
        var e = (0, M._)(["w-full h-[1px] bg-gray-300 opacity-20"]);
        return (
          (E = function () {
            return e;
          }),
          e
        );
      }
      var q = (0, u.vU)({
          pageTitle: {
            id: "onboarding.pageTitle",
            defaultMessage: "Welcome to {name}",
            description:
              "Page title displayed at the beginning of the onboarding process",
          },
          keepInMind: {
            id: "onboarding.keepInMind",
            defaultMessage:
              "Here are a few things to keep in mind before we get started:",
            description: "Introduction text for the onboarding process",
          },
          page0Subtitle: {
            id: "onboarding.page0Subtitle",
            defaultMessage: "This is a free research preview.",
            description: "Subtitle for Page 0",
          },
          page0Disclaimer1: {
            id: "onboarding.page0Disclaimer1",
            defaultMessage:
              "Our goal is to get external feedback in order to improve our systems and make them safer.",
            description: "Disclaimer 1 for Page 0",
          },
          page0Disclaimer2: {
            id: "onboarding.page0Disclaimer2",
            defaultMessage:
              "While we have safeguards in place, the system may occasionally generate incorrect or misleading information and produce offensive or biased content. It is not intended to give advice.",
            description: "Disclaimer 2 for Page 0",
          },
          page1Subtitle: {
            id: "onboarding.page1Subtitle",
            defaultMessage: "How we collect data",
            description: "Subtitle for Page 1",
          },
          page1Disclaimer1: {
            id: "onboarding.page1Disclaimer1",
            defaultMessage:
              "Conversations may be reviewed by our AI trainers to improve our systems.",
            description: "Disclaimer 1 for Page 1",
          },
          page1Disclaimer2: {
            id: "onboarding.page1Disclaimer2",
            defaultMessage:
              "Please don't share any sensitive information in your conversations.",
            description: "Disclaimer 2 for Page 1",
          },
          page2Subtitle: {
            id: "onboarding.page2Subtitle",
            defaultMessage: "We'd love your feedback!",
            description: "Subtitle for Page 2",
          },
          page2Disclaimer1: {
            id: "onboarding.page2Disclaimer1",
            defaultMessage:
              "This system is optimized for dialogue. Let us know if a particular response was good or unhelpful.",
            description: "Disclaimer 1 for Page 2",
          },
          page2Disclaimer2: {
            id: "onboarding.page2Disclaimer2",
            defaultMessage:
              "Share your feedback in our <link>Discord server</link>.",
            description: "Disclaimer 2 for Page 2, with link to Discord",
          },
        }),
        B = "oai/apps/hasSeenOnboarding",
        O = P.G.id,
        U = P.G.name,
        z = function () {
          var e = (0, o.useCallback)(function () {
              g.m.setItem(
                "".concat(B, "/").concat(O),
                new Date().toLocaleDateString("en-CA", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })
              );
            }, []),
            n = (0, r._)((0, o.useState)(null), 2),
            t = n[0],
            a = n[1];
          (0, o.useEffect)(
            function () {
              var e = g.m.getItem("".concat(B, "/").concat(O));
              a(!!e && e);
            },
            [a]
          );
          var i = (0, o.useCallback)(
            function () {
              return new Date();
            },
            [t]
          );
          return (0, o.useMemo)(
            function () {
              return { setHasSeenOnboarding: e, getHasSeenOnboardingDate: i };
            },
            [i, e]
          );
        };
      function H(e) {
        var n = e.onClose,
          t = z().setHasSeenOnboarding,
          i = (0, r._)((0, o.useState)(0), 2),
          s = i[0],
          l = i[1],
          u = (0, o.useCallback)(
            function () {
              n(!0), t();
            },
            [n, t]
          );
        return (0, a.jsxs)($, {
          children: [
            0 === s && (0, a.jsx)(Q, { onChangePage: l }),
            1 === s && (0, a.jsx)(W, { onChangePage: l }),
            2 === s && (0, a.jsx)(G, { onChangePage: l, onSubmit: u }),
          ],
        });
      }
      var V = function () {
          return "chat" === O
            ? (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsx)("div", {
                    className: "mb-5",
                    children: (0, a.jsx)(J, {
                      children: (0, a.jsx)("b", { children: U }),
                    }),
                  }),
                  (0, a.jsx)(K, {}),
                ],
              })
            : (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsx)(J, {
                    children: (0, a.jsx)(
                      d.Z,
                      (0, l._)((0, s._)({}, q.pageTitle), {
                        values: { name: (0, a.jsx)("b", { children: U }) },
                      })
                    ),
                  }),
                  (0, a.jsx)("p", {
                    children: (0, a.jsx)(d.Z, (0, s._)({}, q.keepInMind)),
                  }),
                  (0, a.jsx)(K, {}),
                ],
              });
        },
        Q = function (e) {
          var n = e.onChangePage;
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(V, {}),
              (0, a.jsx)(Y, {
                children: (0, a.jsx)(d.Z, (0, s._)({}, q.page0Subtitle)),
              }),
              (0, a.jsxs)(S.I, {
                children: [
                  (0, a.jsx)(S.Z, {
                    icon: "\uD83D\uDD2C",
                    children: (0, a.jsx)(d.Z, (0, s._)({}, q.page0Disclaimer1)),
                  }),
                  (0, a.jsx)(S.Z, {
                    icon: "\uD83D\uDEA8",
                    children: (0, a.jsx)(d.Z, (0, s._)({}, q.page0Disclaimer2)),
                  }),
                ],
              }),
              (0, a.jsx)(R, {
                onNext: function () {
                  return n(1);
                },
              }),
            ],
          });
        },
        W = function (e) {
          var n = e.onChangePage;
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(V, {}),
              (0, a.jsx)(Y, {
                children: (0, a.jsx)(d.Z, (0, s._)({}, q.page1Subtitle)),
              }),
              (0, a.jsxs)(S.I, {
                children: [
                  (0, a.jsx)(S.Z, {
                    icon: "\uD83E\uDDBE",
                    children: (0, a.jsx)(d.Z, (0, s._)({}, q.page1Disclaimer1)),
                  }),
                  (0, a.jsx)(S.Z, {
                    icon: "\uD83D\uDD10",
                    children: (0, a.jsx)(d.Z, (0, s._)({}, q.page1Disclaimer2)),
                  }),
                ],
              }),
              (0, a.jsx)(R, {
                onBack: function () {
                  return n(0);
                },
                onNext: function () {
                  return n(2);
                },
              }),
            ],
          });
        },
        G = function (e) {
          var n = e.onChangePage,
            t = e.onSubmit,
            r = (0, o.useRef)(null);
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(V, {}),
              (0, a.jsx)(Y, {
                children: (0, a.jsx)(d.Z, (0, s._)({}, q.page2Subtitle)),
              }),
              (0, a.jsxs)(S.I, {
                children: [
                  (0, a.jsx)(S.Z, {
                    icon: "\uD83D\uDC4D",
                    children: (0, a.jsx)(d.Z, (0, s._)({}, q.page2Disclaimer1)),
                  }),
                  (0, a.jsx)(S.Z, {
                    icon: "\uD83D\uDCAC",
                    children: (0, a.jsx)(
                      d.Z,
                      (0, l._)((0, s._)({}, q.page2Disclaimer2), {
                        values: {
                          link: function (e) {
                            return (0, a.jsx)("a", {
                              href: "https://discord.gg/openai",
                              target: "_blank",
                              rel: "noreferrer",
                              children: e,
                            });
                          },
                        },
                      })
                    ),
                  }),
                ],
              }),
              (0, a.jsx)(R, {
                onBack: function () {
                  return n(1);
                },
                onSubmit: function () {
                  return null == t ? void 0 : t(r);
                },
              }),
            ],
          });
        },
        $ = N.Z.div(L()),
        J = N.Z.h2(F()),
        Y = N.Z.h4(A()),
        K = N.Z.div(E()),
        X = t(45494),
        ee = t(44541),
        en = (0, u.vU)({
          tryGPT4: {
            id: "releaseAnnouncement.tryGPT4",
            defaultMessage: "Try GPT-4",
            description: "Button text to try GPT-4",
          },
          maybeLater: {
            id: "releaseAnnouncement.maybeLater",
            defaultMessage: "Maybe later",
            description: "Button text to dismiss the release announcement",
          },
          introducingGPT4: {
            id: "releaseAnnouncement.introducingGPT4",
            defaultMessage: "Introducing GPT-4",
            description: "Heading for the GPT-4 release announcement",
          },
          ourLatestModel: {
            id: "releaseAnnouncement.ourLatestModel",
            defaultMessage:
              "Our latest model, <link>GPT-4</link>, is now available to Plus subscribers.",
            description:
              "Text to introduce GPT-4 and provide a link to its product page",
          },
          advancedReasoning: {
            id: "releaseAnnouncement.advancedReasoning",
            defaultMessage: "Advanced reasoning",
            description: "List item highlighting advanced reasoning in GPT-4",
          },
          complexInstructions: {
            id: "releaseAnnouncement.complexInstructions",
            defaultMessage: "Complex instructions",
            description: "List item highlighting complex instructions in GPT-4",
          },
          moreCreativity: {
            id: "releaseAnnouncement.moreCreativity",
            defaultMessage: "More creativity",
            description: "List item highlighting more creativity in GPT-4",
          },
          dynamicAdjustment: {
            id: "releaseAnnouncement.dynamicAdjustment",
            defaultMessage:
              "To give every Plus subscriber a chance to try the model, we'll dynamically adjust the cap for GPT-4 usage based on demand.",
            description:
              "Text explaining the dynamic adjustment of GPT-4 usage based on demand",
          },
          feb13Update: {
            id: "releaseAnnouncement.feb13Update",
            defaultMessage: "Feb 13 update",
            description: "Text for the February 13 update announcement",
          },
          turboToDefault: {
            id: "releaseAnnouncement.turboToDefault",
            defaultMessage: "Turbo",
            description: "Text for Turbo version in the announcement",
          },
          defaultVersion: {
            id: "releaseAnnouncement.defaultVersion",
            defaultMessage: "Default",
            description: "Text for the Default version in the announcement",
          },
          turboDefaultSwitch: {
            id: "releaseAnnouncement.turboDefaultSwitch",
            defaultMessage:
              "Based on user feedback, we're defaulting you to a faster version of ChatGPT, previously known as Turbo. We'll keep the previous version around for a while.",
            description:
              "Text explaining the switch from Turbo to the Default version based on user feedback",
          },
          gpt4HasEnhancedCapabilities: {
            id: "releaseAnnouncement.gpt4HasEnhancedCapabilities",
            defaultMessage: "GPT-4 has enhanced capabilities in:",
            description: "Text to introduce GPT-4's enhanced capabilities",
          },
        }),
        et = "2023-03-12",
        er = "".concat("oai/apps/hasSeenReleaseAnnouncement", "/").concat(et);
      function ea(e) {
        var n = e.onClose,
          t = (0, T.useRouter)(),
          r = (0, o.useCallback)(
            function () {
              g.m.setItem(er, !0), n();
            },
            [n]
          ),
          i = (0, o.useCallback)(
            function () {
              r(), t.replace("/?model=".concat(ee.f_));
            },
            [r, t]
          ),
          s = (0, f.WS)();
        return (
          (0, o.useEffect)(function () {
            s && s(h.s6.announcementViewed, { content: et });
          }, []),
          (0, a.jsx)(v.ZP, {
            size: "small",
            isOpen: !0,
            onModalClose: r,
            type: "success",
            title: "",
            theme: "dark",
            fullBleed: !0,
            primaryButton: (0, a.jsx)(v.mH, {
              title: "Try GPT-4",
              color: "light",
              onClick: i,
            }),
            secondaryButton: (0, a.jsx)(v.mH, {
              title: "Maybe later",
              color: "dark",
              onClick: r,
              className: "border-gray-800 hover:border-gray-700",
            }),
            className: "sm:max-w-[480px]",
            children: (0, a.jsx)(ei, {}),
          })
        );
      }
      var ei = function () {
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(_(), {
                src: "/images/gpt-4-motif.svg",
                alt: "Gpt-4 announcement banner",
                width: "480",
                height: "160",
                className: "mt-3.5",
              }),
              (0, a.jsx)("div", {
                className: "m-4 mb-6 flex flex-col gap-6 sm:m-6",
                children: (0, a.jsxs)("div", {
                  className: "prose prose-invert text-base",
                  children: [
                    (0, a.jsx)("h2", {
                      children: (0, a.jsx)(
                        d.Z,
                        (0, s._)({}, en.introducingGPT4)
                      ),
                    }),
                    (0, a.jsx)("p", {
                      children: (0, a.jsx)(
                        d.Z,
                        (0, l._)((0, s._)({}, en.ourLatestModel), {
                          tagName: "span",
                          values: {
                            link: function (e) {
                              return (0, a.jsx)("a", {
                                href: "https://openai.com/product/gpt-4",
                                target: "_blank",
                                rel: "noreferrer",
                                children: e,
                              });
                            },
                          },
                        })
                      ),
                    }),
                    (0, a.jsx)("p", {
                      children: (0, a.jsx)(
                        d.Z,
                        (0, s._)({}, en.gpt4HasEnhancedCapabilities)
                      ),
                    }),
                    (0, a.jsxs)("ul", {
                      children: [
                        (0, a.jsxs)("li", {
                          children: [
                            (0, a.jsx)(d.Z, (0, s._)({}, en.advancedReasoning)),
                            " ",
                          ],
                        }),
                        (0, a.jsx)("li", {
                          children: (0, a.jsx)(
                            d.Z,
                            (0, s._)({}, en.complexInstructions)
                          ),
                        }),
                        (0, a.jsx)("li", {
                          children: (0, a.jsx)(
                            d.Z,
                            (0, s._)({}, en.moreCreativity)
                          ),
                        }),
                      ],
                    }),
                    (0, a.jsx)("p", {
                      children: (0, a.jsx)(
                        d.Z,
                        (0, s._)({}, en.dynamicAdjustment)
                      ),
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        eo = function (e) {
          var n = e.onClose;
          return (0, a.jsx)(v.ZP, {
            isOpen: !0,
            onModalClose: i.noop,
            type: "success",
            title: "",
            primaryButton: void 0,
            children: (0, a.jsx)(H, { onClose: n }),
          });
        },
        es = function (e) {
          var n = e.onClose;
          return (0, a.jsx)(ea, { onClose: n });
        };
      function el(e) {
        var n,
          t,
          i,
          s = e.userCountry,
          l = (0, r._)((0, o.useState)(0), 2),
          u = l[0],
          c = l[1],
          d = z().getHasSeenOnboardingDate,
          f =
            ((t = (n = (0, p.hz)()).has(x.Vn)),
            (i = !!g.m.getItem(j)),
            0 === n.size
              ? "loading"
              : "IT" !== s || i
              ? "hide"
              : t
              ? "show"
              : "hide"),
          h = (function () {
            var e = z().getHasSeenOnboardingDate,
              n = (0, X.Z)(),
              t = n.accountStatusResponse,
              r = n.isLoading,
              a = (0, p.hz)();
            if (r || void 0 == t) return "loading";
            var i = e();
            return g.m.getItem(er) || !i
              ? "hide"
              : a.has("model_preview") && i < new Date(et)
              ? "show"
              : "hide";
          })(),
          m = (0, o.useMemo)(
            function () {
              return [
                {
                  Modal: w,
                  getModalState: function () {
                    return f;
                  },
                },
                {
                  Modal: eo,
                  getModalState: function () {
                    var e = d();
                    return null === e ? "loading" : !1 === e ? "show" : "hide";
                  },
                },
                {
                  Modal: es,
                  getModalState: function () {
                    return h;
                  },
                },
              ];
            },
            [d, f, h]
          );
        (0, o.useEffect)(
          function () {
            m[u] &&
              "hide" === m[u].getModalState() &&
              c(
                m.findIndex(function (e) {
                  return "hide" !== e.getModalState();
                })
              );
          },
          [u, m]
        );
        var v = m[u];
        if (!v) return null;
        var b = v.getModalState();
        if ("loading" === b) return null;
        "hide" === b &&
          c(function (e) {
            return e + 1;
          });
        var y = m[u].Modal;
        return (0, a.jsx)(y, {
          onClose: function () {
            c(function (e) {
              return e + 1;
            });
          },
        });
      }
    },
    22208: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          SANDBOX_LINK_PREFIX: function () {
            return y;
          },
          default: function () {
            return w;
          },
          handleSandboxLinkClick: function () {
            return j;
          },
        });
      var r = t(21722),
        a = t(22830),
        i = t(39889),
        o = t(35250),
        s = t(70079),
        l = t(24274),
        u = t(75527),
        c = t(4337),
        d = t(1454),
        f = t(34303),
        h = t(66958),
        m = t(38317),
        g = t(19265);
      function p() {
        var e = (0, c._)(["absolute -left-1 top-1 md:left-0 md:top-2"]);
        return (
          (p = function () {
            return e;
          }),
          e
        );
      }
      function x(e) {
        var n = e.accept,
          t = e.onFilePicked,
          r = e.loading,
          a = e.disabled,
          i = (0, s.useRef)(null),
          l = (0, s.useCallback)(function () {
            var e;
            null === (e = i.current) || void 0 === e || e.click();
          }, []),
          u = (0, s.useCallback)(
            function (e) {
              var n,
                r =
                  null === (n = e.target.files) || void 0 === n ? void 0 : n[0];
              r && (t(r), (e.target.value = ""));
            },
            [t]
          );
        return (0, o.jsxs)(v, {
          children: [
            (0, o.jsx)(h.z, {
              onClick: l,
              disabled: a || r,
              color: "none",
              children: r
                ? (0, o.jsx)(g.Z, {})
                : (0, o.jsx)(m.ZP, { icon: d.Cje, size: "small" }),
            }),
            (0, o.jsx)("input", {
              type: "file",
              accept: n,
              ref: i,
              className: "hidden",
              onChange: u,
            }),
          ],
        });
      }
      var v = f.Z.div(p()),
        b = t(97688),
        y = "sandbox:";
      function j(e, n, t) {
        var a;
        return (
          (a = (0, r._)(function (r) {
            var a, o, s, u, c, d, f, h;
            return (0, i.Jh)(this, function (i) {
              switch (i.label) {
                case 0:
                  if (
                    !(
                      e.has("tools2") &&
                      (null == n
                        ? void 0
                        : null === (a = n.enabledTools) || void 0 === a
                        ? void 0
                        : a.includes("tools2"))
                    )
                  )
                    return [2];
                  return (o = r.substring(8)), [4, l.ZP.checkFile(t, o)];
                case 1:
                  if ((s = i.sent()).exists) return [3, 2];
                  return b.m.warning("File does not exist: ".concat(o)), [3, 6];
                case 2:
                  if (!s.too_large) return [3, 3];
                  return (
                    (u = (s.size / 1024 / 1024).toFixed(0)),
                    b.m.warning(
                      "File is larger than download limit: "
                        .concat(u, " MB vs ")
                        .concat("100", " MB")
                    ),
                    [3, 6]
                  );
                case 3:
                  return [4, l.ZP.fetchFileForDownload(t, o)];
                case 4:
                  return [4, i.sent().blob()];
                case 5:
                  (c = i.sent()),
                    (d = window.URL.createObjectURL(c)),
                    ((f = document.createElement("a")).href = d),
                    (h = o.split("/").pop()),
                    (f.download = h),
                    f.click(),
                    (i.label = 6);
                case 6:
                  return [2];
              }
            });
          })),
          function (e) {
            return a.apply(this, arguments);
          }
        );
      }
      function w(e) {
        var n,
          t = e.onFileUpload,
          c = e.clientThreadId,
          d = e.currentLeafId,
          f = e.modelBackend,
          h = e.disabled,
          m = (0, a._)((0, s.useState)(!1), 2),
          g = m[0],
          p = m[1],
          v = (0, s.useCallback)(
            ((n = (0, r._)(function (e) {
              var n, r, a, o;
              return (0, i.Jh)(this, function (i) {
                switch (i.label) {
                  case 0:
                    p(!0), (i.label = 1);
                  case 1:
                    if ((i.trys.push([1, , 3, 4]), e.size > 104857600))
                      return (
                        (r = (e.size / 1024 / 1024).toFixed(0)),
                        b.m.warning(
                          "File is larger than upload limit: "
                            .concat(r, " MB vs ")
                            .concat("100", " MB"),
                          { hasCloseButton: !0, duration: 15 }
                        ),
                        [2]
                      );
                    return (
                      (o =
                        (null ===
                          (n = (a = u.tQ.getTree(c).getNode(d)).message) ||
                        void 0 === n
                          ? void 0
                          : n.id) || a.id),
                      [4, l.ZP.upload(o, u.tQ.getServerThreadId(c), f, e)]
                    );
                  case 2:
                    return t(i.sent()), [3, 4];
                  case 3:
                    return p(!1), [7];
                  case 4:
                    return [2];
                }
              });
            })),
            function (e) {
              return n.apply(this, arguments);
            }),
            [t, c, d, f]
          );
        return (0, o.jsx)(x, { disabled: g || h, onFilePicked: v });
      }
    },
    5914: function (e, n, t) {
      "use strict";
      t.d(n, {
        j: function () {
          return f;
        },
      });
      var r = t(35250),
        a = t(70079),
        i = t(82841),
        o = t(36218),
        s = t(85023),
        l = t(71204),
        u = t(88038),
        c = t(97688),
        d = "oai/apps/hasSeenStatusUpdate/".concat("2023-03-25"),
        f = function () {
          var e = (0, l.hz)().has(u.Id),
            n = (0, a.useRef)(!!s.m.getItem(d)),
            t = (0, i.WS)();
          return (
            (0, a.useEffect)(
              function () {
                e &&
                  !n.current &&
                  t &&
                  (t(o.s6.oneOffStatusMessageShown),
                  c.m.warning(
                    "You attempted to purchase ChatGPT Plus during an outage. We've issued a refund and apologize for the inconvenience. If you’d like to continue your subscription, please re-subscribe.",
                    {
                      duration: 0,
                      hasCloseButton: !0,
                      onRemove: function () {
                        s.m.setItem(d, !0), (n.current = !0);
                      },
                    }
                  ));
              },
              [n, e, t]
            ),
            (0, r.jsx)("div", {})
          );
        };
    },
    71741: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return sU;
        },
      });
      var r,
        a,
        i,
        o,
        s,
        l,
        u,
        c,
        d,
        f = t(39324),
        h = t(70216),
        m = t(22830),
        g = t(4337),
        p = t(35250),
        x = t(62906),
        v = t(75861),
        b = t(70575),
        y = t(68555),
        j = t(70079),
        w = t(34303),
        C = t(82841),
        k = t(36218),
        _ = t(24274),
        T = t(71204),
        M = t(88038),
        N = t(87316),
        P = t(75527),
        S = t(81292),
        I = t(58392),
        Z = (0, S.ZP)(
          (0, I.n)(function () {
            return { aborters: {} };
          })
        ),
        R = Z.setState,
        D = {
          addAborter: function (e, n) {
            R(function (t) {
              null != t.aborters[e] &&
                console.warn(
                  "Setting aborter for id ".concat(e, " but it already exists")
                ),
                (t.aborters[e] = n);
            });
          },
          abortAndRemoveById: function (e) {
            R(function (n) {
              var t = n.aborters[e];
              null != t && (t.abort(), delete n.aborters[e]);
            });
          },
          removeAborterById: function (e) {
            R(function (n) {
              delete n.aborters[e];
            });
          },
          reset: function () {
            R(function () {
              return { aborters: {} };
            });
          },
          abortAllAndReset: function () {
            R(function (e) {
              Object.keys(e.aborters).forEach(function (n) {
                e.aborters[n].abort(), delete e.aborters[n];
              });
            });
          },
        },
        L = t(71209),
        F = { isNavigationCollapsed: !1 },
        A = (0, S.ZP)()(function (e, n) {
          return (0, L._)((0, f._)({}, F), {
            toggleNavigation: function () {
              e({ isNavigationCollapsed: !n().isNavigationCollapsed });
            },
          });
        }),
        E = t(53086),
        q = t(32983),
        B = t(77442),
        O = t(19841),
        U = t(7851),
        z = t(26430),
        H = t(84913),
        V = t(44043),
        Q = t(82187),
        W = t(69262),
        G = t(91530),
        $ = t.n(G),
        J = t(1454),
        Y = t(3001),
        K = t(75908),
        X = t(35290),
        ee = t(19051),
        en = t(51217),
        et = function () {
          var e = (0, j.useRef)(!1);
          return (
            (0, j.useEffect)(function () {
              return (
                (e.current = !0),
                function () {
                  e.current = !1;
                }
              );
            }, []),
            (0, j.useCallback)(function () {
              return e.current;
            }, [])
          );
        };
      function er(e) {
        var n = e.text,
          t = et(),
          r = (0, m._)((0, j.useState)(!0), 2),
          a = r[0],
          i = r[1],
          o = (0, m._)((0, j.useState)(0), 2),
          s = o[0],
          l = o[1],
          u = (0, j.useMemo)(
            function () {
              return new ea().humanTypingDelaysQuertyDistance(n);
            },
            [n]
          );
        return (
          (0, j.useEffect)(
            function () {
              n &&
                a &&
                (i(!0),
                u.forEach(function (e, n) {
                  setTimeout(function () {
                    t() && (l(n), n === u.length - 1 && i(!1));
                  }, e);
                }));
            },
            [u, t, a, n]
          ),
          (0, p.jsxs)(p.Fragment, {
            children: [n.substring(0, s + 1), a && "▋"],
          })
        );
      }
      var ea = (function () {
          function e() {
            (0, en._)(this, e);
          }
          var n = e.prototype;
          return (
            (n.qwertyDistance = function (e, n) {
              var t,
                r,
                a = {
                  q: [0, 0],
                  w: [1, 0],
                  e: [2, 0],
                  r: [3, 0],
                  t: [4, 0],
                  y: [5, 0],
                  u: [6, 0],
                  i: [7, 0],
                  o: [8, 0],
                  p: [9, 0],
                  a: [0, 1],
                  s: [1, 1],
                  d: [2, 1],
                  f: [3, 1],
                  g: [4, 1],
                  h: [5, 1],
                  j: [6, 1],
                  k: [7, 1],
                  l: [8, 1],
                  z: [0, 2],
                  x: [1, 2],
                  c: [2, 2],
                  v: [3, 2],
                  b: [4, 2],
                  n: [5, 2],
                  m: [6, 2],
                },
                i = (0, m._)(
                  null !== (t = a[e.toLowerCase()]) && void 0 !== t
                    ? t
                    : [0, 0],
                  2
                ),
                o = i[0],
                s = i[1],
                l = (0, m._)(
                  null !== (r = a[n.toLowerCase()]) && void 0 !== r
                    ? r
                    : [0, 0],
                  2
                );
              return Math.abs(o - l[0]) + Math.abs(s - l[1]);
            }),
            (n.humanTypingDelaysQuertyDistance = function (e) {
              for (
                var n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 10,
                  t =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : 100,
                  r = 0,
                  a = [],
                  i = 0;
                i < e.length;
                ++i
              ) {
                var o = void 0;
                if (i > 0) {
                  var s = this.qwertyDistance(e[i - 1], e[i]);
                  o =
                    0 === s
                      ? this.getRandomInt(n, Math.floor(t / 2))
                      : 1 === s
                      ? this.getRandomInt(n, Math.floor((2 * t) / 3))
                      : this.getRandomInt(n, t);
                } else o = this.getRandomInt(n, t);
                a.push(o + r), (r += o);
              }
              return a;
            }),
            (n.getRandomInt = function (e, n) {
              return Math.floor(Math.random() * (n - e + 1)) + e;
            }),
            e
          );
        })(),
        ei = t(66958),
        eo = t(38317),
        es = t(19265),
        el = t(39400),
        eu = t(32787),
        ec = t(85023),
        ed = t(97688),
        ef = t(45494),
        eh = "oai/apps/hasSeenHistoryFilteredDisclosure/".concat("2023-03-21"),
        em = "conversationHistory";
      function eg() {
        var e,
          n = (0, T.hz)(),
          t = n.has(M.Ud),
          r = (0, ef.Z)().isLoading,
          a = (0, eu.kP)().session,
          i = null == a ? void 0 : a.accessToken,
          o = !t && !!i && !r,
          s = (0, el.N)({
            queryKey: [em],
            queryFn: function (e) {
              var t = e.pageParam;
              return _.ZP.getConversations(
                t || 0,
                28,
                null == a ? void 0 : a.accessToken,
                n.has(M.QI)
              );
            },
            getNextPageParam: function (e) {
              var n = e.offset + e.limit;
              return n < e.total ? n : void 0;
            },
            enabled: o,
          }),
          l = s.data,
          u = s.fetchNextPage,
          c = s.hasNextPage,
          d = s.isInitialLoading,
          f = s.isFetchingNextPage,
          h = s.isError,
          m = (0, j.useMemo)(
            function () {
              return null !==
                (e =
                  null == l
                    ? void 0
                    : l.pages.flatMap(function (e) {
                        return e.items;
                      })) && void 0 !== e
                ? e
                : [];
            },
            [l]
          );
        return {
          data: l,
          conversations: m,
          fetchNextPage: u,
          hasNextPage: c,
          isLoading: d,
          isFetchingNextPage: f,
          isError: o && h,
        };
      }
      function ep() {
        var e = (0, x.NL)();
        return (0, j.useCallback)(
          function () {
            e.invalidateQueries([em]);
          },
          [e]
        );
      }
      function ex() {
        var e = (0, g._)([
          "flex flex-col gap-2 pb-2 text-gray-100 text-sm\n",
          "",
        ]);
        return (
          (ex = function () {
            return e;
          }),
          e
        );
      }
      function ev() {
        var e = (0, g._)([
          "flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer break-all\n",
          ")}\n",
          ")}\n",
          "\n",
        ]);
        return (
          (ev = function () {
            return e;
          }),
          e
        );
      }
      function eb() {
        var e = (0, g._)([
          "flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer hover:pr-14 break-all\n",
          "\n",
        ]);
        return (
          (eb = function () {
            return e;
          }),
          e
        );
      }
      function ey() {
        var e = (0, g._)(["text-sm border-none bg-transparent p-0 m-0 w-full"]);
        return (
          (ey = function () {
            return e;
          }),
          e
        );
      }
      function ej() {
        var e = (0, g._)([
          "flex-1 text-ellipsis max-h-5 overflow-hidden break-all relative",
        ]);
        return (
          (ej = function () {
            return e;
          }),
          e
        );
      }
      function ew() {
        var e = (0, g._)([
          "h-9 pb-2 pt-3 px-3 text-xs text-gray-500 font-medium text-ellipsis overflow-hidden break-all bg-gray-900",
        ]);
        return (
          (ew = function () {
            return e;
          }),
          e
        );
      }
      function eC() {
        var e = (0, g._)([
          "absolute inset-y-0 right-0 w-8 z-10 bg-gradient-to-l\n",
          "",
        ]);
        return (
          (eC = function () {
            return e;
          }),
          e
        );
      }
      function ek() {
        var e = (0, g._)(["absolute flex right-1 z-10 text-gray-300\n", ""]);
        return (
          (ek = function () {
            return e;
          }),
          e
        );
      }
      function e_() {
        var e = (0, g._)(["p-1 hover:text-white"]);
        return (
          (e_ = function () {
            return e;
          }),
          e
        );
      }
      var eT = (0, Y.vU)({
          historyBucketToday: {
            id: "history.bucket.today",
            defaultMessage: "Today",
            description: "Label for today's history bucket",
          },
          historyBucketYesterday: {
            id: "history.bucket.yesterday",
            defaultMessage: "Yesterday",
            description: "Label for yesterday's history bucket",
          },
          historyBucketLastSeven: {
            id: "history.bucket.lastSeven",
            defaultMessage: "Previous 7 Days",
            description: "Label for the history bucket of the previous 7 days",
          },
          historyBucketLastThirty: {
            id: "history.bucket.lastThirty",
            defaultMessage: "Previous 30 Days",
            description: "Label for the history bucket of the previous 30 days",
          },
          unableToLoadHistory: {
            id: "history.unableToLoad",
            defaultMessage: "Unable to load history",
            description: "Error message when history fails to load",
          },
          retryButton: {
            id: "history.retryButton",
            defaultMessage: "Retry",
            description: "Button to retry loading history",
          },
          showMoreButton: {
            id: "history.showMoreButton",
            defaultMessage: "Show more",
            description: "Button to show more history items",
          },
        }),
        eM = {
          initial: function (e) {
            return e.isNew ? { opacity: 0, height: 0, overflow: "hidden" } : {};
          },
          animate: function () {
            return { opacity: 1, height: "auto" };
          },
          exit: function () {
            return { opacity: 0, height: 0 };
          },
        };
      function eN(e) {
        var n,
          t,
          r,
          a,
          i,
          o,
          s = e.activeId,
          l = e.onNewThread,
          u = e.onUpdateUserModifiedTitle,
          c = e.userModifiedTitle,
          d = e.newChatName,
          h = e.onSetSharingModalOpen,
          g = e.setNewChatName,
          x = e.setActiveRequests,
          y = (0, K.Z)(),
          w = (0, T.hz)(),
          C = (0, m._)((0, j.useState)(!1), 2),
          k = C[0],
          _ = C[1],
          N = (0, m._)((0, j.useState)(0), 2),
          P = N[0],
          S = N[1],
          I = (0, ee.Z)(),
          Z = eg(),
          R = Z.conversations,
          D = Z.hasNextPage,
          L = Z.fetchNextPage,
          F = Z.isLoading,
          A = Z.isFetchingNextPage,
          E = Z.isError,
          q = ep();
        (n = (0, j.useRef)(!!ec.m.getItem(eh))),
          (r = (t = eg()).data),
          (a = t.isError),
          (0, j.useEffect)(
            function () {
              var e, t;
              a ||
                (null == r
                  ? void 0
                  : null === (e = r.pages) || void 0 === e
                  ? void 0
                  : null === (t = e[0]) || void 0 === t
                  ? void 0
                  : t.has_missing_conversations) !== !0 ||
                n.current ||
                ed.m.warning(
                  "We've restored conversation history for all ChatGPT users and resolved the underlying issue, which was caused by a significant bug in an open-source library.\n\nIn order to ensure that this issue does not reoccur, users will not be able to retrieve their chat history from the morning of March 20th. We apologize to our users for any difficulties this may cause.",
                  {
                    duration: 0,
                    hasCloseButton: !0,
                    onRemove: function () {
                      ec.m.setItem(eh, !0), (n.current = !0);
                    },
                  }
                );
            },
            [null == r ? void 0 : r.pages, a]
          );
        var B =
          ((i = (0, j.useRef)()),
          (o = (0, j.useRef)()),
          ((0, j.useEffect)(
            function () {
              (i.current = o.current), (o.current = R);
            },
            [R]
          ),
          R === o.current)
            ? i.current
            : o.current);
        (0, j.useEffect)(
          function () {
            I(function () {
              S(P + 1);
            }, (0, z.Z)((0, H.Z)(), Date.now()) + 1e3);
          },
          [P, I]
        );
        var G = 0 === R.length,
          $ = (0, j.useMemo)(
            function () {
              return R.reduce(
                function (e, n) {
                  var t,
                    r,
                    a = new Date(
                      null !==
                        (r =
                          null !== (t = n.update_time) && void 0 !== t
                            ? t
                            : n.create_time) && void 0 !== r
                        ? r
                        : 0
                    ),
                    i = (0, U.Z)(new Date(), a);
                  if (0 === i) e.recent.today.items.push(n);
                  else if (i <= 1) e.recent.yesterday.items.push(n);
                  else if (i <= 7) e.recent.lastSeven.items.push(n);
                  else if (i <= 30) e.recent.lastThirty.items.push(n);
                  else if ((0, W.Z)(a)) {
                    var o = (0, Q.Z)(a),
                      s = (0, V.Z)(a),
                      l = "".concat(o, "-").concat(s);
                    e.dynamicMonths[l]
                      ? e.dynamicMonths[l].items.push(n)
                      : (e.dynamicMonths[l] = {
                          label: y.formatDate(a, { month: "long" }),
                          items: [n],
                        });
                  } else {
                    var u = (0, Q.Z)(a),
                      c = "".concat(u, "-");
                    e.dynamicYears[c]
                      ? e.dynamicYears[c].items.push(n)
                      : (e.dynamicYears[c] = {
                          label: y.formatDate(a, { year: "numeric" }),
                          items: [n],
                        });
                  }
                  return e;
                },
                {
                  recent: {
                    today: {
                      label: (0, p.jsx)(
                        X.Z,
                        (0, f._)({}, eT.historyBucketToday)
                      ),
                      items: [],
                    },
                    yesterday: {
                      label: (0, p.jsx)(
                        X.Z,
                        (0, f._)({}, eT.historyBucketYesterday)
                      ),
                      items: [],
                    },
                    lastSeven: {
                      label: (0, p.jsx)(
                        X.Z,
                        (0, f._)({}, eT.historyBucketLastSeven)
                      ),
                      items: [],
                    },
                    lastThirty: {
                      label: (0, p.jsx)(
                        X.Z,
                        (0, f._)({}, eT.historyBucketLastThirty)
                      ),
                      items: [],
                    },
                  },
                  dynamicMonths: {},
                  dynamicYears: {},
                }
              );
            },
            [P, R]
          );
        return (0, p.jsxs)(eP, {
          $centered: F || (E && G),
          children: [
            G && F && (0, p.jsx)(es.Z, { className: "m-auto" }),
            G &&
              E &&
              (0, p.jsxs)("div", {
                className: "p-3 text-center italic text-gray-500",
                children: [
                  (0, p.jsx)(X.Z, (0, f._)({}, eT.unableToLoadHistory)),
                  !k &&
                    (0, p.jsx)("div", {
                      className: "mt-1",
                      children: (0, p.jsx)(ei.z, {
                        as: "button",
                        color: "dark",
                        size: "small",
                        className: "m-auto mt-2",
                        onClick: function () {
                          _(!0), q();
                        },
                        children: (0, p.jsx)(X.Z, (0, f._)({}, eT.retryButton)),
                      }),
                    }),
                ],
              }),
            !F &&
              (0, p.jsx)("div", {
                children: (0, p.jsx)(v.M, {
                  initial: !1,
                  children: w.has(M.QI)
                    ? [$.recent, $.dynamicMonths, $.dynamicYears].flatMap(
                        function (e, n) {
                          return (0, p.jsx)(
                            "span",
                            {
                              children: Object.entries(e).map(function (e) {
                                var n = (0, m._)(e, 2),
                                  t = n[0],
                                  r = n[1],
                                  a = r.items,
                                  i = r.label;
                                if ("today" !== t && !a.length) return null;
                                var o = !!a.find(function (e) {
                                  var n;
                                  return (
                                    R.length > 0 &&
                                    e.id ===
                                      (null === (n = R[0]) || void 0 === n
                                        ? void 0
                                        : n.id)
                                  );
                                });
                                return (0, p.jsxs)(
                                  b.E.div,
                                  {
                                    className: "relative",
                                    layoutId: "bucket-".concat(t),
                                    layout: "position",
                                    initial: {
                                      height: 0,
                                      opacity: 1,
                                      position: "relative",
                                    },
                                    animate: {
                                      height: "auto",
                                      opacity: 1,
                                      transition: {
                                        duration: 0.2,
                                        ease: "easeIn",
                                      },
                                    },
                                    children: [
                                      a.length > 0 &&
                                        (0, p.jsx)(b.E.div, {
                                          className: (0, O.Z)(
                                            "sticky top-0",
                                            o ? "z-[16]" : "z-[14]"
                                          ),
                                          layoutId: "bucketTitle-".concat(t),
                                          layout: "position",
                                          children: (0, p.jsx)(eL, {
                                            children: i,
                                          }),
                                        }),
                                      (0, p.jsx)("ol", {
                                        children: a.map(function (e, n) {
                                          var t = s === e.id,
                                            r =
                                              null == B
                                                ? void 0
                                                : B.find(function (n) {
                                                    return n.id === e.id;
                                                  });
                                          return (0,
                                          p.jsx)(b.E.li, { className: (0, O.Z)("relative", o && 0 === n ? "z-[15]" : ""), layoutId: "".concat(e.id), layout: "position", custom: { isNew: !r }, variants: eM, initial: "initial", animate: "animate", exit: "exit", children: (0, p.jsx)(eS, { id: e.id, title: e.title, newChatName: t ? d : void 0, setNewChatName: g, userModifiedTitle: t ? c : "", onUpdateUserModifiedTitle: u, active: t, onNewThread: l, setActiveRequests: x, onSetSharingModalOpen: h }) }, "history-item-".concat(e.id));
                                        }),
                                      }),
                                    ],
                                  },
                                  t
                                );
                              }),
                            },
                            "category-".concat(n)
                          );
                        }
                      )
                    : R.map(function (e) {
                        var n = s === e.id;
                        return (0,
                        p.jsx)(eS, { id: e.id, title: e.title, newChatName: n ? d : void 0, setNewChatName: g, userModifiedTitle: n ? c : "", onUpdateUserModifiedTitle: u, active: n, onNewThread: l, setActiveRequests: x, onSetSharingModalOpen: h }, e.id);
                      }),
                }),
              }),
            D &&
              (0, p.jsx)(ei.z, {
                as: "button",
                onClick: function () {
                  return L();
                },
                color: "dark",
                className: "m-auto mb-2",
                size: "small",
                loading: A,
                children: (0, p.jsx)(X.Z, (0, f._)({}, eT.showMoreButton)),
              }),
          ],
        });
      }
      var eP = w.Z.div(ex(), function (e) {
        return e.$centered && "h-full justify-center items-center";
      });
      function eS(e) {
        var n = e.id,
          t = e.title,
          r = e.active,
          a = e.onNewThread,
          i = e.onUpdateUserModifiedTitle,
          o = e.newChatName,
          s = e.setNewChatName,
          l = e.userModifiedTitle,
          u = e.forwardRef,
          c = e.onSetSharingModalOpen,
          d = e.setActiveRequests,
          f = (0, B.lj)(),
          h = (0, C.WS)(),
          g = (0, y.useRouter)(),
          x = (0, m._)((0, j.useState)(!1), 2),
          v = x[0],
          b = x[1],
          w = (0, j.useRef)(null),
          M = (0, m._)((0, j.useState)(!1), 2),
          N = M[0],
          P = M[1],
          S = (0, T.hz)(),
          I = (0, m._)((0, j.useState)(), 2),
          Z = I[0],
          R = I[1],
          L = S.has("shareable_links") && r,
          F = ep(),
          A = (0, j.useCallback)(
            function (e) {
              var r, a;
              if (
                (null == e || e.preventDefault(),
                b(!1),
                (null === (r = w.current) || void 0 === r ? void 0 : r.value) &&
                  (null === (a = w.current) || void 0 === a
                    ? void 0
                    : a.value) !== t)
              ) {
                var o = w.current.value;
                _.ZP.patchConversation(n, { title: o }),
                  i(o),
                  h(k.s6.renameThread, { threadId: n, content: o }),
                  F();
              }
            },
            [h, n, F, i, t]
          ),
          E = (0, j.useCallback)(
            function (e) {
              "Enter" === e.key && A();
            },
            [A]
          ),
          q = (0, j.useCallback)(
            function () {
              _.ZP.patchConversation(n, { is_visible: !1 }).then(function () {
                F();
              }),
                a();
            },
            [n, a, F]
          ),
          U = (0, j.useCallback)(
            function (e) {
              D.abortAllAndReset(),
                d(new Set()),
                e.preventDefault(),
                s(""),
                R(void 0),
                h(k.s6.loadThread, { threadId: n }),
                g.push("/c/".concat(n), void 0, { shallow: !0 });
            },
            [h, n, g, d, s]
          ),
          z = l || (r && o) || t;
        if (
          ((0, j.useEffect)(
            function () {
              r && o && o !== Z && R(o);
            },
            [r, o, z, Z, l]
          ),
          v)
        )
          return (0, p.jsxs)(eZ, {
            $active: r,
            children: [
              (0, p.jsx)(eo.ZP, { icon: J.IC0, className: "flex-shrink-0" }),
              (0, p.jsx)(eR, {
                ref: w,
                type: "text",
                defaultValue: z,
                autoFocus: !0,
                onKeyDown: E,
                className: "mr-0",
                onBlur: A,
              }),
              (0, p.jsxs)(eA, {
                $active: !0,
                children: [
                  (0, p.jsx)(eE, {
                    onClick: A,
                    children: (0, p.jsx)(eo.ZP, { icon: J.UgA }),
                  }),
                  (0, p.jsx)(eE, {
                    onClick: function (e) {
                      e.preventDefault(), b(!1);
                    },
                    children: (0, p.jsx)(eo.ZP, { icon: J.q5L }),
                  }),
                ],
              }),
            ],
          });
        var H = Z && r && !f && !l;
        return (0, p.jsxs)(eI, {
          onClick: r ? $() : U,
          $active: r,
          $sharing: L,
          className: (0, O.Z)("group", H && "animate-flash"),
          ref: u,
          children: [
            (0, p.jsx)(eo.ZP, { icon: N ? J.Ybf : J.IC0 }),
            (0, p.jsxs)(eD, {
              children: [
                H
                  ? (0, p.jsx)(er, { text: z })
                  : N
                  ? 'Delete "'.concat(z, '"?')
                  : z,
                (!Z || !r) && (0, p.jsx)(eF, { $active: r }),
              ],
            }),
            N &&
              (0, p.jsxs)(eA, {
                $active: !0,
                children: [
                  (0, p.jsx)(eE, {
                    onClick: q,
                    children: (0, p.jsx)(eo.ZP, { icon: J.UgA }),
                  }),
                  (0, p.jsx)(eE, {
                    onClick: function () {
                      P(!1);
                    },
                    children: (0, p.jsx)(eo.ZP, { icon: J.q5L }),
                  }),
                ],
              }),
            r &&
              !N &&
              (0, p.jsxs)(eA, {
                $active: r,
                children: [
                  (0, p.jsx)(eE, {
                    onClick: function (e) {
                      e.preventDefault(), b(!0);
                    },
                    children: (0, p.jsx)(eo.ZP, { icon: J.Nte }),
                  }),
                  L &&
                    (0, p.jsx)(eE, {
                      onClick: function (e) {
                        e.preventDefault(), c();
                      },
                      children: (0, p.jsx)(eo.ZP, { icon: J.A8q }),
                    }),
                  (0, p.jsx)(eE, {
                    onClick: function () {
                      return P(!0);
                    },
                    children: (0, p.jsx)(eo.ZP, { icon: J.Ybf }),
                  }),
                ],
              }),
          ],
        });
      }
      var eI = w.Z.a(
          ev(),
          function (e) {
            var n = e.$active,
              t = e.$sharing;
            return n && t ? "pr-[4.5rem]" : "";
          },
          function (e) {
            var n = e.$active,
              t = e.$sharing;
            return n && !t ? "pr-14" : "";
          },
          function (e) {
            return e.$active
              ? "bg-gray-800 hover:bg-gray-800"
              : "hover:pr-4 bg-gray-900";
          }
        ),
        eZ = w.Z.div(eb(), function (e) {
          return e.$active
            ? "pr-14 bg-gray-800 hover:bg-gray-800"
            : "bg-gray-900";
        }),
        eR = w.Z.input(ey()),
        eD = w.Z.div(ej()),
        eL = w.Z.div(ew()),
        eF = w.Z.div(eC(), function (e) {
          return e.$active
            ? "from-gray-800"
            : "from-gray-900 group-hover:from-[#2A2B32]";
        }),
        eA = w.Z.div(ek(), function (e) {
          return e.$active ? "visible" : "invisible group-hover:visible";
        }),
        eE = w.Z.button(e_()),
        eq = t(9849),
        eB = t(40638),
        eO = t(58709),
        eU = t(16578),
        ez = t.n(eU),
        eH = t(54887),
        eV = t.n(eH),
        eQ = t(13002);
      function eW(e) {
        var n = e.url,
          t = e.name,
          r = e.size,
          a = e.large,
          i = e.className;
        return (0, p.jsxs)("div", {
          className: (0, O.Z)("relative", i),
          style: { width: r, height: r },
          children: [
            (0, p.jsx)("img", {
              src: n,
              alt: "".concat(t, " logo"),
              className: (0, O.Z)(
                "h-full w-full bg-white",
                a ? "rounded-[5px]" : "rounded-sm"
              ),
            }),
            (0, p.jsx)("div", {
              className: (0, O.Z)(
                "absolute inset-0 ring-1 ring-inset ring-black/10",
                a ? "rounded-[5px]" : "rounded-sm"
              ),
            }),
          ],
        });
      }
      function eG() {
        var e = (0, g._)([
          "relative p-1 ",
          " text-white flex items-center justify-center",
        ]);
        return (
          (eG = function () {
            return e;
          }),
          e
        );
      }
      function e$() {
        var e = (0, g._)([
          "\n  absolute w-4 h-4 rounded-full text-[10px] text-white flex  justify-center items-center right-0 top-[20px] -mr-2 border border-white\n  ",
          "\n  ",
          "\n",
        ]);
        return (
          (e$ = function () {
            return e;
          }),
          e
        );
      }
      function eJ() {
        var e = (0, g._)([
          "bg-[#5436DA] text-white flex justify-center items-center relative tracking-widest",
        ]);
        return (
          (eJ = function () {
            return e;
          }),
          e
        );
      }
      function eY() {
        var e = (0, g._)(["relative flex"]);
        return (
          (eY = function () {
            return e;
          }),
          e
        );
      }
      var eK = w.Z.div(eG(), function (e) {
          return e.$isMessageRedesign
            ? "rounded-full h-7 w-7"
            : "rounded-sm h-[30px] w-[30px]";
        }),
        eX = w.Z.span(
          e$(),
          function (e) {
            return "warning" === e.$type && "bg-orange-500 text-white";
          },
          function (e) {
            return "danger" === e.$type && "bg-red-500 text-white";
          }
        ),
        e0 = function (e) {
          var n = e.iconName,
            t = e.background,
            r = e.notice,
            a = (0, T.hz)().has(M.FZ),
            i = eo.nI;
          switch (n) {
            case "globe":
              i = J.RsK;
              break;
            case "terminal":
              i = J.cDN;
              break;
            case "text":
              i = J.RUS;
              break;
            case "browsing":
              i = J.jRj;
              break;
            case "code":
              i = eQ.oT$;
              break;
            case "plugin":
              i = J.yG;
          }
          return (0, p.jsxs)(eK, {
            $isMessageRedesign: a,
            style: { backgroundColor: t },
            children: [
              (0, p.jsx)(eo.ZP, { icon: i, size: "medium" }),
              r && (0, p.jsx)(eX, { $type: r, children: "!" }),
            ],
          });
        },
        e1 = function (e) {
          var n = e.plugin,
            t = e.notice,
            r = (0, T.hz)().has(M.FZ);
          return (0, p.jsxs)(eK, {
            $isMessageRedesign: r,
            className: "p-0",
            children: [
              (0, p.jsx)(eW, {
                url: n.manifest.logo_url,
                name: n.manifest.name_for_human,
                size: "100%",
              }),
              t && (0, p.jsx)(eX, { $type: t, children: "!" }),
            ],
          });
        },
        e2 = w.Z.div(eJ()),
        e3 = w.Z.div(eY()),
        e4 = { small: 20, redesign: 28, medium: 38 },
        e5 = function (e) {
          var n,
            t = e.user,
            r = e.size,
            a = e.notice,
            i = a && (0, p.jsx)(eX, { $type: a, children: "!" }),
            o = (0, T.hz)().has(M.FZ);
          if ((null == t ? void 0 : t.picture) != null)
            return (0, p.jsxs)(e3, {
              children: [
                (0, p.jsx)(eV(), {
                  src: t.picture,
                  alt: "User",
                  width: e4[r],
                  height: e4[r],
                  className: o ? "rounded-full" : "rounded-sm",
                }),
                i,
              ],
            });
          var s = (
            null !== (n = null == t ? void 0 : t.name) && void 0 !== n ? n : ""
          )
            .split(" ")
            .map(function (e) {
              return e[0];
            })
            .join("")
            .toUpperCase();
          return (0, p.jsxs)(e2, {
            className: (0, O.Z)(
              "redesign" === r
                ? "h-7 w-7 text-xs"
                : "small" === r
                ? "h-5 w-5 text-xs"
                : "h-8 w-8 text-xs",
              o ? "rounded-full" : "rounded-sm"
            ),
            children: [
              s ||
                (0, p.jsx)(eo.ZP, {
                  icon: J.fzv,
                  size: "redesign" === r ? "small" : r,
                }),
              i,
            ],
          });
        };
      function e6(e) {
        var n = e.children;
        return (0, p.jsx)(eB.u, {
          as: j.Fragment,
          enter: "transition ease-out duration-200",
          enterFrom: "opacity-0 translate-y-1",
          enterTo: "opacity-100 translate-y-0",
          leave: "transition ease-in duration-150",
          leaveFrom: "opacity-100 translate-y-0",
          leaveTo: "opacity-0 translate-y-1",
          children: n,
        });
      }
      var e7 = t(86546),
        e8 = t(21722),
        e9 = t(39889),
        ne = t(14412);
      function nn() {
        var e,
          n,
          t = (0, y.useRouter)(),
          r = (0, eu.kP)().session,
          a =
            (null == r
              ? void 0
              : null === (e = r.user) || void 0 === e
              ? void 0
              : e.idp) === "auth0",
          i = !!(null == r
            ? void 0
            : null === (n = r.user) || void 0 === n
            ? void 0
            : n.mfa);
        return {
          setupMfa: (0, j.useCallback)(
            (0, e8._)(function () {
              var e;
              return (0, e9.Jh)(this, function (n) {
                if (
                  ((e = new URL(t.asPath, window.location.origin).toString()),
                  !a)
                )
                  throw Error("Only username/password users can enable MFA");
                if (!r) throw Error("No session found, cannot enable MFA");
                if ("mocked" === r.authProvider)
                  throw Error(
                    "Mock users can't enable MFA! Please setup Auth0 following the instructions in the README"
                  );
                return (
                  (0, ne.signIn)(
                    r.authProvider,
                    { callbackUrl: e },
                    { prompt: "login", oai_enforce_mfa: "true" }
                  ),
                  [2]
                );
              });
            }),
            [t.asPath, r, a]
          ),
          isUsernamePassword: a,
          isLoggedInWithMfa: i,
        };
      }
      function nt() {
        var e = (0, g._)(["absolute right-0 top-1/2 -translate-y-1/2"]);
        return (
          (nt = function () {
            return e;
          }),
          e
        );
      }
      var nr = j.forwardRef(function (e, n) {
          var t = e.name,
            r = e.placeholder,
            a = e.type,
            i = e.displayName,
            o = e.onChange,
            s = e.onBlur,
            l = e.value,
            u = e.saveOnBlur,
            c = e.icon,
            d = e.onInputIconClick,
            h = e.className,
            g = e.autoComplete,
            x = e.autoFocus,
            v = e.onPressEnter,
            b = (0, m._)((0, j.useState)(l), 2),
            y = b[0],
            w = b[1],
            C = (0, j.useCallback)(
              function (e) {
                null == s || s(e), u && w(e.target.value);
              },
              [s, u]
            ),
            k = (0, j.useCallback)(
              function (e) {
                null == o || o(e), u && w(e.target.value);
              },
              [o, u]
            ),
            _ = (0, j.useCallback)(
              function (e) {
                "Enter" === e.key && v && (e.preventDefault(), v());
              },
              [v]
            );
          (0, j.useEffect)(
            function () {
              w(l);
            },
            [l]
          );
          var T = (0, f._)({}, u ? {} : { value: l }, u ? { value: y } : {});
          return (0,
          p.jsxs)("div", { className: (0, O.Z)("rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600 dark:bg-gray-700", h), children: [(0, p.jsx)("label", { htmlFor: t, className: "block text-xs font-medium text-gray-900 dark:text-gray-100", children: i }), (0, p.jsxs)("div", { className: (0, O.Z)(i && "mt-1", "relative"), children: [(0, p.jsx)("input", (0, f._)({ ref: n, type: a, name: t, id: t, className: (0, O.Z)("block w-full border-0 p-0 text-gray-900 placeholder-gray-500 outline-none focus:ring-0 dark:bg-gray-700 dark:text-gray-100 sm:text-sm", c && "pr-6"), placeholder: r, onBlur: C, onChange: k, onKeyDown: _, autoComplete: g, autoFocus: x }, T)), c && (0, p.jsx)(na, { onClick: d, children: (0, p.jsx)(eo.ZP, { icon: c }) })] })] });
        }),
        na = w.Z.button(nt()),
        ni = t(27553),
        no = t(6004);
      function ns(e) {
        var n = e.onChange,
          t = e.enabled,
          r = e.size,
          a = e.Icon,
          i = (0, j.useCallback)(
            function () {
              n(!t);
            },
            [t, n]
          ),
          o = !t && "translate-x-0";
        return (0, p.jsxs)(no.r, {
          checked: t,
          onChange: i,
          className: (0, O.Z)(
            t ? "bg-green-600" : "bg-gray-200",
            "relative inline-flex flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-0",
            "large" === r ? "h-6 w-11" : "h-4 w-8"
          ),
          children: [
            (0, p.jsx)("span", {
              className: "sr-only",
              children: "Use setting",
            }),
            (0, p.jsxs)("span", {
              className: (0, O.Z)(
                "pointer-events-none relative inline-block transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
                t && "large" === r ? "translate-x-5" : o,
                t && "small" === r ? "translate-x-4" : o,
                "large" === r ? "h-5 w-5" : "h-3 w-3"
              ),
              children: [
                (0, p.jsx)("span", {
                  className: (0, O.Z)(
                    t
                      ? "opacity-0 duration-100 ease-out"
                      : "opacity-100 duration-200 ease-in",
                    "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
                  ),
                  "aria-hidden": "true",
                }),
                (0, p.jsx)("span", {
                  className: (0, O.Z)(
                    t
                      ? "opacity-100 duration-200 ease-in"
                      : "opacity-0 duration-100 ease-out",
                    "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
                  ),
                  "aria-hidden": "true",
                  children:
                    a &&
                    (0, p.jsx)(a, { className: "h-3 w-3 text-indigo-600" }),
                }),
              ],
            }),
          ],
        });
      }
      var nl = t(57311);
      function nu() {
        var e = (0, g._)(["flex ml-auto gap-2"]);
        return (
          (nu = function () {
            return e;
          }),
          e
        );
      }
      function nc(e) {
        var n = e.buttonText,
          t = e.onCopy,
          r = e.className,
          a = (0, m._)((0, j.useState)(!1), 2),
          i = a[0],
          o = a[1],
          s = et(),
          l = (0, j.useCallback)(
            function () {
              t(),
                o(!0),
                setTimeout(function () {
                  s() && o(!1);
                }, 2e3);
            },
            [s, t]
          );
        return (0, p.jsxs)(p.Fragment, {
          children: [
            !i &&
              (0, p.jsxs)(nd, {
                onClick: l,
                className: r,
                children: [(0, p.jsx)(eo.ZP, { icon: J.j4u }), n],
              }),
            i &&
              (0, p.jsxs)(nd, {
                className: r,
                children: [(0, p.jsx)(eo.ZP, { icon: J.UgA }), n && "Copied!"],
              }),
          ],
        });
      }
      var nd = w.Z.button(nu());
      function nf(e) {
        var n = e.children,
          t = e.sidebarOpen,
          r = e.onClose;
        return (0, p.jsx)(eB.u.Root, {
          show: t,
          as: j.Fragment,
          children: (0, p.jsxs)(eO.V, {
            as: "div",
            className: "relative z-10",
            onClose: r,
            children: [
              (0, p.jsx)("div", { className: "fixed inset-0" }),
              (0, p.jsx)("div", {
                className: "fixed inset-0 overflow-hidden",
                children: (0, p.jsx)("div", {
                  className: "absolute inset-0 overflow-hidden",
                  children: (0, p.jsx)("div", {
                    className:
                      "pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10",
                    children: (0, p.jsx)(eB.u.Child, {
                      as: j.Fragment,
                      enter:
                        "transform transition ease-in-out duration-100 sm:duration-300",
                      enterFrom: "translate-x-full",
                      enterTo: "translate-x-0",
                      leave:
                        "transform transition ease-in-out duration-300 sm:duration-500",
                      leaveFrom: "translate-x-0",
                      leaveTo: "translate-x-full",
                      children: (0, p.jsx)(eO.V.Panel, {
                        className:
                          "pointer-events-auto w-screen max-w-md border-l border-gray-100 dark:border-gray-700",
                        children: (0, p.jsx)("div", {
                          className:
                            "h-full overflow-y-auto bg-white shadow-xl dark:bg-gray-800",
                          children: n,
                        }),
                      }),
                    }),
                  }),
                }),
              }),
            ],
          }),
        });
      }
      var nh = t(57924);
      function nm() {
        var e = (0, g._)([
          "overflow-y-auto h-full md:w-[250px] lg:w-[300px] xl:w-[350px] 2xl:w-[400px] md:border-l md:border-gray-100 md:dark:border-gray-700 bg-white dark:bg-gray-800",
        ]);
        return (
          (nm = function () {
            return e;
          }),
          e
        );
      }
      function ng() {
        var e = (0, g._)(["whitespace-pre-wrap text-sm"]);
        return (
          (ng = function () {
            return e;
          }),
          e
        );
      }
      function np() {
        var e = (0, g._)([
          "px-6 py-4 flex flex-col gap-1 hover:bg-gray-50 dark:hover:bg-gray-500/10 cursor-pointer border-b dark:border-black/10 border-gray-200",
        ]);
        return (
          (np = function () {
            return e;
          }),
          e
        );
      }
      function nx(e) {
        var n = e.children,
          t = e.title,
          r = e.icon,
          a = e.isOpen,
          i = e.slideOver,
          o = e.onClose,
          s = (0, p.jsxs)(ny, {
            children: [
              (0, p.jsxs)("div", {
                className: "flex items-start justify-between",
                children: [
                  (0, p.jsxs)("div", {
                    className:
                      "flex items-center gap-2 px-4 py-2 text-lg font-medium text-gray-900 dark:text-white",
                    children: [(0, p.jsx)(eo.ZP, { icon: r }), t],
                  }),
                  (0, p.jsx)("div", {
                    className: "mr-2 mt-2 flex h-7 items-center",
                    children: (0, p.jsxs)("button", {
                      type: "button",
                      className:
                        "rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2",
                      onClick: o,
                      children: [
                        (0, p.jsx)("span", {
                          className: "sr-only",
                          children: "Close sidebar",
                        }),
                        (0, p.jsx)(eo.ZP, {
                          icon: J.q5L,
                          size: "medium",
                          "aria-hidden": "true",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              n,
            ],
          });
        return i
          ? (0, p.jsx)(nf, { sidebarOpen: a, onClose: o, children: s })
          : a
          ? s
          : null;
      }
      function nv(e) {
        var n = e.clientThreadId,
          t = e.currentLeafId,
          r = e.isOpen,
          a = e.slideOver,
          i = e.onClose,
          o = (0, P.u9)(n, t),
          s = (0, m._)((0, j.useState)(), 2),
          l = s[0],
          u = s[1],
          c = (0, T.hz)(),
          d = (0, j.useCallback)(function () {
            u(void 0);
          }, []),
          f = (0, j.useCallback)(
            function () {
              var e = P.tQ.getTree(n);
              navigator.clipboard.writeText(e.getTextFromThread(t));
            },
            [t, n]
          );
        if (!c.has("debug")) return null;
        var h = o.map(function (e, n) {
          var t = e.author,
            r = t.role,
            a = t.name;
          return (0, p.jsxs)(
            nw,
            {
              role: "button",
              onClick: function () {
                return u(n);
              },
              children: [
                (0, p.jsxs)("div", {
                  className: "text-xs font-medium uppercase text-gray-400",
                  children: [
                    r,
                    a && a !== r && " (".concat(a, ")"),
                    " -> ",
                    nl.Cv.getRecipientFromMessage(e),
                  ],
                }),
                (0, p.jsx)("div", { children: nl.Cv.getTextFromMessage(e) }),
              ],
            },
            e.id
          );
        });
        return (0, p.jsxs)(nx, {
          icon: J.cDN,
          title: "Debug",
          isOpen: r,
          slideOver: a,
          onClose: i,
          children: [
            (0, p.jsxs)("div", {
              className:
                "flex items-center justify-between border-y bg-gray-100 px-4 py-1 text-xs font-medium uppercase text-gray-700",
              children: [
                "Conversation messages",
                (0, p.jsxs)("div", {
                  className: "flex gap-2",
                  children: [
                    (0, p.jsx)(nh.u, {
                      label: "Copy conversation text to clipboard",
                      children: (0, p.jsx)(nc, { onCopy: f }),
                    }),
                    (0, p.jsx)(nh.u, {
                      label: "Download raw conversation",
                      children: (0, p.jsx)(nb, {
                        clientThreadId: n,
                        messages: o,
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, p.jsx)(nj, { children: h }),
            void 0 !== l &&
              (0, p.jsx)(
                ni.ZP,
                {
                  isOpen: !0,
                  onModalClose: d,
                  type: "success",
                  children: (0, p.jsx)("pre", {
                    className:
                      "max-h-[80vh] overflow-auto whitespace-pre-wrap text-xs",
                    children: JSON.stringify(o[l], null, 2),
                  }),
                },
                "DebugMessageModal-".concat(l)
              ),
          ],
        });
      }
      function nb(e) {
        var n = e.clientThreadId,
          t = e.messages,
          r = (0, j.useCallback)(
            function () {
              var e = JSON.stringify(t) + "\n",
                r = new Blob([e], { type: "application/json" }),
                a = URL.createObjectURL(r),
                i = document.createElement("a");
              (i.href = a),
                (i.download = "messages-".concat(
                  P.tQ.getServerThreadId(n),
                  ".jsonl"
                )),
                i.click(),
                URL.revokeObjectURL(a);
            },
            [n, t]
          );
        return (0, p.jsx)("button", {
          onClick: r,
          children: (0, p.jsx)(eo.ZP, { icon: J._hL }),
        });
      }
      var ny = w.Z.div(nm()),
        nj = w.Z.pre(ng()),
        nw = w.Z.div(np());
      function nC(e) {
        var n = e.plugin,
          t = n.manifest.name_for_human;
        return (0, p.jsxs)("div", {
          className: "flex gap-4 rounded bg-gray-50 px-4 py-2 dark:bg-gray-800",
          children: [
            (0, p.jsx)(eW, {
              url: n.manifest.logo_url,
              name: t,
              size: 32,
              className: "flex-shrink-0",
            }),
            (0, p.jsxs)("div", {
              className: "flex flex-col gap-1",
              children: [
                (0, p.jsx)("h2", {
                  className: "align-top text-base font-medium",
                  children: t,
                }),
                (0, p.jsx)("div", {
                  className: "text-sm",
                  children: n.manifest.description_for_human,
                }),
              ],
            }),
          ],
        });
      }
      function nk(e) {
        var n = e.manifestValidationInfo,
          t = (0, h._)(e, ["manifestValidationInfo"]),
          r = n.manifest_dict,
          a = n.warnings,
          i = n.errors;
        return (0, p.jsx)(
          nM,
          (0, f._)({ name: "manifest", content: r, warnings: a, errors: i }, t)
        );
      }
      function n_(e) {
        var n = e.apiValidationInfo,
          t = (0, h._)(e, ["apiValidationInfo"]),
          r = n.openapi_spec_dict,
          a = n.warnings,
          i = n.errors;
        return (0, p.jsx)(
          nM,
          (0, f._)(
            { name: "OpenAPI spec", content: r, warnings: a, errors: i },
            t
          )
        );
      }
      function nT(e) {
        var n = e.apiValidationInfo,
          t = (0, h._)(e, ["apiValidationInfo"]),
          r = n.api_typescript;
        return r
          ? (0, p.jsx)(
              nN,
              (0, f._)({ text: "Prompt for ChatGPT", content: r }, t)
            )
          : null;
      }
      function nM(e) {
        var n = e.name,
          t = e.content,
          r = e.warnings,
          a = e.errors,
          i = (0, h._)(e, ["name", "content", "warnings", "errors"]),
          o = r && r.length > 0,
          s = a && a.length > 0,
          l = "Validated ".concat(n),
          u = (0, p.jsx)(eo.ZP, { icon: J.UgA, className: "text-green-500" });
        return (
          s
            ? ((l = "Errors in ".concat(n)),
              (u = (0, p.jsx)(eo.ZP, {
                icon: J.q5L,
                className: "text-red-500",
              })))
            : o &&
              ((l = "Warnings in ".concat(n)),
              (u = (0, p.jsx)(eo.ZP, {
                icon: J.bcx,
                className: "text-yellow-500",
              }))),
          (0, p.jsx)(
            nN,
            (0, f._)(
              { icon: u, text: l, content: t, warnings: r, errors: a },
              i
            )
          )
        );
      }
      function nN(e) {
        var n = e.icon,
          t = e.text,
          r = e.content,
          a = e.warnings,
          i = e.errors,
          o = e.expanded,
          s = e.onChangeExpanded,
          l = (0, m._)((0, j.useState)(!1), 2),
          u = l[0],
          c = l[1],
          d = null != o ? o : u,
          f = (0, j.useCallback)(
            function () {
              s
                ? s(!d)
                : c(function (e) {
                    return !e;
                  });
            },
            [d, s]
          );
        return (0, p.jsxs)("div", {
          className: "flex flex-col gap-2 text-sm",
          children: [
            (0, p.jsxs)("div", {
              className: "flex items-center gap-1",
              children: [
                n && (0, p.jsx)("div", { children: n }),
                (0, p.jsx)("div", { children: t }),
                (0, p.jsx)("div", {
                  role: "button",
                  className: "cursor-pointer text-gray-500 hover:text-gray-700",
                  onClick: f,
                  children: (0, p.jsx)(eo.ZP, { icon: d ? J.rH8 : J.bTu }),
                }),
              ],
            }),
            d &&
              (0, p.jsxs)(p.Fragment, {
                children: [
                  (0, p.jsxs)("div", {
                    className: "flex flex-col gap-2 font-semibold",
                    children: [
                      i &&
                        i.map(function (e, n) {
                          return (0,
                          p.jsx)("div", { className: "text-red-500", children: e }, n);
                        }),
                      a &&
                        a.map(function (e, n) {
                          return (0,
                          p.jsx)("div", { className: "text-yellow-500", children: e }, n);
                        }),
                    ],
                  }),
                  r &&
                    (0, p.jsx)("pre", {
                      className: "overflow-auto whitespace-pre-wrap text-xs",
                      children:
                        "string" == typeof r ? r : JSON.stringify(r, null, 2),
                    }),
                ],
              }),
          ],
        });
      }
      var nP = t(81949),
        nS = t(14303);
      function nI(e) {
        var n = e.onSuccess,
          t = e.onError,
          r = e.onSettled,
          a = (0, x.NL)(),
          i = (0, nS.D)(_.ZP.updatePluginUserSettings.bind(_.ZP), {
            onSuccess: function (e) {
              nZ(e, a, ["installedAip"]), nR(e, a, ["approvedAip"]), n(e);
            },
            onError: t,
            onSettled: r,
          }).mutate;
        return (0, j.useCallback)(
          function (e) {
            i({ pluginId: e, isInstalled: !0 });
          },
          [i]
        );
      }
      function nZ(e, n, t) {
        n.setQueryData(t, function (n) {
          var t = (0, nP._)((null == n ? void 0 : n.items) || []),
            r = t.findIndex(function (n) {
              return n.id === e.id;
            });
          return (
            -1 !== r ? (t[r] = e) : t.push(e), { count: t.length, items: t }
          );
        });
      }
      function nR(e, n, t) {
        n.setQueryData(t, function (n) {
          var t = (0, nP._)((null == n ? void 0 : n.items) || []),
            r = t.findIndex(function (n) {
              return n.id === e.id;
            });
          return -1 !== r && (t[r] = e), { count: t.length, items: t };
        });
      }
      function nD(e) {
        var n = e.manifest.auth;
        if ("oauth" !== n.type || !e.oauth_client_id) return null;
        var t = new URLSearchParams({
          response_type: "code",
          client_id: e.oauth_client_id,
          redirect_uri: ""
            .concat(window.location.origin, "/aip/")
            .concat(e.id, "/oauth/callback"),
          scope: n.scope,
        });
        return (
          n.client_url.includes("slack.com") &&
            (t.delete("scope"), t.append("user_scope", n.scope)),
          "".concat(n.client_url, "?").concat(t)
        );
      }
      var nL = t(8844),
        nF = t(22121),
        nA = t(69403);
      function nE() {
        return (nE = (0, e8._)(function (e) {
          var n;
          return (0, e9.Jh)(this, function (t) {
            switch (t.label) {
              case 0:
                return (
                  t.trys.push([0, 2, , 3]),
                  [
                    4,
                    (function (e) {
                      return nq.apply(this, arguments);
                    })(e),
                  ]
                );
              case 1:
                return [2, t.sent()];
              case 2:
                return (
                  console.error(
                    "Error making localhost plugin HTTP call",
                    (n = t.sent())
                  ),
                  [
                    2,
                    [
                      {
                        id: (0, nL.Z)(),
                        author: { role: nA.uU.Tool, name: "plugin_service" },
                        content: {
                          content_type: "text",
                          parts: [
                            "Error making localhost plugin HTTP call: ".concat(
                              n
                            ),
                          ],
                        },
                        metadata: {
                          parent_message_id: e.parent_message_id,
                          is_complete: !0,
                        },
                        recipient: "all",
                      },
                    ],
                  ]
                );
              case 3:
                return [2];
            }
          });
        })).apply(this, arguments);
      }
      function nq() {
        return (nq = (0, e8._)(function (e) {
          var n, t, r, a;
          function i(e) {
            return Object.keys(e).map(function (e) {
              return e.toLowerCase();
            });
          }
          return (0, e9.Jh)(this, function (o) {
            switch (o.label) {
              case 0:
                var s;
                if (
                  ((n = { "content-type": "application/json" }),
                  (s = [i(e.headers), i(n)].flat()),
                  new Set(s).size !== s.length)
                )
                  throw Error(
                    "Refusing to make localhost plugin HTTP call with duplicate header keys"
                  );
                return (
                  (t = e.url),
                  e.qs_params.length > 0 &&
                    (t = t + "?" + new URLSearchParams(e.qs_params)),
                  (r = void 0),
                  null !== e.body && (r = JSON.stringify(e.body)),
                  [
                    4,
                    fetch(t, {
                      method: e.method,
                      headers: (0, f._)({}, n, e.headers),
                      body: r,
                    }),
                  ]
                );
              case 1:
                return [4, o.sent().text()];
              case 2:
                if (((a = o.sent()), "chat" === e.api_function_type))
                  return [2, [JSON.parse(a)]];
                if ("kwargs" === e.api_function_type)
                  return [
                    2,
                    [
                      {
                        id: (0, nL.Z)(),
                        author: {
                          role: nA.uU.Tool,
                          name: ""
                            .concat(e.namespace, ".")
                            .concat(e.function_name),
                        },
                        content: { content_type: "text", parts: [a] },
                        metadata: {
                          parent_message_id: e.parent_message_id,
                          is_complete: !0,
                        },
                        recipient: "all",
                      },
                    ],
                  ];
                throw Error("Not implemented");
            }
          });
        })).apply(this, arguments);
      }
      function nB(e) {
        return !!nO(e.domain);
      }
      function nO(e) {
        return /^localhost:\d+$/.test(e)
          ? "http://".concat(e)
          : /^https?:\/\/localhost:\d+$/.test(e)
          ? e
          : null;
      }
      function nU(e) {
        return nz.apply(this, arguments);
      }
      function nz() {
        return (nz = (0, e8._)(function (e) {
          var n, t, r, a, i;
          return (0, e9.Jh)(this, function (o) {
            switch (o.label) {
              case 0:
                return [
                  4,
                  fetch(e + "/.well-known/ai-plugin.json")
                    .then(function (e) {
                      return e.json();
                    })
                    .catch(function (e) {
                      throw Error(
                        "Failed to fetch localhost manifest. Check to ensure your localhost is running and your localhost server has CORS enabled."
                      );
                    }),
                ];
              case 1:
                if (
                  !(r =
                    null == (t = o.sent())
                      ? void 0
                      : null === (n = t.api) || void 0 === n
                      ? void 0
                      : n.url)
                )
                  throw Error(
                    "Localhost manifest is missing OpenAPI spec URL."
                  );
                if (
                  "pathname" ===
                  (a = (function (e) {
                    try {
                      return new URL(e), "full url";
                    } catch (n) {
                      if (e.startsWith("/")) return "pathname";
                      return "neither";
                    }
                  })(r))
                )
                  r = e + r;
                else if ("neither" === a)
                  throw Error(
                    "Localhost manifest OpenAPI spec URL is not a valid URL or path."
                  );
                return [
                  4,
                  fetch(r)
                    .then(function (e) {
                      return e.text();
                    })
                    .catch(function (e) {
                      throw Error("Failed to fetch localhost OpenAPI spec.");
                    })
                    .then(function (e) {
                      try {
                        return nF.ZP.parse(e);
                      } catch (e) {}
                      try {
                        return JSON.parse(e);
                      } catch (e) {}
                      throw Error(
                        "Failed to parse localhost OpenAPI spec as JSON or YAML."
                      );
                    }),
                ];
              case 2:
                (i = o.sent()), (o.label = 3);
              case 3:
                return (
                  o.trys.push([3, 5, , 6]),
                  [
                    4,
                    _.ZP.createOrUpdateLocalhostPlugin({
                      localhost: e,
                      manifest: t,
                      openapiSpec: i,
                    }),
                  ]
                );
              case 4:
                return [2, o.sent()];
              case 5:
                return (
                  o.sent(),
                  ed.m.danger(
                    "Failed to create or update localhost plugin at ".concat(e)
                  ),
                  [3, 6]
                );
              case 6:
                return [2];
            }
          });
        })).apply(this, arguments);
      }
      var nH = t(697),
        nV = (0, S.ZP)(function () {
          return { isOpen: !1 };
        });
      function nQ() {
        nV.setState(function () {
          return { isOpen: !1 };
        });
      }
      function nW(e) {
        var n = e.slideOver,
          t = (0, m._)((0, j.useState)(), 2),
          r = t[0],
          a = t[1],
          i = (0, m._)((0, j.useState)(!1), 2),
          o = i[0],
          s = i[1],
          l = (0, m._)((0, j.useState)(!1), 2),
          u = l[0],
          c = l[1],
          d = (0, m._)((0, j.useState)(!1), 2),
          f = d[0],
          h = d[1],
          g = (0, T.hz)(),
          v = (0, x.NL)(),
          b = nV().isOpen,
          y = (0, nH.p0)(),
          w = (0, j.useMemo)(
            function () {
              return y.find(nB);
            },
            [y]
          ),
          C = (0, j.useCallback)(
            (0, e8._)(function () {
              var e, n;
              return (0, e9.Jh)(this, function (t) {
                switch (t.label) {
                  case 0:
                    if (!w) return [3, 2];
                    return a(void 0), [4, nU(w.domain)];
                  case 1:
                    if (void 0 === (e = t.sent())) return [2];
                    (n = e.plugin),
                      a({
                        manifestValidationInfo: e.manifest_validation_info,
                        apiValidationInfo: e.api_validation_info,
                      }),
                      n && nR(n, v, ["installedAip"]),
                      (t.label = 2);
                  case 2:
                    return [2];
                }
              });
            }),
            [w, v]
          );
        return ((0, j.useEffect)(
          function () {
            C();
          },
          [C]
        ),
        g.has("tools3_dev"))
          ? (0, p.jsx)(nx, {
              icon: J.V7f,
              title: "Plugin devtools",
              isOpen: b,
              slideOver: n,
              onClose: nQ,
              children: (0, p.jsx)("div", {
                className:
                  "border-t border-gray-100 p-2 text-sm dark:border-gray-700",
                children: w
                  ? (0, p.jsxs)("div", {
                      className: "flex flex-col gap-2",
                      children: [
                        (0, p.jsx)("div", {
                          children: (0, p.jsx)(ei.z, {
                            size: "small",
                            color: "neutral",
                            onClick: C,
                            children: "Refresh plugin",
                          }),
                        }),
                        r
                          ? (0, p.jsxs)(p.Fragment, {
                              children: [
                                (0, p.jsx)(nC, { plugin: w }),
                                (0, p.jsx)(nk, {
                                  manifestValidationInfo:
                                    r.manifestValidationInfo,
                                  expanded: o,
                                  onChangeExpanded: s,
                                }),
                                (0, p.jsx)(n_, {
                                  apiValidationInfo: r.apiValidationInfo,
                                  expanded: u,
                                  onChangeExpanded: c,
                                }),
                                (0, p.jsx)(nT, {
                                  apiValidationInfo: r.apiValidationInfo,
                                  expanded: f,
                                  onChangeExpanded: h,
                                }),
                              ],
                            })
                          : (0, p.jsx)("div", {
                              className: "self-center",
                              children: (0, p.jsx)(es.Z, {}),
                            }),
                      ],
                    })
                  : (0, p.jsx)("div", {
                      className: "mt-4 text-center",
                      children:
                        "Please enable a localhost plugin to use devtools.",
                    }),
              }),
            })
          : null;
      }
      function nG() {
        var e = (0, g._)(["block text-sm font-medium mb-1"]);
        return (
          (nG = function () {
            return e;
          }),
          e
        );
      }
      var n$ = (0, Y.vU)({
        settings: {
          id: "settingsModal.settings",
          defaultMessage: "设置",
          description: "Title for the settings modal",
        },
        theme: {
          id: "settingsModal.theme",
          defaultMessage: "主题",
          description: "Label for the theme setting",
        },
        system: {
          id: "settingsModal.system",
          defaultMessage: "系统",
          description: "Option for the system theme",
        },
        dark: {
          id: "settingsModal.dark",
          defaultMessage: "暗色",
          description: "Option for the dark theme",
        },
        light: {
          id: "settingsModal.light",
          defaultMessage: "亮色",
          description: "Option for the light theme",
        },
        exportData: {
          id: "settingsModal.exportData",
          defaultMessage: "Export data",
          description: "Label for the export data button",
        },
        deleteAccount: {
          id: "settingsModal.deleteAccount",
          defaultMessage: "访问官网",
          description: "Label for the delete account button",
        },
        openPluginDevtools: {
          id: "settingsModal.openPluginDevtools",
          defaultMessage: "Open plugin devtools",
          description: "Label for the open plugin devtools setting",
        },
        enable2fa: {
          id: "settingsModal.enable2fa",
          defaultMessage: "Enable two-factor authentication",
          description: "Label for the enable 2FA button",
        },
        chatHistoryDescription: {
          id: "settingsModal.chatHistoryDescription",
          defaultMessage:
            "保存新的聊天记录到您的历史记录，并允许它们被用于改善 ChatGPT 的模型训练。未保存的聊天记录将在 30 天内从ChatGPT的系统中删除。 <link>Learn more</link>",
          description: "Description for the chat history setting",
        },
        dataExportRequested: {
          id: "settingsModal.dataExportRequested",
          defaultMessage:
            "Successfully exported data. You should receive an email shortly with your data.",
          description: "Message shown when a data export request is received",
        },
        dataExportFailed: {
          id: "settingsModal.dataExportFailed",
          defaultMessage:
            "We were unable to process your export at this time. Please try again later.",
          description: "Message shown when a data export request fails",
        },
        dataExportModalTitle: {
          id: "settingsModal.dataExportModalTitle",
          defaultMessage: "Request data export - are you sure?",
          description: "Title for the data export modal",
        },
        dataExportModalConfirm: {
          id: "settingsModal.dataExportModalConfirm",
          defaultMessage: "Confirm export",
          description: "Confirm button for the data export modal",
        },
        dataExportModalCancel: {
          id: "settingsModal.dataExportModalCancel",
          defaultMessage: "Cancel",
          description: "Cancel button for the data export modal",
        },
        dataExportModalDescription1: {
          id: "settingsModal.dataExportModalDescription1",
          defaultMessage:
            "Your account details and conversations will be included in the export.",
          description: "Description for the data export modal",
        },
        dataExportModalDescription2: {
          id: "settingsModal.dataExportModalDescription2",
          defaultMessage:
            "The data will be sent to your registered email in a downloadable file.",
          description: "Description for the data export modal",
        },
        dataExportModalDescription3: {
          id: "settingsModal.dataExportModalDescription3",
          defaultMessage:
            "Processing may take some time. You'll be notified when it's ready.",
          description: "Description for the data export modal",
        },
        dataExportModalDescription4: {
          id: "settingsModal.dataExportModalDescription4",
          defaultMessage: 'To proceed, click "Confirm export" below.',
          description: "Description for the data export modal",
        },
        deleteAccountSessionTooOld: {
          id: "settingsModal.deleteAccountSessionTooOld",
          defaultMessage:
            "Your login session is too old. Please log in again before deleting your account.",
          description:
            "Message shown when the user's login session is too old to delete their account.",
        },
        deleteAccountFailed: {
          id: "settingsModal.deleteAccountFailed",
          defaultMessage: "Failed to delete account. Please try again later.",
          description:
            "Message shown when there's an error deleting the user's account.",
        },
        deleteAccountTitle: {
          id: "settingsModal.deleteAccountTitle",
          defaultMessage: "Delete account - are you sure?",
          description: "Title for the delete account confirmation modal.",
        },
        deleteAccountWarning: {
          id: "settingsModal.deleteAccountWarning",
          defaultMessage:
            "Deleting your account is permanent and cannot be undone.",
          description:
            "Warning message about account deletion being permanent.",
        },
        reuseEmailPhoneWarning: {
          id: "settingsModal.reuseEmailPhoneWarning",
          defaultMessage:
            "For security reasons, you cannot reuse the same email or phone number for a new account.",
          description:
            "Warning message about not being able to reuse email or phone number for a new account.",
        },
        dataRemovalWarning: {
          id: "settingsModal.dataRemovalWarning",
          defaultMessage:
            "All your data, including profile, conversations, and API usage, will be removed.",
          description:
            "Warning message about data removal after account deletion.",
        },
        apiAccessDeletionWarning: {
          id: "settingsModal.apiAccessDeletionWarning",
          defaultMessage:
            "If you've been using ChatGPT with the API, this access will also be deleted.",
          description: "Warning message about API access being deleted.",
        },
        typeEmailLabel: {
          id: "settingsModal.typeEmailLabel",
          defaultMessage: "Please type your account email.",
          description: "Label for email input field when deleting an account.",
        },
        typeDeleteInputLabel: {
          id: "settingsModal.typeDeleteInputLabel",
          defaultMessage: 'To proceed, type "DELETE" in the input field below.',
          description: "Label for DELETE input field when deleting an account.",
        },
        lockedButtonLabel: {
          id: "settingsModal.lockedButtonLabel",
          defaultMessage: "Locked",
          description: "Label for the locked button when deleting an account.",
        },
        deleteAccountButtonLabel: {
          id: "settingsModal.deleteAccountButtonLabel",
          defaultMessage: "Permanently delete my account",
          description: "Label for the button to confirm account deletion.",
        },
        recentLoginMessage: {
          id: "settingsModal.recentLoginMessage",
          defaultMessage:
            "You may only delete your account if you have logged in within the last 10 minutes. Please log in again, then return here to continue.",
          description:
            "Message shown when the user needs to log in again to delete their account.",
        },
        refreshLoginButtonLabel: {
          id: "settingsModal.refreshLoginButtonLabel",
          defaultMessage: "Refresh login",
          description: "Label for the button to refresh login.",
        },
        dataControlsLabel: {
          id: "settingsModal.dataControlsLabel",
          defaultMessage: "数据控制",
          description: "Label for the data controls section.",
        },
        hideLabel: {
          id: "settingsModal.hideLabel",
          defaultMessage: "隐藏",
          description: "Label for the hide button.",
        },
        showLabel: {
          id: "settingsModal.showLabel",
          defaultMessage: "显示",
          description: "Label for the show button.",
        },
        chatHistoryToggleLabel: {
          id: "settingsModal.chatHistoryToggleLabel",
          defaultMessage: "会话历史记录",
          description: "Label for the chat history toggle.",
        },
      });
      function nJ(e) {
        var n = e.onClose,
          t = e.onToggleHistoryDisabled,
          r = e.dataControlsOpen,
          a = (0, K.Z)(),
          i = (0, m._)((0, j.useState)(!1), 2),
          o = i[0],
          s = i[1],
          l = (0, m._)((0, j.useState)(!1), 2),
          u = l[0],
          c = l[1],
          d = (0, j.useContext)(q.QL),
          h = d.historyDisabled,
          g = d.toggleHistoryDisabled,
          x = nV().isOpen,
          v = (0, T.hz)(),
          b = v.has("data_export_enabledno"),
          y = v.has("data_deletion_enabled"),
          w = (0, eu.kP)().session,
          C = v.has("data_controls_enabled"),
          k = (0, j.useCallback)(function () {
            s(!1);
          }, []),
          _ = (0, j.useCallback)(function () {
            c(!1);
          }, []),
          M = (0, j.useCallback)(function (e) {
            e
              ? nV.setState(function () {
                  return { isOpen: !0 };
                })
              : nQ();
          }, []),
          N = (0, j.useCallback)(function () {
            s(!0);
          }, []),
          P = (0, j.useCallback)(function () {
            c(!0);
          }, []),
          S = (0, j.useCallback)(
            function () {
              t(), g();
            },
            [t, g]
          ),
          I = nn(),
          Z = I.setupMfa,
          R = I.isUsernamePassword;
        if (o) return (0, p.jsx)(n0, { onClose: k });
        if (u) return (0, p.jsx)(n1, { onClose: _ });
        var D,
          F,
          A = (0, p.jsxs)("div", {
            className: "mt-2 flex gap-2",
            children: [
              b &&
                (0, p.jsx)("button", {
                  className: C ? "font-medium" : "underline",
                  onClick: N,
                  children: (0, p.jsx)(X.Z, (0, f._)({}, n$.exportData)),
                }),
              b &&
                y &&
                (C
                  ? (0, p.jsx)("div", {
                      className: " text-gray-500 dark:text-gray-500",
                      children: "•",
                    })
                  : (0, p.jsx)("div", {
                      className:
                        "border-l border-black/30 dark:border-white/30",
                    })),
              y &&
                (0, p.jsxs)(p.Fragment, {
                  children: [
                    (0, p.jsx)("button", {
                      className: C ? "font-medium" : "underline",
                      // onClick: P,
                      // 点击时,打开新的页面
                      onClick: function () {
                        window.open("https://xyhelper.cn");
                      },
                      children: (0, p.jsx)(X.Z, (0, f._)({}, n$.deleteAccount)),
                    }),
                    !(null == w
                      ? void 0
                      : null === (D = w.user) || void 0 === D
                      ? void 0
                      : D.mfa) &&
                      R &&
                      (C
                        ? (0, p.jsx)("div", {
                            className: " text-gray-500 dark:text-gray-500",
                            children: "•",
                          })
                        : (0, p.jsx)("div", {
                            className:
                              "border-l border-black/30 dark:border-white/30",
                          })),
                  ],
                }),
              !(null == w
                ? void 0
                : null === (F = w.user) || void 0 === F
                ? void 0
                : F.mfa) &&
                R &&
                (0, p.jsx)("button", {
                  className: C ? "font-medium" : "underline",
                  onClick: Z,
                  children: (0, p.jsx)(X.Z, (0, f._)({}, n$.enable2fa)),
                }),
            ],
          });
        return (0, p.jsx)(ni.ZP, {
          isOpen: !0,
          onModalClose: n,
          size: "small",
          type: "success",
          title: a.formatMessage(n$.settings),
          closeButton: (0, p.jsx)(ni.ol, { onClose: n }),
          children: (0, p.jsxs)("div", {
            className:
              "mt-4 flex flex-col gap-3 text-sm text-gray-600 dark:text-gray-300",
            children: [
              (0, p.jsx)(nX, {}),
              v.has("tools3_dev") &&
                (0, p.jsx)(nY, {
                  label: a.formatMessage(n$.openPluginDevtools),
                  enabled: x,
                  onChange: M,
                }),
              C
                ? (0, p.jsxs)(nK, {
                    label: a.formatMessage(n$.dataControlsLabel),
                    open: r,
                    children: [
                      (0, p.jsx)(nY, {
                        label: a.formatMessage(n$.chatHistoryToggleLabel),
                        enabled: !h,
                        onChange: S,
                        description: (0, p.jsx)("div", {
                          children: (0, p.jsx)(
                            X.Z,
                            (0, L._)((0, f._)({}, n$.chatHistoryDescription), {
                              values: {
                                link: function (e) {
                                  return (0, p.jsx)("a", {
                                    href: "https://help.openai.com/en/articles/7730893 ",
                                    target: "_blank",
                                    className: "underline",
                                    rel: "noreferrer",
                                    children: e,
                                  });
                                },
                              },
                            })
                          ),
                        }),
                      }),
                      A,
                    ],
                  })
                : (0, p.jsx)(p.Fragment, { children: A }),
            ],
          }),
        });
      }
      function nY(e) {
        var n = e.label,
          t = e.enabled,
          r = e.onChange,
          a = e.description;
        return (0, p.jsxs)(p.Fragment, {
          children: [
            (0, p.jsxs)("div", {
              className: "flex items-center justify-between",
              children: [
                (0, p.jsx)("div", { children: n }),
                (0, p.jsx)(ns, { size: "large", enabled: t, onChange: r }),
              ],
            }),
            a &&
              (0, p.jsx)("div", {
                className:
                  "border-b border-black/10 pb-3 text-xs text-gray-500 dark:border-white/10",
                children: a,
              }),
          ],
        });
      }
      function nK(e) {
        var n = e.label,
          t = e.open,
          r = e.children,
          a = (0, m._)((0, j.useState)(t || !1), 2),
          i = a[0],
          o = a[1];
        return (0, p.jsxs)("div", {
          className: "border-t border-black/10 pt-4 dark:border-white/10",
          children: [
            (0, p.jsxs)("div", {
              className: "flex items-center justify-between pb-6",
              children: [
                (0, p.jsx)("div", { children: n }),
                (0, p.jsx)("div", {
                  className: "cursor-pointer text-green-600",
                  onClick: function () {
                    return o(!i);
                  },
                  children: i
                    ? (0, p.jsx)(X.Z, (0, f._)({}, n$.hideLabel))
                    : (0, p.jsx)(X.Z, (0, f._)({}, n$.showLabel)),
                }),
              ],
            }),
            (0, p.jsx)("div", {
              className: (0, O.Z)(
                "transition-max-height -mx-6 -mb-6 overflow-hidden border-black/10 bg-black/[.04] px-6 duration-500 dark:border-white/10 dark:bg-white/[.04]",
                i ? "max-h-80 border-t" : "max-h-0 border-0"
              ),
              children: (0, p.jsx)("div", {
                className: "flex flex-col gap-3 pb-6 pt-4",
                children: r,
              }),
            }),
          ],
        });
      }
      function nX() {
        var e = (0, e7.F)(),
          n = e.theme,
          t = e.setTheme;
        return (0, p.jsxs)("div", {
          className: "flex items-center justify-between",
          children: [
            (0, p.jsx)("div", {
              children: (0, p.jsx)(X.Z, (0, f._)({}, n$.theme)),
            }),
            (0, p.jsxs)("select", {
              value: n,
              onChange: function (e) {
                t(e.target.value);
              },
              className:
                "rounded border border-black/10 bg-transparent text-sm dark:border-white/20",
              children: [
                (0, p.jsx)("option", {
                  value: "system",
                  children: (0, p.jsx)(X.Z, (0, f._)({}, n$.system)),
                }),
                (0, p.jsx)("option", {
                  value: "dark",
                  children: (0, p.jsx)(X.Z, (0, f._)({}, n$.dark)),
                }),
                (0, p.jsx)("option", {
                  value: "light",
                  children: (0, p.jsx)(X.Z, (0, f._)({}, n$.light)),
                }),
              ],
            }),
          ],
        });
      }
      function n0(e) {
        var n = e.onClose,
          t = (0, K.Z)(),
          r = (0, eu.kP)().session,
          a = null == r ? void 0 : r.accessToken,
          i = (0, j.useCallback)(
            function () {
              try {
                _.ZP.submitDataExport(a).then(function () {
                  ed.m.success(t.formatMessage(n$.dataExportRequested)), n();
                });
              } catch (e) {
                ed.m.warning(t.formatMessage(n$.dataExportFailed), {
                  hasCloseButton: !0,
                });
              }
            },
            [a, t, n]
          );
        return (0, p.jsx)(ni.ZP, {
          isOpen: !0,
          onModalClose: n,
          type: "success",
          title: t.formatMessage(n$.dataExportModalTitle),
          primaryButton: (0, p.jsx)(ni.mH, {
            title: t.formatMessage(n$.dataExportModalConfirm),
            color: "primary",
            onClick: i,
          }),
          secondaryButton: (0, p.jsx)(ni.mH, {
            title: t.formatMessage(n$.dataExportModalCancel),
            color: "neutral",
            onClick: n,
          }),
          children: (0, p.jsxs)("div", {
            className: "text-sm",
            children: [
              (0, p.jsxs)("ul", {
                className: "my-3 flex list-disc flex-col gap-1 pl-3",
                children: [
                  (0, p.jsx)("li", {
                    children: (0, p.jsx)(
                      X.Z,
                      (0, f._)({}, n$.dataExportModalDescription1)
                    ),
                  }),
                  (0, p.jsx)("li", {
                    children: (0, p.jsx)(
                      X.Z,
                      (0, f._)({}, n$.dataExportModalDescription2)
                    ),
                  }),
                  (0, p.jsx)("li", {
                    children: (0, p.jsx)(
                      X.Z,
                      (0, f._)({}, n$.dataExportModalDescription3)
                    ),
                  }),
                ],
              }),
              (0, p.jsx)("div", {
                children: (0, p.jsx)(
                  X.Z,
                  (0, f._)({}, n$.dataExportModalDescription4)
                ),
              }),
            ],
          }),
        });
      }
      function n1(e) {
        var n,
          t = e.onClose,
          r = (0, K.Z)(),
          a = (0, eu.kP)().session,
          i = null == a ? void 0 : a.accessToken,
          o =
            null == a
              ? void 0
              : null === (n = a.user) || void 0 === n
              ? void 0
              : n.email,
          s = (0, m._)((0, j.useState)(""), 2),
          l = s[0],
          u = s[1],
          c = (0, m._)((0, j.useState)(""), 2),
          d = c[0],
          h = c[1],
          g = (0, j.useCallback)(
            function () {
              var e,
                n =
                  null == a
                    ? void 0
                    : null === (e = a.user) || void 0 === e
                    ? void 0
                    : e.iat;
              return void 0 === n || Date.now() / 1e3 - n < 600;
            },
            [a]
          ),
          x = (0, j.useCallback)(
            function () {
              try {
                g()
                  ? _.ZP.deactivateAccount(i).then(function () {
                      (0, eu.w7)();
                    })
                  : ed.m.warning(
                      r.formatMessage(n$.deleteAccountSessionTooOld),
                      { hasCloseButton: !0 }
                    );
              } catch (e) {
                ed.m.warning(r.formatMessage(n$.deleteAccountFailed), {
                  hasCloseButton: !0,
                });
              }
            },
            [i, r, g]
          ),
          v = (0, j.useCallback)(function () {
            (0, eu.w7)();
          }, []),
          b = "DELETE" === d && (void 0 === o || l === o),
          y = (0, m._)(
            (0, j.useState)(function () {
              return g();
            }),
            1
          )[0];
        return (0, p.jsx)(ni.ZP, {
          isOpen: !0,
          size: "xs",
          onModalClose: t,
          type: "success",
          title: r.formatMessage(n$.deleteAccountTitle),
          closeButton: (0, p.jsx)(ni.ol, { onClose: t }),
          children: (0, p.jsxs)("div", {
            className: "text-sm",
            children: [
              (0, p.jsxs)("ul", {
                className: "mb-6 mt-4 flex list-disc flex-col gap-1 pl-3",
                children: [
                  (0, p.jsx)("li", {
                    children: (0, p.jsx)(
                      X.Z,
                      (0, f._)({}, n$.deleteAccountWarning)
                    ),
                  }),
                  (0, p.jsx)("li", {
                    children: (0, p.jsx)(
                      X.Z,
                      (0, f._)({}, n$.reuseEmailPhoneWarning)
                    ),
                  }),
                  (0, p.jsx)("li", {
                    children: (0, p.jsx)(
                      X.Z,
                      (0, f._)({}, n$.dataRemovalWarning)
                    ),
                  }),
                  (0, p.jsx)("li", {
                    children: (0, p.jsx)(
                      X.Z,
                      (0, f._)({}, n$.apiAccessDeletionWarning)
                    ),
                  }),
                ],
              }),
              y
                ? (0, p.jsxs)(p.Fragment, {
                    children: [
                      void 0 !== o
                        ? (0, p.jsxs)("div", {
                            className: "mb-4",
                            children: [
                              (0, p.jsx)(n2, {
                                children: (0, p.jsx)(
                                  X.Z,
                                  (0, f._)({}, n$.typeEmailLabel)
                                ),
                              }),
                              (0, p.jsx)(nr, {
                                value: l,
                                placeholder: o,
                                name: "email",
                                onChange: function (e) {
                                  u(e.target.value);
                                },
                              }),
                            ],
                          })
                        : null,
                      (0, p.jsxs)("div", {
                        className: "mb-4",
                        children: [
                          (0, p.jsx)(n2, {
                            children: (0, p.jsx)(
                              X.Z,
                              (0, f._)({}, n$.typeDeleteInputLabel)
                            ),
                          }),
                          (0, p.jsx)(nr, {
                            value: d,
                            onChange: function (e) {
                              h(e.target.value);
                            },
                            name: "delete",
                            className: "mb-4",
                          }),
                        ],
                      }),
                      (0, p.jsx)(ei.z, {
                        color: b ? "danger" : "disabled",
                        onClick: x,
                        disabled: !b,
                        className: "w-full",
                        children: b
                          ? (0, p.jsxs)(p.Fragment, {
                              children: [
                                (0, p.jsx)(eo.ZP, { icon: J.BJv }),
                                " ",
                                (0, p.jsx)(
                                  X.Z,
                                  (0, f._)({}, n$.deleteAccountButtonLabel)
                                ),
                              ],
                            })
                          : (0, p.jsxs)(p.Fragment, {
                              children: [
                                (0, p.jsx)(eo.ZP, { icon: J.UIZ }),
                                " ",
                                (0, p.jsx)(
                                  X.Z,
                                  (0, f._)({}, n$.lockedButtonLabel)
                                ),
                              ],
                            }),
                      }),
                    ],
                  })
                : (0, p.jsxs)(p.Fragment, {
                    children: [
                      (0, p.jsx)("p", {
                        className: "pb-4 text-xs text-gray-500",
                        children: (0, p.jsx)(
                          X.Z,
                          (0, f._)({}, n$.recentLoginMessage)
                        ),
                      }),
                      (0, p.jsx)(ei.z, {
                        color: "primary",
                        onClick: v,
                        className: "w-full",
                        children: (0, p.jsx)(
                          X.Z,
                          (0, f._)({}, n$.refreshLoginButtonLabel)
                        ),
                      }),
                    ],
                  }),
            ],
          }),
        });
      }
      var n2 = w.Z.label(nG());
      function n3() {
        var e = (0, g._)([
          "flex py-3 px-3 items-center gap-3 transition-colors duration-200 text-white cursor-pointer text-sm",
        ]);
        return (
          (n3 = function () {
            return e;
          }),
          e
        );
      }
      function n4() {
        var e = (0, g._)(["", ""]);
        return (
          (n4 = function () {
            return e;
          }),
          e
        );
      }
      function n5() {
        var e = (0, g._)(["my-1.5 h-px bg-white/20"]);
        return (
          (n5 = function () {
            return e;
          }),
          e
        );
      }
      function n6() {
        var e = (0, g._)([
          "rounded-md border border-white/20 hover:bg-gray-500/10",
        ]);
        return (
          (n6 = function () {
            return e;
          }),
          e
        );
      }
      function n7() {
        var e = (0, g._)([
          "flex-col flex-1 transition-opacity duration-500\n",
          "\n",
          "",
        ]);
        return (
          (n7 = function () {
            return e;
          }),
          e
        );
      }
      var n8 = (0, Y.vU)({
          helpAndFaq: {
            id: "navigation.helpAndFaq",
            defaultMessage: "使用帮助",
            description: "github menu item",
          },
          confirmClearConversations: {
            id: "navigation.confirmClearConversations",
            defaultMessage: "确认清除",
            description: "Confirmation text for clearing conversations",
          },
          clearConversations: {
            id: "navigation.clearConversations",
            defaultMessage: "清除所有会话",
            description: "Clear conversations menu item",
          },
          myPlan: {
            id: "navigation.myPlan",
            defaultMessage: "我的计划",
            description: "My plan menu item",
          },
          settings: {
            id: "navigation.settings",
            defaultMessage: "设置",
            description: "Settings menu item",
          },
          logOut: {
            id: "navigation.logOut",
            defaultMessage: "退出登录",
            description: "Log out menu item",
          },
          upgradeToPlus: {
            id: "navigation.upgradeToPlus",
            defaultMessage: "升级Plus",
            description: "Upgrade to Plus menu item",
          },
          newChat: {
            id: "navigation.newChat",
            defaultMessage: "新建会话",
            description: "New chat button label",
          },
          clearChat: {
            id: "navigation.clearChat",
            defaultMessage: "Clear chat",
            description: "Clear chat button label",
          },
          chatHistoryOff: {
            id: "navigation.chatHistoryOff",
            defaultMessage: "Chat History is off.",
            description: "Text indicating that chat history is turned off",
          },
          chatHistoryOffDescription: {
            id: "navigation.chatHistoryOffDescription",
            defaultMessage:
              "Chats won’t be saved in your history or used for training our models to improve ChatGPT. Unsaved chats will be deleted from our systems within 30 days. {learnMore}",
            description: "Description for chat history being off",
          },
          learnMore: {
            id: "navigation.learnMore",
            defaultMessage: "Learn more",
            description: "Learn more link text",
          },
          enableChatHistory: {
            id: "navigation.enableChatHistory",
            defaultMessage: "Enable chat history",
            description: "Enable chat history button label",
          },
          closeSidebar: {
            id: "navigation.closeSidebar",
            defaultMessage: "Close sidebar",
            description: "Close sidebar button label",
          },
          openSidebar: {
            id: "navigation.openSidebar",
            defaultMessage: "Open sidebar",
            description: "Open sidebar button label",
          },
          newLabel: {
            id: "navigation.newLabel",
            defaultMessage: "NEW",
            description: "Label for new features or items",
          },
        }),
        n9 = w.Z.a(n3()),
        te = (0, w.Z)(n9)(n4(), function (e) {
          return e.$active ? "bg-gray-800" : "hover:bg-gray-800";
        });
      function tn(e) {
        var n = e.onClick,
          t = e.href,
          r = e.target,
          a = e.children;
        return (0, p.jsx)(eq.v.Item, {
          children: function (e) {
            var i = e.active;
            return (0, p.jsx)(n9, {
              as: void 0 !== t ? "a" : "button",
              onClick: n,
              href: t,
              target: r,
              className: (0, O.Z)(i ? "bg-gray-700" : "hover:bg-gray-700"),
              children: a,
            });
          },
        });
      }
      var tt = w.Z.div(n5()),
        tr = (0, w.Z)(n9)(n6()),
        ta = w.Z.div(
          n7(),
          function (e) {
            return e.$disableScroll
              ? "overflow-y-hidden opacity-20 pointer-events-none"
              : "overflow-y-auto";
          },
          function (e) {
            return e.$offsetScrollbar && "-mr-2";
          }
        );
      function ti(e) {
        var n = e.showCustomerPortalMenuItem,
          t = e.onClickCustomerPortal,
          r = e.onClickSettings,
          a = e.onDeleteHistory,
          i = (0, C.WS)(),
          o = (0, m._)((0, j.useState)(!1), 2),
          s = o[0],
          l = o[1],
          u = (0, j.useCallback)(
            function () {
              l(!1), a();
            },
            [a]
          ),
          c = eg().conversations.length > 0;
        return (0, p.jsxs)("nav", {
          children: [
            (0, p.jsxs)(tn, {
              as: "a",
              href: "https://xyhelper.cn",
              target: "_blank",
              onClick: function () {
                i(k.s6.clickFaqLink);
              },
              children: [
                (0, p.jsx)(eo.ZP, { icon: J.AlO }),
                (0, p.jsx)(X.Z, (0, f._)({}, n8.helpAndFaq)),
              ],
            }),
            (0, p.jsx)(tt, {}),
            c &&
              (0, p.jsxs)(tn, {
                onClick: function (e) {
                  s ? u() : (l(!0), e.preventDefault());
                },
                children: [
                  (0, p.jsx)(eo.ZP, { icon: s ? J.UgA : J.Ybf }),
                  s
                    ? (0, p.jsx)(
                        X.Z,
                        (0, f._)({}, n8.confirmClearConversations)
                      )
                    : (0, p.jsx)(X.Z, (0, f._)({}, n8.clearConversations)),
                ],
              }),
            n &&
              t &&
              (0, p.jsxs)(tn, {
                onClick: t,
                children: [
                  (0, p.jsx)(eo.ZP, { icon: J.fzv }),
                  (0, p.jsx)(X.Z, (0, f._)({}, n8.myPlan)),
                ],
              }),
            (0, p.jsxs)(tn, {
              onClick: r,
              children: [
                (0, p.jsx)(eo.ZP, { icon: J.nbt }),
                (0, p.jsx)(X.Z, (0, f._)({}, n8.settings)),
              ],
            }),
            (0, p.jsx)(tt, {}),
            (0, p.jsxs)(tn, {
              onClick: function () {
                i(k.s6.clickLogOut, { eventSource: "mouse" }), (0, eu.w7)();
              },
              children: [
                (0, p.jsx)(eo.ZP, { icon: J.xqh }),
                (0, p.jsx)(X.Z, (0, f._)({}, n8.logOut)),
              ],
            }),
          ],
        });
      }
      function to(e) {
        var n,
          t = e.showCustomerPortalMenuItem,
          r = e.onClickCustomerPortal,
          a = e.onClickSettings,
          i = e.onDeleteHistory,
          o = (0, eu.kP)().session;
        return (0, p.jsxs)(eq.v, {
          as: "div",
          className: "group relative",
          children: [
            (0, p.jsxs)(eq.v.Button, {
              className:
                "flex w-full items-center gap-2.5 rounded-md px-3 py-3 text-sm transition-colors duration-200 hover:bg-gray-800 group-ui-open:bg-gray-800",
              children: [
                (0, p.jsx)("div", {
                  className: "-ml-0.5 w-5 flex-shrink-0",
                  children:
                    null != o
                      ? (0, p.jsx)(e5, { user: o.user, size: "small" })
                      : null,
                }),
                (0, p.jsx)("div", {
                  className:
                    "grow overflow-hidden text-ellipsis whitespace-nowrap text-left text-white",
                  children:
                    null == o
                      ? void 0
                      : null === (n = o.user) || void 0 === n
                      ? void 0
                      : n.name,
                }),
                (0, p.jsx)(eo.ZP, {
                  icon: J.K9M,
                  size: "small",
                  className: "flex-shrink-0 text-gray-500",
                }),
              ],
            }),
            (0, p.jsx)(e6, {
              children: (0, p.jsx)(eq.v.Items, {
                className:
                  "absolute bottom-full left-0 z-20 mb-2 w-full overflow-hidden rounded-md bg-[#050509] py-1.5 outline-none",
                children: (0, p.jsx)(ti, {
                  showCustomerPortalMenuItem: t,
                  onClickCustomerPortal: r,
                  onClickSettings: a,
                  onDeleteHistory: i,
                }),
              }),
            }),
          ],
        });
      }
      var ts = E.G.href;
      function tl(e) {
        var n = e.onClickAccountPayment,
          t = e.showAccountPaymentMenuItem,
          r = e.onClickCustomerPortal,
          a = e.showCustomerPortalMenuItem,
          i = e.onDeleteHistory,
          o = e.onNewThread,
          s = e.children,
          l = e.showNewThreadButton,
          u = (0, T.hz)(),
          c = (0, y.useRouter)(),
          d = (0, j.useRef)(null),
          h = (0, m._)((0, j.useState)(!1), 2),
          g = h[0],
          x = h[1],
          v = (0, j.useContext)(q.QL),
          b = v.historyDisabled,
          w = v.toggleHistoryDisabled,
          C = v.getModifiedSettings,
          k = v.unsetModifiedSettings,
          _ = C(),
          M = (0, m._)((0, j.useState)(_), 2),
          P = M[0],
          S = M[1],
          I = (0, j.useCallback)(function () {
            S(!0);
          }, []),
          Z = (0, j.useCallback)(
            function () {
              S(!1), k();
            },
            [k]
          ),
          R = (0, j.useCallback)(
            function () {
              o(), w();
            },
            [o, w]
          ),
          D = (0, j.useMemo)(
            function () {
              return b
                ? (0, p.jsxs)(tr, {
                    onClick: o,
                    className: "mb-1 flex-shrink-0",
                    children: [
                      (0, p.jsx)(eo.ZP, { icon: J.Bw1 }),
                      (0, p.jsx)(X.Z, (0, f._)({}, n8.clearChat)),
                    ],
                  })
                : c.query.chatId
                ? (0, p.jsx)(
                    ez(),
                    {
                      href: ts,
                      children: (0, p.jsxs)(tr, {
                        $as: "span",
                        className: "mb-1 flex-shrink-0",
                        children: [
                          (0, p.jsx)(eo.ZP, { icon: J.OvN }),
                          (0, p.jsx)(X.Z, (0, f._)({}, n8.newChat)),
                        ],
                      }),
                    },
                    "Page-reset"
                  )
                : (0, p.jsxs)(tr, {
                    onClick: o,
                    className: "mb-1 flex-shrink-0",
                    children: [
                      (0, p.jsx)(eo.ZP, { icon: J.OvN }),
                      (0, p.jsx)(X.Z, (0, f._)({}, n8.newChat)),
                    ],
                  });
            },
            [b, o, c.query.chatId]
          ),
          F = (0, j.useMemo)(
            function () {
              return (0, p.jsxs)("div", {
                className: (0, O.Z)(
                  "absolute left-0 top-14 z-20 overflow-hidden transition-all duration-500",
                  b ? "max-h-72" : "max-h-0"
                ),
                children: [
                  (0, p.jsxs)("div", {
                    className: "bg-gray-900 px-4 py-3",
                    children: [
                      (0, p.jsx)("div", {
                        className: "p-1 text-sm text-gray-100",
                        children: (0, p.jsx)(
                          X.Z,
                          (0, f._)({}, n8.chatHistoryOff)
                        ),
                      }),
                      (0, p.jsx)("div", {
                        className: "p-1 text-xs text-gray-500",
                        children: (0, p.jsx)(
                          X.Z,
                          (0, L._)((0, f._)({}, n8.chatHistoryOffDescription), {
                            values: {
                              learnMore: (0, p.jsx)("a", {
                                href: "https://help.openai.com/en/articles/7730893",
                                target: "_blank",
                                className: "underline",
                                rel: "noreferrer",
                                children: (0, p.jsx)(
                                  X.Z,
                                  (0, f._)({}, n8.learnMore)
                                ),
                              }),
                            },
                          })
                        ),
                      }),
                      (0, p.jsxs)(ei.z, {
                        className: "mt-4 w-full",
                        onClick: R,
                        color: "primary",
                        size: "medium",
                        children: [
                          (0, p.jsx)(eo.ZP, { icon: J.$IY }),
                          (0, p.jsx)(X.Z, (0, f._)({}, n8.enableChatHistory)),
                        ],
                      }),
                    ],
                  }),
                  (0, p.jsx)("div", {
                    className:
                      "h-24 bg-gradient-to-t from-gray-900/0 to-gray-900",
                  }),
                ],
              });
            },
            [b, R]
          );
        (0, j.useEffect)(
          function () {
            if (d.current) {
              var e;
              x(
                (e = d.current).scrollHeight > e.clientHeight ||
                  e.scrollWidth > e.clientWidth
              );
            }
          },
          [s]
        );
        var A =
          (0, N.g)(function (e) {
            return e.flags.highlightPlusUpgrade;
          }) && !u.has("disable_upgrade_ui");
        return (0, p.jsxs)(p.Fragment, {
          children: [
            (0, p.jsx)("div", {
              className:
                "scrollbar-trigger relative h-full w-full flex-1 items-start border-white/20",
              children: (0, p.jsxs)("nav", {
                className: "flex h-full w-full flex-col p-2",
                children: [
                  l && D,
                  F,
                  (0, p.jsx)(ta, {
                    ref: d,
                    $offsetScrollbar: g,
                    $disableScroll: b,
                    children: s,
                  }),
                  (0, p.jsxs)("div", {
                    className: "border-t border-white/20 pt-2",
                    children: [
                      t &&
                        (0, p.jsx)(te, {
                          onClick: n,
                          className: "rounded-md",
                          children: (0, p.jsxs)("span", {
                            className: "flex w-full flex-row justify-between",
                            children: [
                              (0, p.jsxs)("span", {
                                className:
                                  "gold-new-button flex items-center gap-3",
                                children: [
                                  (0, p.jsx)(eo.ZP, { icon: J.fzv }),
                                  (0, p.jsx)(
                                    X.Z,
                                    (0, f._)({}, n8.upgradeToPlus)
                                  ),
                                ],
                              }),
                              A &&
                                (0, p.jsx)("span", {
                                  className:
                                    "rounded-md bg-yellow-200 px-1.5 py-0.5 text-xs font-medium uppercase text-gray-800",
                                  children: (0, p.jsx)(
                                    X.Z,
                                    (0, f._)({}, n8.newLabel)
                                  ),
                                }),
                            ],
                          }),
                        }),
                      (0, p.jsx)(to, {
                        showCustomerPortalMenuItem: a,
                        onClickCustomerPortal: r,
                        onClickSettings: I,
                        onDeleteHistory: i,
                      }),
                    ],
                  }),
                ],
              }),
            }),
            P &&
              (0, p.jsx)(nJ, {
                onClose: Z,
                onToggleHistoryDisabled: o,
                dataControlsOpen: _,
              }),
          ],
        });
      }
      var tu = function (e) {
          var n = e.onClickAccountPayment,
            t = e.showAccountPaymentMenuItem,
            r = e.onClickCustomerPortal,
            a = e.showCustomerPortalMenuItem,
            i = e.onDeleteHistory,
            o = e.onNewThread,
            s = e.children,
            l = e.showNewThreadButton;
          return (0, p.jsx)(p.Fragment, {
            children: (0, p.jsx)("div", {
              className: "flex h-full min-h-0 flex-col ",
              children: (0, p.jsx)(tl, {
                onClickAccountPayment: n,
                showAccountPaymentMenuItem: t,
                onClickCustomerPortal: r,
                showCustomerPortalMenuItem: a,
                onDeleteHistory: i,
                onNewThread: o,
                showNewThreadButton: l,
                children: s,
              }),
            }),
          });
        },
        tc = function (e) {
          var n = e.onClickAccountPayment,
            t = e.showAccountPaymentMenuItem,
            r = e.onClickCustomerPortal,
            a = e.showCustomerPortalMenuItem,
            i = e.onDeleteHistory,
            o = e.onClose,
            s = e.sidebarOpen,
            l = e.onNewThread,
            u = e.children,
            c = e.showNewThreadButton;
          return (0, p.jsx)(eB.u.Root, {
            show: s,
            as: j.Fragment,
            children: (0, p.jsxs)(eO.V, {
              as: "div",
              className: "relative z-40",
              onClose: o,
              children: [
                (0, p.jsx)(eB.u.Child, {
                  as: j.Fragment,
                  enter: "transition-opacity ease-linear duration-300",
                  enterFrom: "opacity-0",
                  enterTo: "opacity-100",
                  leave: "transition-opacity ease-linear duration-300",
                  leaveFrom: "opacity-100",
                  leaveTo: "opacity-0",
                  children: (0, p.jsx)("div", {
                    className: "fixed inset-0 bg-gray-600 bg-opacity-75",
                  }),
                }),
                (0, p.jsxs)("div", {
                  className: "fixed inset-0 z-40 flex",
                  children: [
                    (0, p.jsx)(eB.u.Child, {
                      as: j.Fragment,
                      enter: "transition ease-in-out duration-300 transform",
                      enterFrom: "-translate-x-full",
                      enterTo: "translate-x-0",
                      leave: "transition ease-in-out duration-300 transform",
                      leaveFrom: "translate-x-0",
                      leaveTo: "-translate-x-full",
                      children: (0, p.jsxs)(eO.V.Panel, {
                        className:
                          "relative flex w-full max-w-xs flex-1 flex-col bg-gray-900",
                        children: [
                          (0, p.jsx)(eB.u.Child, {
                            as: j.Fragment,
                            enter: "ease-in-out duration-300",
                            enterFrom: "opacity-0",
                            enterTo: "opacity-100",
                            leave: "ease-in-out duration-300",
                            leaveFrom: "opacity-100",
                            leaveTo: "opacity-0",
                            children: (0, p.jsx)("div", {
                              className: "absolute right-0 top-0 -mr-12 pt-2",
                              children: (0, p.jsxs)("button", {
                                type: "button",
                                className:
                                  "ml-1 flex h-10 w-10 items-center justify-center focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",
                                onClick: o,
                                children: [
                                  (0, p.jsx)("span", {
                                    className: "sr-only",
                                    children: (0, p.jsx)(
                                      X.Z,
                                      (0, f._)({}, n8.closeSidebar)
                                    ),
                                  }),
                                  (0, p.jsx)(eo.ZP, {
                                    icon: J.q5L,
                                    size: "medium",
                                    className: "text-white",
                                    "aria-hidden": "true",
                                  }),
                                ],
                              }),
                            }),
                          }),
                          (0, p.jsx)(tl, {
                            onClickAccountPayment: n,
                            showAccountPaymentMenuItem: t,
                            onClickCustomerPortal: r,
                            showCustomerPortalMenuItem: a,
                            onDeleteHistory: i,
                            onNewThread: l,
                            showNewThreadButton: c,
                            children: u,
                          }),
                        ],
                      }),
                    }),
                    (0, p.jsx)("div", { className: "w-14 flex-shrink-0" }),
                  ],
                }),
              ],
            }),
          });
        },
        td = function (e) {
          var n = e.onClickOpenSidebar,
            t = e.onNewThread,
            r = e.title,
            a = e.newChatName,
            i = (0, m._)((0, j.useState)(), 2),
            o = i[0],
            s = i[1],
            l = (0, j.useContext)(q.QL),
            u = l.historyDisabled,
            c = l.toggleHistoryDisabled,
            d = (0, y.useRouter)(),
            h = (0, j.useMemo)(
              function () {
                return d.query.chatId
                  ? (0, p.jsx)(
                      ez(),
                      {
                        href: ts,
                        children: (0, p.jsx)("button", {
                          type: "button",
                          className: "px-3",
                          children: (0, p.jsx)(eo.ZP, {
                            icon: J.OvN,
                            size: "medium",
                          }),
                        }),
                      },
                      "Page-reset"
                    )
                  : (0, p.jsx)("button", {
                      type: "button",
                      className: "px-3",
                      onClick: t,
                      children: (0, p.jsx)(eo.ZP, {
                        icon: u ? J.Bw1 : J.OvN,
                        size: "medium",
                      }),
                    });
              },
              [u, t, d.query.chatId]
            );
          return (
            (0, j.useEffect)(
              function () {
                a !== o && s(a);
              },
              [a, o]
            ),
            (0, p.jsxs)("div", {
              className:
                "sticky top-0 z-10 flex items-center border-b border-white/20 bg-gray-800 pl-1 pt-1 text-gray-200 sm:pl-3 md:hidden",
              children: [
                (0, p.jsxs)("button", {
                  type: "button",
                  className:
                    "-ml-0.5 -mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white dark:hover:text-white",
                  onClick: n,
                  children: [
                    (0, p.jsx)("span", {
                      className: "sr-only",
                      children: (0, p.jsx)(X.Z, (0, f._)({}, n8.openSidebar)),
                    }),
                    (0, p.jsx)(eo.ZP, {
                      icon: J.cur,
                      "aria-hidden": "true",
                      size: "medium",
                    }),
                  ],
                }),
                (0, p.jsx)("h1", {
                  className: "flex-1 text-center text-base font-normal",
                  children: u
                    ? (0, p.jsxs)("div", {
                        className:
                          "flex cursor-pointer flex-row place-items-center items-center justify-center gap-3",
                        onClick: c,
                        children: [
                          (0, p.jsx)(J.$IY, {}),
                          (0, p.jsx)(X.Z, (0, f._)({}, n8.enableChatHistory)),
                        ],
                      })
                    : o && a
                    ? (0, p.jsx)(er, { text: a })
                    : r || (0, p.jsx)(X.Z, (0, f._)({}, n8.newChat)),
                }),
                h,
              ],
            })
          );
        },
        tf = t(6128),
        th = t(5437),
        tm = t.n(th),
        tg = t(11253),
        tp = t.n(tg),
        tx = t(75179),
        tv = t(2827);
      function tb(e) {
        var n = e.id,
          t = e.label;
        return (0, p.jsxs)("div", {
          className: "form-check",
          children: [
            (0, p.jsx)("input", {
              className:
                "form-check-input float-left mr-2 mt-1 h-4 w-4 cursor-pointer appearance-none rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none",
              type: "checkbox",
              value: "",
              id: n,
            }),
            (0, p.jsx)("label", {
              className:
                "form-check-label inline-block text-gray-800 dark:text-gray-100",
              htmlFor: n,
              children: t,
            }),
          ],
        });
      }
      var ty = t(54655),
        tj = t(64664);
      function tw(e) {
        var n, t;
        if (e.author.role === nA.uU.Assistant) {
          if ("bing_search" === e.recipient) return s.SimpleBrowsing;
          if ("browser" === e.recipient || "restricted_browser" === e.recipient)
            return s.Browsing;
          if (
            "code" === e.content.content_type ||
            ("python" === e.recipient && "text" === e.content.content_type)
          )
            return s.Code;
          if (
            null === (n = e.recipient) || void 0 === n
              ? void 0
              : n.includes(".")
          )
            return s.Plugin;
        } else if (e.author.role === nA.uU.Tool) {
          if (
            "bing_search" === e.author.name ||
            "browser" === e.author.name ||
            "restricted_browser" === e.author.name
          )
            return s.BrowseTool;
          if ("execution_output" === e.content.content_type)
            return s.CodeExecutionOutput;
          if (
            null === (t = e.author.name) || void 0 === t
              ? void 0
              : t.includes(".")
          )
            return s.PluginTool;
        } else if ("text" === e.content.content_type) return s.Text;
        return s.Unknown;
      }
      ((r = s || (s = {}))[(r.Text = 0)] = "Text"),
        (r[(r.SimpleBrowsing = 1)] = "SimpleBrowsing"),
        (r[(r.Browsing = 2)] = "Browsing"),
        (r[(r.BrowseTool = 3)] = "BrowseTool"),
        (r[(r.Code = 4)] = "Code"),
        (r[(r.CodeExecutionOutput = 5)] = "CodeExecutionOutput"),
        (r[(r.Plugin = 6)] = "Plugin"),
        (r[(r.PluginTool = 7)] = "PluginTool"),
        (r[(r.Unknown = 8)] = "Unknown");
      var tC = t(95182),
        tk = t.n(tC);
      function t_() {
        var e = (0, g._)(["text-xs flex items-center justify-center gap-1"]);
        return (
          (t_ = function () {
            return e;
          }),
          e
        );
      }
      function tT() {
        var e = (0, g._)([
          "dark:text-white disabled:text-gray-300 dark:disabled:text-gray-400",
        ]);
        return (
          (tT = function () {
            return e;
          }),
          e
        );
      }
      function tM() {
        var e = (0, g._)(["flex-grow flex-shrink-0"]);
        return (
          (tM = function () {
            return e;
          }),
          e
        );
      }
      function tN(e) {
        var n = e.currentPage,
          t = e.onChangeIndex,
          r = e.length,
          a = e.className,
          i = function (e) {
            t(tk()(n + e, 0, r - 1));
          };
        return (0, p.jsxs)(tP, {
          className: a,
          children: [
            (0, p.jsx)(tS, {
              onClick: function () {
                return i(-1);
              },
              disabled: 0 === n,
              children: (0, p.jsx)(eo.ZP, { size: "xsmall", icon: J.YFh }),
            }),
            (0, p.jsx)(tI, { children: "".concat(n + 1, " / ").concat(r) }),
            (0, p.jsx)(tS, {
              onClick: function () {
                return i(1);
              },
              disabled: n === r - 1,
              children: (0, p.jsx)(eo.ZP, { size: "xsmall", icon: J.Tfp }),
            }),
          ],
        });
      }
      var tP = w.Z.div(t_()),
        tS = w.Z.button(tT()),
        tI = w.Z.span(tM());
      function tZ(e) {
        var n,
          t = e.url,
          r = e.size,
          a = void 0 === r ? 16 : r,
          i = e.className;
        try {
          n = new URL(t);
        } catch (e) {
          return console.error(e), null;
        }
        return (0, p.jsx)("img", {
          src: "https://icons.duckduckgo.com/ip3/".concat(n.hostname, ".ico"),
          alt: "Favicon",
          width: a,
          height: a,
          className: i,
        });
      }
      var tR = "&#8203;",
        tD = "oaicite:";
      function tL(e) {
        var n,
          t = e.displayInfo;
        return (0, p.jsx)(nh.u, {
          label: (0, p.jsx)(tF, {
            pageInfo: t.metadata,
            invalidReason: t.invalid_reason,
          }),
          side: "top",
          sideOffset: 4,
          withArrow: !1,
          interactive: !0,
          wide: !0,
          children: (0, p.jsx)("a", {
            href: null === (n = t.metadata) || void 0 === n ? void 0 : n.url,
            target: "_blank",
            rel: "noreferrer",
            className: "px-0.5 text-green-600 !no-underline",
            children: (0, p.jsx)("sup", { children: t.index + 1 }),
          }),
        });
      }
      function tF(e) {
        var n = e.pageInfo,
          t = e.invalidReason;
        return (0, p.jsx)("a", {
          href: null == n ? void 0 : n.url,
          target: "_blank",
          rel: "noreferrer",
          className: "text-xs !no-underline",
          children: n
            ? (0, p.jsxs)("div", {
                className: "flex items-center gap-2",
                children: [
                  (0, p.jsx)("div", {
                    className: "flex shrink-0 items-center justify-center",
                    children: (0, p.jsx)(tZ, { url: n.url, className: "my-0" }),
                  }),
                  (0, p.jsx)("div", {
                    className: "max-w-xs truncate",
                    children: n.title,
                  }),
                  (0, p.jsx)("div", {
                    className: "shrink-0",
                    children: (0, p.jsx)(eo.ZP, {
                      icon: J.AlO,
                      size: "xsmall",
                    }),
                  }),
                ],
              })
            : (0, p.jsx)("div", {
                className: "text-red-500",
                children: null != t ? t : "Invalid citation",
              }),
        });
      }
      function tA() {
        var e = (0, g._)(["flex flex-col items-start"]);
        return (
          (tA = function () {
            return e;
          }),
          e
        );
      }
      function tE() {
        var e = (0, g._)([
          "flex items-center text-xs bg-green-100 rounded p-3 text-gray-900 ",
          "",
        ]);
        return (
          (tE = function () {
            return e;
          }),
          e
        );
      }
      function tq() {
        var e = (0, g._)([
          "max-w-full overflow-x-auto mt-3 flex flex-col gap-2 rounded bg-gray-100 p-3 text-sm text-gray-800",
        ]);
        return (
          (tq = function () {
            return e;
          }),
          e
        );
      }
      var tB = j.memo(function (e) {
          var n = e.children,
            t = e.isComplete,
            r = e.expanderClosedLabel,
            a = e.expanderOpenLabel,
            i = e.resultsPreview,
            o = e.results,
            s = e.initialExpanded,
            l = e.onExpand,
            u = (0, m._)((0, j.useState)(void 0 !== s && s), 2),
            c = u[0],
            d = u[1],
            f = (0, j.useCallback)(
              function () {
                d(function (e) {
                  return !e;
                }),
                  null == l || l();
              },
              [l]
            );
          return (0,
          p.jsxs)(tO, { children: [(0, p.jsxs)(tU, { $complete: t, children: [(0, p.jsx)("div", { children: n }), !t && (0, p.jsx)(es.Z, { className: o ? "ml-1" : "ml-12" }), o && (0, p.jsxs)("div", { className: "ml-12 flex items-center gap-2", role: "button", onClick: f, children: [a && r && (0, p.jsx)("div", { className: "text-xs text-gray-600", children: c ? a : r }), !c && i, (0, p.jsx)(eo.ZP, { icon: c ? J.rH8 : J.bTu })] })] }), c && o] });
        }),
        tO = w.Z.div(tA()),
        tU = w.Z.div(tE(), function (e) {
          return e.$complete && "bg-gray-100";
        }),
        tz = w.Z.div(tq()),
        tH = j.memo(function (e) {
          var n,
            t = e.messages,
            r = e.isComplete,
            a = t
              .map(function (e) {
                return e.message;
              })
              .map(function (e) {
                if (e.author.role !== nA.uU.Tool) return null;
                var n = e.metadata;
                if (!n) return null;
                var t = n.command,
                  r = n.status;
                return t
                  ? {
                      type: t,
                      status: r,
                      didError: "system_error" === e.content.content_type,
                      message: e,
                    }
                  : null;
              })
              .filter(Boolean),
            i = a.map(function (e, n) {
              return (0, p.jsx)(tV, { command: e }, n);
            });
          return (
            r
              ? (i.push(
                  (0, p.jsx)(
                    tK,
                    { icon: J._rq, children: "Finished browsing" },
                    "finished"
                  )
                ),
                (n = (0, p.jsx)(tK, {
                  icon: J._rq,
                  compact: !0,
                  children: "Finished browsing",
                })))
              : 0 === i.length
              ? (i.push(
                  (0, p.jsx)(
                    tK,
                    { icon: J.jRj, children: "Browsing the web..." },
                    "waiting"
                  )
                ),
                (n = (0, p.jsx)(tK, {
                  icon: J.jRj,
                  compact: !0,
                  children: "Browsing the web...",
                })))
              : "finished" === a[a.length - 1].status &&
                i.push(
                  (0, p.jsx)(
                    tK,
                    { icon: J.Wqx, children: "Thinking..." },
                    "thinking"
                  )
                ),
            n ||
              (n = (0, p.jsx)(tV, { command: a[a.length - 1], compact: !0 })),
            (0, p.jsx)(tB, {
              isComplete: r,
              results: (0, p.jsx)(tz, { className: "text-xs", children: i }),
              children: n,
            })
          );
        });
      function tV(e) {
        var n = e.command,
          t = e.compact;
        if (n.didError) return (0, p.jsx)(tY, { commandType: n.type });
        switch (n.type) {
          case "search":
            var r,
              a,
              i =
                null === (r = n.message.metadata) || void 0 === r
                  ? void 0
                  : null === (a = r.args) || void 0 === a
                  ? void 0
                  : a[0];
            if (!i) return null;
            return (0, p.jsx)(tQ, {
              searchQuery: i,
              isComplete: "finished" === n.status,
              compact: t,
            });
          case "click":
          case "open_url":
            var o,
              s,
              l =
                null === (o = n.message.metadata) || void 0 === o
                  ? void 0
                  : null === (s = o._cite_metadata) || void 0 === s
                  ? void 0
                  : s.metadata_list[0];
            return (0, p.jsx)(tW, { pageInfo: l, compact: t });
          case "quote":
          case "quote_full":
            return (0, p.jsx)(tG, { compact: t });
          case "back":
            return (0, p.jsx)(t$, { compact: t });
          case "scroll":
            return (0, p.jsx)(tJ, { compact: t });
          default:
            return null;
        }
      }
      function tQ(e) {
        var n = e.searchQuery,
          t = e.isComplete,
          r = e.compact;
        return (0, p.jsx)(tK, {
          icon: J.jRj,
          compact: r,
          children: t
            ? (0, p.jsxs)(p.Fragment, {
                children: [
                  "Searched: ",
                  (0, p.jsxs)("b", { children: ["“", n, "”"] }),
                ],
              })
            : (0, p.jsxs)(p.Fragment, {
                children: [
                  "Searching: ",
                  (0, p.jsxs)("b", { children: ["“", n, "”"] }),
                ],
              }),
        });
      }
      function tW(e) {
        var n = e.pageInfo,
          t = e.compact;
        return (0, p.jsx)(tK, {
          icon: J.PS6,
          compact: t,
          children: n
            ? !0 === t
              ? "Clicked on a link"
              : (0, p.jsxs)("div", {
                  className: "flex items-center gap-2",
                  children: [
                    "Clicked on:",
                    " ",
                    (0, p.jsx)("div", {
                      className:
                        "rounded border border-black/10 bg-white px-2 py-1",
                      children: (0, p.jsx)(tF, { pageInfo: n }),
                    }),
                  ],
                })
            : "Clicking on a link...",
        });
      }
      function tG(e) {
        var n = e.compact;
        return (0, p.jsx)(tK, {
          icon: J.SnF,
          compact: n,
          children: "Reading content",
        });
      }
      function t$(e) {
        var n = e.compact;
        return (0, p.jsx)(tK, {
          icon: J.cww,
          compact: n,
          children: "Going back to last page",
        });
      }
      function tJ(e) {
        var n = e.compact;
        return (0, p.jsx)(tK, {
          icon: J.nlg,
          compact: n,
          children: "Scrolling down",
        });
      }
      function tY(e) {
        var n,
          t = e.commandType,
          r = e.compact;
        switch (t) {
          case "search":
            n = "Search";
            break;
          case "click":
          case "open_url":
            n = "Click";
            break;
          case "quote":
          case "quote_full":
            n = "Reading content";
            break;
          case "back":
            n = "Going back";
            break;
          case "scroll":
            n = "Scroll";
            break;
          default:
            return null;
        }
        return (0, p.jsxs)(tK, {
          icon: J.bcx,
          compact: r,
          children: [n, " failed"],
        });
      }
      function tK(e) {
        var n = e.children,
          t = e.icon,
          r = e.compact;
        return (0, p.jsxs)("div", {
          className: (0, O.Z)(
            "flex items-center gap-2",
            !0 !== r && "min-h-[24px]"
          ),
          children: [
            (0, p.jsx)(eo.ZP, { icon: t, className: "shrink-0" }),
            (0, p.jsx)("div", { children: n }),
          ],
        });
      }
      var tX = j.memo(function (e) {
        var n,
          t = e.message,
          r = e.isCollapsed,
          a =
            null === (n = t.message.metadata) || void 0 === n
              ? void 0
              : n.aggregate_result;
        if (!a)
          return console.error("Corrupt code execution result message"), null;
        var i = a.messages.filter(t3),
          o = r && i.length > 0,
          s = r && null != a.final_expression_output,
          l = r && null != a.in_kernel_exception,
          u = !r && a.messages.filter(t1).length > 0;
        return (0, p.jsxs)(p.Fragment, {
          children: [
            o &&
              (0, p.jsx)(t0, {
                label: "STDOUT/STDERR",
                output: i.map(function (e, n) {
                  return (0,
                  p.jsx)("span", { className: "stderr" === e.stream_name ? "text-red-500" : "", children: e.text }, "".concat(n));
                }),
              }),
            s &&
              (0, p.jsx)(t0, {
                label: "RESULT",
                output: a.final_expression_output,
              }),
            l &&
              (0, p.jsx)("div", {
                className:
                  "overflow-auto rounded border-t border-gray-500 bg-black text-white",
                children: (0, p.jsx)("div", {
                  className: "border-l-4 border-red-500 p-2 text-xs",
                  children: (0, p.jsx)("div", {
                    className:
                      "scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-700 flex max-h-64 flex-col-reverse",
                    children: (0, p.jsx)("pre", {
                      className: "shrink-0",
                      children: a.in_kernel_exception.traceback.join(""),
                    }),
                  }),
                }),
              }),
            u &&
              a.messages
                .filter(t1)
                .map(t2)
                .filter(function (e) {
                  return null != e;
                })
                .map(function (e, n) {
                  return (0,
                  p.jsx)("div", { children: (0, p.jsx)("img", { src: e }) }, n);
                }),
          ],
        });
      });
      function t0(e) {
        var n = e.label,
          t = e.output;
        return (0, p.jsxs)("div", {
          className: "rounded-md bg-black p-4 text-xs",
          children: [
            (0, p.jsx)("div", { className: "mb-1 text-gray-400", children: n }),
            (0, p.jsx)("div", {
              className:
                "scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-700 prose flex max-h-64 flex-col-reverse overflow-auto text-white",
              children: (0, p.jsx)("pre", {
                className: "shrink-0",
                children: t,
              }),
            }),
          ],
        });
      }
      function t1(e) {
        return "image" === e.message_type;
      }
      function t2(e) {
        return null != e.image_payload
          ? "data:image/png;base64,".concat(e.image_payload)
          : null != e.image_url
          ? ""
              .concat(_.B, "/conversation/download_file_service?url=")
              .concat(encodeURIComponent(e.image_url))
          : null;
      }
      function t3(e) {
        return "stream" === e.message_type;
      }
      var t4 = t(45306),
        t5 = t(22208),
        t6 = t(61110),
        t7 = t(55975),
        t8 = t(46050),
        t9 = t(29874),
        re = t(8449),
        rn = t(15472);
      let rt = {
          tokenize: function (e, n, t) {
            let r = this,
              a = this.events[this.events.length - 1],
              i =
                a && a[1].type === rn.V.linePrefix
                  ? a[2].sliceSerialize(a[1], !0).length
                  : 0,
              o = [];
            return function (n) {
              return (
                t7.q.backslash,
                e.enter("mathFlow"),
                e.enter("mathFlowFence"),
                e.enter("mathFlowFenceSequence"),
                (function n(r) {
                  return r === t7.q.backslash ||
                    (r === t7.q.leftSquareBracket && o[0] === t7.q.backslash)
                    ? (e.consume(r), o.push(r), n)
                    : (e.exit("mathFlowFenceSequence"),
                      o.length < 2
                        ? t(r)
                        : (0, t8.f)(e, s, rn.V.whitespace)(r));
                })(n)
              );
            };
            function s(n) {
              return n === t7.q.eof || (0, t9.Ch)(n)
                ? l(n)
                : (e.enter("mathFlowFenceMeta"),
                  e.enter(rn.V.chunkString, {
                    contentType: re._.contentTypeString,
                  }),
                  (function n(r) {
                    return r === t7.q.eof || (0, t9.Ch)(r)
                      ? (e.exit(rn.V.chunkString),
                        e.exit("mathFlowFenceMeta"),
                        l(r))
                      : r === t7.q.rightSquareBracket
                      ? t(r)
                      : (e.consume(r), n);
                  })(n));
            }
            function l(t) {
              return (
                e.exit("mathFlowFence"),
                r.interrupt
                  ? n(t)
                  : (function n(t) {
                      return t === t7.q.eof
                        ? u(t)
                        : (0, t9.Ch)(t)
                        ? e.attempt(
                            rr,
                            e.attempt(
                              { tokenize: c, partial: !0 },
                              u,
                              i ? (0, t8.f)(e, n, rn.V.linePrefix, i + 1) : n
                            ),
                            u
                          )(t)
                        : (e.enter("mathFlowValue"),
                          (function t(r) {
                            return r === t7.q.eof || (0, t9.Ch)(r)
                              ? (e.exit("mathFlowValue"), n(r))
                              : (e.consume(r), t);
                          })(t));
                    })(t)
              );
            }
            function u(t) {
              return e.exit("mathFlow"), n(t);
            }
            function c(e, n, t) {
              let r = [];
              return (0, t8.f)(
                e,
                function (n) {
                  return (
                    e.enter("mathFlowFence"),
                    e.enter("mathFlowFenceSequence"),
                    (function n(i) {
                      return (i === t7.q.backslash && 0 === r.length) ||
                        (i === t7.q.rightSquareBracket &&
                          r[0] === t7.q.backslash)
                        ? (e.consume(i), r.push(i), n)
                        : r < o
                        ? t(i)
                        : (e.exit("mathFlowFenceSequence"),
                          (0, t8.f)(e, a, rn.V.whitespace)(i));
                    })(n)
                  );
                },
                rn.V.linePrefix,
                re._.tabSize
              );
              function a(r) {
                return r === t7.q.eof || (0, t9.Ch)(r)
                  ? (e.exit("mathFlowFence"), n(r))
                  : t(r);
              }
            }
          },
          concrete: !0,
        },
        rr = {
          tokenize: function (e, n, t) {
            let r = this;
            return function (n) {
              return (
                e.enter(rn.V.lineEnding),
                e.consume(n),
                e.exit(rn.V.lineEnding),
                a
              );
            };
            function a(e) {
              return r.parser.lazy[r.now().line] ? t(e) : n(e);
            }
          },
          partial: !0,
        },
        ra = {
          tokenize: function (e, n, t) {
            let r = this,
              a = r.events[r.events.length - 1],
              i =
                a && a[1].type === rn.V.linePrefix
                  ? a[2].sliceSerialize(a[1], !0).length
                  : 0,
              o = 0;
            return function (n) {
              return (
                t7.q.dollarSign,
                e.enter("mathFlow"),
                e.enter("mathFlowFence"),
                e.enter("mathFlowFenceSequence"),
                (function n(r) {
                  return r === t7.q.dollarSign
                    ? (e.consume(r), o++, n)
                    : (e.exit("mathFlowFenceSequence"),
                      o < 2 ? t(r) : (0, t8.f)(e, s, rn.V.whitespace)(r));
                })(n)
              );
            };
            function s(n) {
              return n === t7.q.eof || (0, t9.Ch)(n)
                ? l(n)
                : (e.enter("mathFlowFenceMeta"),
                  e.enter(rn.V.chunkString, {
                    contentType: re._.contentTypeString,
                  }),
                  (function n(r) {
                    return r === t7.q.eof || (0, t9.Ch)(r)
                      ? (e.exit(rn.V.chunkString),
                        e.exit("mathFlowFenceMeta"),
                        l(r))
                      : r === t7.q.dollarSign
                      ? t(r)
                      : (e.consume(r), n);
                  })(n));
            }
            function l(t) {
              return (
                e.exit("mathFlowFence"),
                r.interrupt
                  ? n(t)
                  : (function n(t) {
                      return t === t7.q.eof
                        ? u(t)
                        : (0, t9.Ch)(t)
                        ? e.attempt(
                            ri,
                            e.attempt(
                              { tokenize: c, partial: !0 },
                              u,
                              i ? (0, t8.f)(e, n, rn.V.linePrefix, i + 1) : n
                            ),
                            u
                          )(t)
                        : (e.enter("mathFlowValue"),
                          (function t(r) {
                            return r === t7.q.eof || (0, t9.Ch)(r)
                              ? (e.exit("mathFlowValue"), n(r))
                              : (e.consume(r), t);
                          })(t));
                    })(t)
              );
            }
            function u(t) {
              return e.exit("mathFlow"), n(t);
            }
            function c(e, n, t) {
              let r = 0;
              return (0, t8.f)(
                e,
                function (n) {
                  return (
                    e.enter("mathFlowFence"),
                    e.enter("mathFlowFenceSequence"),
                    (function n(i) {
                      return i === t7.q.dollarSign
                        ? (e.consume(i), r++, n)
                        : r < o
                        ? t(i)
                        : (e.exit("mathFlowFenceSequence"),
                          (0, t8.f)(e, a, rn.V.whitespace)(i));
                    })(n)
                  );
                },
                rn.V.linePrefix,
                re._.tabSize
              );
              function a(r) {
                return r === t7.q.eof || (0, t9.Ch)(r)
                  ? (e.exit("mathFlowFence"), n(r))
                  : t(r);
              }
            }
          },
          concrete: !0,
        },
        ri = {
          tokenize: function (e, n, t) {
            let r = this;
            return function (n) {
              return (
                (0, t9.Ch)(n),
                e.enter(rn.V.lineEnding),
                e.consume(n),
                e.exit(rn.V.lineEnding),
                a
              );
            };
            function a(e) {
              return r.parser.lazy[r.now().line] ? t(e) : n(e);
            }
          },
          partial: !0,
        };
      function ro(e) {
        let n,
          t,
          r = e.length - 4,
          a = 3;
        if (
          (e[3][1].type === rn.V.lineEnding || "space" === e[a][1].type) &&
          (e[r][1].type === rn.V.lineEnding || "space" === e[r][1].type)
        ) {
          for (n = a; ++n < r; )
            if ("mathTextData" === e[n][1].type) {
              (e[r][1].type = "mathTextPadding"),
                (e[a][1].type = "mathTextPadding"),
                (a += 2),
                (r -= 2);
              break;
            }
        }
        for (n = a - 1, r++; ++n <= r; )
          void 0 === t
            ? n !== r && e[n][1].type !== rn.V.lineEnding && (t = n)
            : (n === r || e[n][1].type === rn.V.lineEnding) &&
              ((e[t][1].type = "mathTextData"),
              n !== t + 2 &&
                ((e[t][1].end = e[n - 1][1].end),
                e.splice(t + 2, n - t - 2),
                (r -= n - t - 2),
                (n = t + 2)),
              (t = void 0));
        return e;
      }
      function rs(e) {
        return (
          e !== t7.q.backslash ||
          this.events[this.events.length - 1][1].type === rn.V.characterEscape
        );
      }
      function rl(e) {
        let n,
          t,
          r = e.length - 4,
          a = 3;
        if (
          (e[3][1].type === rn.V.lineEnding || "space" === e[a][1].type) &&
          (e[r][1].type === rn.V.lineEnding || "space" === e[r][1].type)
        ) {
          for (n = a; ++n < r; )
            if ("mathTextData" === e[n][1].type) {
              (e[r][1].type = "mathTextPadding"),
                (e[a][1].type = "mathTextPadding"),
                (a += 2),
                (r -= 2);
              break;
            }
        }
        for (n = a - 1, r++; ++n <= r; )
          void 0 === t
            ? n !== r && e[n][1].type !== rn.V.lineEnding && (t = n)
            : (n === r || e[n][1].type === rn.V.lineEnding) &&
              ((e[t][1].type = "mathTextData"),
              n !== t + 2 &&
                ((e[t][1].end = e[n - 1][1].end),
                e.splice(t + 2, n - t - 2),
                (r -= n - t - 2),
                (n = t + 2)),
              (t = void 0));
        return e;
      }
      function ru(e) {
        return (
          e !== t7.q.dollarSign ||
          this.events[this.events.length - 1][1].type === rn.V.characterEscape
        );
      }
      function rc(e) {
        let n,
          t,
          r = e.length - 4,
          a = 3;
        if (
          (e[3][1].type === rn.V.lineEnding || "space" === e[a][1].type) &&
          (e[r][1].type === rn.V.lineEnding || "space" === e[r][1].type)
        ) {
          for (n = a; ++n < r; )
            if ("mathTextData" === e[n][1].type) {
              (e[r][1].type = "mathTextPadding"),
                (e[a][1].type = "mathTextPadding"),
                (a += 2),
                (r -= 2);
              break;
            }
        }
        for (n = a - 1, r++; ++n <= r; )
          void 0 === t
            ? n !== r && e[n][1].type !== rn.V.lineEnding && (t = n)
            : (n === r || e[n][1].type === rn.V.lineEnding) &&
              ((e[t][1].type = "mathTextData"),
              n !== t + 2 &&
                ((e[t][1].end = e[n - 1][1].end),
                e.splice(t + 2, n - t - 2),
                (r -= n - t - 2),
                (n = t + 2)),
              (t = void 0));
        return e;
      }
      function rd(e) {
        return (
          e !== t7.q.backslash ||
          this.events[this.events.length - 1][1].type === rn.V.characterEscape
        );
      }
      var rf = t(67726),
        rh = t(9871),
        rm = t(93362),
        rg = t(45369),
        rp = t(42426),
        rx = t(65028),
        rv = t(88366);
      function rb() {
        var e = (0, g._)(["bg-black rounded-md"]);
        return (
          (rb = function () {
            return e;
          }),
          e
        );
      }
      function ry() {
        var e = (0, g._)([
          "flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md",
        ]);
        return (
          (ry = function () {
            return e;
          }),
          e
        );
      }
      function rj() {
        var e = (0, g._)(["p-4 overflow-y-auto"]);
        return (
          (rj = function () {
            return e;
          }),
          e
        );
      }
      function rw() {
        var e = (0, g._)(["", ""]);
        return (
          (rw = function () {
            return e;
          }),
          e
        );
      }
      var rC = w.Z.div(rb()),
        rk = w.Z.div(ry()),
        r_ = w.Z.div(rj()),
        rT = w.Z.code(rw(), function (e) {
          return e.$shouldWrap ? "!whitespace-pre-wrap" : "!whitespace-pre";
        });
      function rM(e) {
        var n = e.children,
          t = e.className,
          r = e.language,
          a = e.content,
          i = (0, j.useCallback)(
            function () {
              navigator.clipboard.writeText(a);
            },
            [a]
          );
        return (0, p.jsx)(rN, {
          title: r,
          headerDecoration: (0, p.jsx)(nc, {
            buttonText: "Copy code",
            onCopy: i,
          }),
          className: "mb-4",
          codeClassName: t,
          children: n,
        });
      }
      function rN(e) {
        var n = e.children,
          t = e.title,
          r = e.headerDecoration,
          a = e.shouldWrapCode,
          i = e.className,
          o = e.codeClassName;
        return (0, p.jsxs)(rC, {
          className: i,
          children: [
            (0, p.jsxs)(rk, {
              children: [t && (0, p.jsx)("span", { children: t }), r],
            }),
            (0, p.jsx)(r_, {
              children: (0, p.jsx)(rT, {
                $shouldWrap: void 0 !== a && a,
                className: o,
                children: n,
              }),
            }),
          ],
        });
      }
      var rP = function (e) {
          return e.startsWith(t5.SANDBOX_LINK_PREFIX) ? e : (0, rh.A)(e);
        },
        rS = [
          rx.Z,
          [
            function () {
              let e = this.data();
              function n(n, t) {
                let r = e[n] ? e[n] : (e[n] = []);
                r.push(t);
              }
              n("micromarkExtensions", {
                flow: { [t7.q.dollarSign]: ra, [t7.q.backslash]: rt },
                text: {
                  [t7.q.dollarSign]: {
                    tokenize: function (e, n, t) {
                      let r,
                        a,
                        i = 0;
                      return function (n) {
                        return (
                          e.enter("mathText"),
                          e.enter("mathTextSequence"),
                          (function n(r) {
                            return r === t7.q.dollarSign
                              ? (e.consume(r), i++, n)
                              : i < 2
                              ? t(r)
                              : (e.exit("mathTextSequence"), o(r));
                          })(n)
                        );
                      };
                      function o(l) {
                        return l === t7.q.eof
                          ? t(l)
                          : l === t7.q.dollarSign
                          ? ((a = e.enter("mathTextSequence")),
                            (r = 0),
                            (function t(o) {
                              return o === t7.q.dollarSign
                                ? (e.consume(o), r++, t)
                                : r === i
                                ? (e.exit("mathTextSequence"),
                                  e.exit("mathText"),
                                  n(o))
                                : ((a.type = "mathTextData"), s(o));
                            })(l))
                          : l === t7.q.space
                          ? (e.enter("space"), e.consume(l), e.exit("space"), o)
                          : (0, t9.Ch)(l)
                          ? (e.enter(rn.V.lineEnding),
                            e.consume(l),
                            e.exit(rn.V.lineEnding),
                            o)
                          : (e.enter("mathTextData"), s(l));
                      }
                      function s(n) {
                        return n === t7.q.eof ||
                          n === t7.q.space ||
                          n === t7.q.dollarSign ||
                          (0, t9.Ch)(n)
                          ? (e.exit("mathTextData"), o(n))
                          : (e.consume(n), s);
                      }
                    },
                    resolve: rl,
                    previous: ru,
                  },
                  [t7.q.backslash]: [
                    {
                      tokenize: function (e, n, t) {
                        let r;
                        let a = [],
                          i = [],
                          o = this;
                        return function (n) {
                          return (
                            t7.q.backslash,
                            rs.call(o, o.previous) && o.previous,
                            e.enter("mathText"),
                            e.enter("mathTextSequence"),
                            (function n(r) {
                              return (a.join(","),
                              (r === t7.q.backslash && 0 === a.length) ||
                                (r === t7.q.leftParenthesis && 1 === a.length))
                                ? (e.consume(r), a.push(r), n)
                                : a.length < 2
                                ? t(r)
                                : (e.exit("mathTextSequence"), s(r));
                            })(n)
                          );
                        };
                        function s(o) {
                          return o === t7.q.eof
                            ? t(o)
                            : o === t7.q.backslash
                            ? ((r = e.enter("mathTextSequence")),
                              (i = []),
                              (function t(o) {
                                return (a.join(","),
                                (o === t7.q.backslash && 0 === i.length) ||
                                  (o === t7.q.rightParenthesis &&
                                    1 === i.length))
                                  ? (e.consume(o), i.push(o), t)
                                  : i.length === a.length
                                  ? (e.exit("mathTextSequence"),
                                    e.exit("mathText"),
                                    n(o))
                                  : ((r.type = "mathTextData"), l(o));
                              })(o))
                            : o === t7.q.space
                            ? (e.enter("space"),
                              e.consume(o),
                              e.exit("space"),
                              s)
                            : (0, t9.Ch)(o)
                            ? (e.enter(rn.V.lineEnding),
                              e.consume(o),
                              e.exit(rn.V.lineEnding),
                              s)
                            : (e.enter("mathTextData"), l(o));
                        }
                        function l(n) {
                          return n === t7.q.eof ||
                            n === t7.q.space ||
                            n === t7.q.backslash ||
                            (0, t9.Ch)(n)
                            ? (e.exit("mathTextData"), s(n))
                            : (e.consume(n), l);
                        }
                      },
                      resolve: ro,
                      previous: rs,
                    },
                    {
                      tokenize: function (e, n, t) {
                        let r;
                        let a = [],
                          i = [],
                          o = this;
                        return function (n) {
                          return (
                            t7.q.backslash,
                            rd.call(o, o.previous) && o.previous,
                            e.enter("mathText"),
                            e.enter("mathTextSequence"),
                            (function n(r) {
                              return (a.join(","),
                              (r === t7.q.backslash && 0 === a.length) ||
                                (r === t7.q.leftSquareBracket &&
                                  1 === a.length))
                                ? (e.consume(r), a.push(r), n)
                                : a.length < 2
                                ? t(r)
                                : (e.exit("mathTextSequence"), s(r));
                            })(n)
                          );
                        };
                        function s(o) {
                          return o === t7.q.eof
                            ? t(o)
                            : o === t7.q.backslash
                            ? ((r = e.enter("mathTextSequence")),
                              (i = []),
                              (function t(o) {
                                return (a.join(","),
                                (o === t7.q.backslash && 0 === i.length) ||
                                  (o === t7.q.rightSquareBracket &&
                                    1 === i.length))
                                  ? (e.consume(o), i.push(o), t)
                                  : i.length === a.length
                                  ? (e.exit("mathTextSequence"),
                                    e.exit("mathText"),
                                    n(o))
                                  : ((r.type = "mathTextData"), l(o));
                              })(o))
                            : o === t7.q.space
                            ? (e.enter("space"),
                              e.consume(o),
                              e.exit("space"),
                              s)
                            : (0, t9.Ch)(o)
                            ? (e.enter(rn.V.lineEnding),
                              e.consume(o),
                              e.exit(rn.V.lineEnding),
                              s)
                            : (e.enter("mathTextData"), l(o));
                        }
                        function l(n) {
                          return n === t7.q.eof ||
                            n === t7.q.space ||
                            n === t7.q.backslash ||
                            (0, t9.Ch)(n)
                            ? (e.exit("mathTextData"), s(n))
                            : (e.consume(n), l);
                        }
                      },
                      resolve: rc,
                      previous: rd,
                    },
                  ],
                },
              }),
                n("fromMarkdownExtensions", (0, t6.N)()),
                n("toMarkdownExtensions", (0, t6.O)());
            },
            { singleDollarTextMath: !1 },
          ],
        ],
        rI = [
          [
            rm.Z,
            {
              languages: { mathematica: rf.Z },
              detect: !0,
              subset: [
                "arduino",
                "bash",
                "c",
                "cpp",
                "csharp",
                "css",
                "diff",
                "go",
                "graphql",
                "java",
                "javascript",
                "json",
                "kotlin",
                "latex",
                "less",
                "lua",
                "makefile",
                "makefile",
                "markdown",
                "matlab",
                "mathematica",
                "nginx",
                "objectivec",
                "perl",
                "pgsql",
                "php-template",
                "php",
                "plaintext",
                "python-repl",
                "python",
                "r",
                "ruby",
                "rust",
                "scss",
                "shell",
                "sql",
                "swift",
                "typescript",
                "vbnet",
                "wasm",
                "xml",
                "yaml",
              ],
              ignoreMissing: !0,
              aliases: { mathematica: "wolfram" },
            },
          ],
          rg.Z,
          [rp.Z, { newlines: !0 }],
        ],
        rZ = {
          code: function (e) {
            var n = e.inline,
              t = e.node,
              r = e.className,
              a = e.children,
              i = (0, h._)(e, ["inline", "node", "className", "children"]);
            if (n) {
              var o = (function (e) {
                if (!e.startsWith(tD)) return null;
                try {
                  return JSON.parse(e.slice(tD.length));
                } catch (e) {
                  return { index: -1 };
                }
              })((0, rv.B)(t));
              return o
                ? (0, p.jsx)(tL, { displayInfo: o })
                : (0, p.jsx)(
                    "code",
                    (0, L._)((0, f._)({ className: r }, i), { children: a })
                  );
            }
            var s,
              l =
                null ===
                  (s =
                    null == r
                      ? void 0
                      : r.split(" ").filter(function (e) {
                          return e.startsWith("language-");
                        })) || void 0 === s
                  ? void 0
                  : s[0],
              u = l ? l.split("-")[1] : "";
            return (0, p.jsx)(rM, {
              language: u,
              className: r,
              content: (0, rv.B)(t),
              children: a,
            });
          },
        };
      function rR(e) {
        var n = e.size,
          t = e.children,
          r = e.className,
          a = e.onSandboxLinkClick,
          i = (0, e7.F)().theme,
          o = (0, T.hz)().has("tools2"),
          s = (0, T.hz)().has(M.FZ),
          l = (0, j.useMemo)(
            function () {
              return (0, L._)((0, f._)({}, rZ), {
                a: function (e) {
                  var n = e.node,
                    t = (0, h._)(e, ["node"]),
                    r = n.properties.href;
                  return a && o && r.startsWith(t5.SANDBOX_LINK_PREFIX)
                    ? (0, p.jsx)("a", (0, L._)((0, f._)({}, t), { onClick: a }))
                    : (0, p.jsx)("a", (0, f._)({}, t));
                },
                img: function (e) {
                  var n = e.node,
                    t = (0, h._)(e, ["node"]),
                    r = n.properties.src;
                  return r.startsWith("sandbox:") || r.startsWith("attachment:")
                    ? null
                    : (0, p.jsx)("img", (0, f._)({}, t));
                },
                pre: function (e) {
                  e.node;
                  var n = (0, h._)(e, ["node"]);
                  return (0, p.jsx)(
                    "pre",
                    (0, L._)((0, f._)({}, n), {
                      className: (0, O.Z)(s && "!p-0", n.className),
                    })
                  );
                },
              });
            },
            [a, o, s]
          );
        return (0, p.jsx)(t4.D, {
          rehypePlugins: rI,
          remarkPlugins: rS,
          linkTarget: "_new",
          className: (0, O.Z)(
            r,
            "markdown prose w-full break-words dark:prose-invert",
            "dark" === i ? "dark" : "light",
            "small" === (void 0 === n ? "medium" : n) && "prose-xs"
          ),
          transformLinkUri: rP,
          components: l,
          children: t,
        });
      }
      var rD = {},
        rL = {};
      function rF(e) {
        var n,
          t = e.message,
          r = e.outputMessage,
          a = (0, e7.F)().theme,
          i = (0, C.WS)(),
          o =
            null === (n = null == r ? void 0 : r.message.metadata) ||
            void 0 === n
              ? void 0
              : n.aggregate_result,
          s =
            (null == o ? void 0 : o.status) !== void 0 &&
            (null == o ? void 0 : o.status) !== "running";
        (0, j.useEffect)(
          function () {
            rD[t.message.id] ||
              (i(k.s6.renderTool2Message, {
                id: t.message.id,
                finishedExecuting: s,
              }),
              (rD[t.message.id] = !0));
          },
          [i, t, s]
        );
        var l = (0, j.useCallback)(
            function () {
              rL[t.message.id] ||
                (i(k.s6.expandTool2Message, {
                  id: t.message.id,
                  finishedExecuting: s,
                }),
                (rL[t.message.id] = !0));
            },
            [i, t, s]
          ),
          u = (0, p.jsxs)(p.Fragment, {
            children: [
              (0, p.jsx)("div", {
                className: "mt-3 self-stretch",
                children: (0, p.jsx)(rR, {
                  className: (0, O.Z)(
                    "markdown prose w-full break-words dark:prose-invert",
                    "dark" === a ? "dark" : "light"
                  ),
                  children: (function (e) {
                    var n = function (e, n) {
                      return "```".concat(n, "\n").concat(e, "\n```");
                    };
                    if ("code" === e.message.content.content_type)
                      return n(e.message.content.text, "python");
                    if ("python" === e.message.recipient) {
                      if ("text" !== e.message.content.content_type)
                        throw Error("Unexpected content type for code message");
                      var t = e.message.content.parts;
                      if (1 !== t.length || "string" != typeof t[0])
                        throw Error("Unexpected parts for code message");
                      return n(t[0], "python");
                    }
                    throw Error("Unexpected code message format");
                  })(t),
                }),
              }),
              r &&
                (0, p.jsx)("div", {
                  className: "self-stretch",
                  children: (0, p.jsx)(tX, { message: r, isCollapsed: !0 }),
                }),
            ],
          });
        return (0, p.jsx)(tB, {
          expanderClosedLabel: "Show work",
          expanderOpenLabel: "Hide work",
          isComplete: s,
          results: u,
          onExpand: l,
          children: s ? "Finished working" : "Working...",
        });
      }
      var rA = t(59710);
      function rE() {
        var e = (0, g._)(["text-center mt-2 flex justify-center"]);
        return (
          (rE = function () {
            return e;
          }),
          e
        );
      }
      var rq = w.Z.div(rE());
      function rB(e) {
        var n = e.initialText,
          t = e.role,
          r = e.clientThreadId,
          a = e.currentLeaf,
          i = e.onUpdateNode,
          o = e.onChangeItemInView,
          s = e.onExitEdit,
          l = e.onDeleteNode,
          u = e.onRequestCompletion,
          c = e.onCreateEditNode,
          d = e.disabled,
          f = (0, C.WS)(),
          h = (0, j.useId)(),
          g = "".concat(a, "-").concat(h),
          x = (0, m._)((0, j.useState)(n || ""), 2),
          v = x[0],
          b = x[1],
          y = (0, j.useRef)(null),
          w = (0, T.hz)().has(M.FZ);
        (0, j.useEffect)(function () {
          c(a, g);
        }, []);
        var _ = (0, j.useCallback)(function (e) {
            b(e.currentTarget.value);
          }, []),
          N = (0, j.useCallback)(
            function () {
              i(g, v),
                o(g),
                u(nA.Os.Next, g, { eventSource: "mouse" }, !0),
                s();
            },
            [i, g, v, o, u, s]
          ),
          S = (0, j.useCallback)(
            function () {
              l(g),
                o(a),
                s(),
                f(
                  t === nA.uU.User
                    ? k.s6.cancelEditPrompt
                    : k.s6.cancelEditCompletion,
                  { threadId: P.tQ.getServerThreadId(r) }
                );
            },
            [g, a, f, o, l, s, t, r]
          );
        return (
          (0, j.useEffect)(
            function () {
              var e = y.current,
                n = function (e) {
                  "Enter" === e.key && e.metaKey
                    ? N()
                    : "Escape" === e.key && S();
                };
              return (
                e && e.addEventListener("keydown", n),
                function () {
                  e && e.removeEventListener("keydown", n);
                }
              );
            },
            [S, N]
          ),
          (0, p.jsxs)(p.Fragment, {
            children: [
              (0, p.jsx)(tv.ZP, {
                ref: y,
                value: v,
                onChange: _,
                className: (0, O.Z)(
                  "m-0 resize-none border-0 bg-transparent p-0 focus:ring-0 focus-visible:ring-0",
                  w && "sm:text-lg"
                ),
              }),
              (0, p.jsxs)(rq, {
                children: [
                  (0, p.jsx)(ei.z, {
                    as: "button",
                    onClick: N,
                    className: "mr-2",
                    disabled: d,
                    children: "Save & Submit",
                  }),
                  (0, p.jsx)(ei.z, {
                    as: "button",
                    color: "neutral",
                    onClick: S,
                    children: "Cancel",
                  }),
                ],
              }),
            ],
          })
        );
      }
      var rO = t(77434),
        rU = t(47635);
      function rz() {
        var e = (0, g._)(["text-xs text-black\n", ""]);
        return (
          (rz = function () {
            return e;
          }),
          e
        );
      }
      function rH() {
        var e = (0, g._)(["relative w-full overflow-hidden pt-[67%]"]);
        return (
          (rH = function () {
            return e;
          }),
          e
        );
      }
      function rV(e) {
        var n,
          t = e.title,
          r = e.url,
          a = e.imageUrl,
          i = e.logoUrl,
          o = e.className,
          s = e.mini,
          l = !!a,
          u = (0, C.WS)(),
          c = (0, j.useCallback)(
            function () {
              u(k.s6.carouselCardClick, { content: r });
            },
            [u, r]
          );
        try {
          n = rU.get(new URL(r).hostname);
        } catch (e) {
          return console.error("Invalid card url: ", e), null;
        }
        return (0, p.jsxs)(r ? "a" : "div", {
          className: (0, O.Z)(
            "flex h-full w-full flex-col overflow-hidden rounded-md border border-black/10 bg-gray-50 shadow-[0_2px_24px_rgba(0,0,0,0.05)]",
            o
          ),
          href: r,
          target: r ? "_blank" : "",
          onClick: c,
          children: [
            l &&
              (0, p.jsx)(rW, {
                children: (0, p.jsx)("div", {
                  className: "absolute inset-0",
                  children: (0, p.jsx)("img", {
                    src: a,
                    alt: "image of ".concat(t),
                    className:
                      "h-full w-full border-b border-black/10 object-cover",
                  }),
                }),
              }),
            (0, p.jsxs)("div", {
              className: "flex flex-1 flex-col justify-between gap-1.5 p-3",
              children: [
                (0, p.jsx)(rQ, {
                  $clamp: (void 0 !== s && s) || l,
                  children: t,
                }),
                (0, p.jsxs)("div", {
                  className: "flex items-center gap-1",
                  children: [
                    i
                      ? (0, p.jsx)(eW, { url: i, name: n, size: 13 })
                      : (0, p.jsx)(tZ, { url: r, size: 13 }),
                    (0, p.jsx)("div", {
                      className:
                        "text-[10px] leading-3 text-gray-500 line-clamp-1",
                      children: n,
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      var rQ = w.Z.div(rz(), function (e) {
          return e.$clamp && "line-clamp-2";
        }),
        rW = w.Z.div(rH()),
        rG = t(96237),
        r$ = t(21260),
        rJ = t(52422);
      function rY(e) {
        var n = e.disabled,
          t = e.onClick,
          r = e.left,
          a = e.children;
        return (0, p.jsx)("button", {
          disabled: n,
          onClick: t,
          "aria-disabled": n,
          className: (0, O.Z)(
            "flex h-6 w-[30px] items-center justify-center rounded-full",
            "bg-gray-900 text-white shadow-sm hover:bg-gray-700 disabled:hover:bg-gray-900 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 dark:disabled:hover:bg-white",
            "transition-opacity disabled:opacity-20",
            "cursor-pointer disabled:cursor-auto",
            "absolute top-full translate-y-3 lg:top-1/2 lg:-translate-y-1/2",
            void 0 !== r && r
              ? "left-1/2 -translate-x-[calc(100%+4px)] lg:-left-3 lg:-translate-x-full"
              : "left-1/2 translate-x-1 lg:-right-3 lg:left-auto lg:translate-x-full",
            n && "lg:hidden"
          ),
          children: a,
        });
      }
      var rK = function (e) {
          var n = e.x,
            t = e.children,
            r = e.className;
          return (0, p.jsx)(b.E.div, {
            className: (0, O.Z)(
              "mr-3 h-full w-full flex-none sm:w-[calc((100%-12px)/2)] lg:w-[calc((100%-24px)/3)]",
              r
            ),
            style: { x: n },
            children: t,
          });
        },
        rX = { type: "spring", bounce: 0 },
        r0 = (0, j.forwardRef)(function (e, n) {
          return (0,
          p.jsx)("div", { ref: n, className: (0, O.Z)("relative flex h-full w-full overflow-hidden", e.className), children: e.children });
        });
      r0.displayName = "CarouselContainer";
      var r1 =
        ((l = {}),
        (0, rG._)(l, B._G.Small, 1),
        (0, rG._)(l, B._G.Medium, 2),
        (0, rG._)(l, B._G.Large, 2),
        (0, rG._)(l, B._G.XLarge, 3),
        (0, rG._)(l, B._G.Full, 3),
        l);
      function r2(e) {
        var n = e.children,
          t = e.loop,
          r = void 0 === t || t,
          a = e.className,
          i = (0, r$.c)(0),
          o = (0, j.useRef)(null),
          s = (0, m._)((0, j.useState)(0), 2),
          l = s[0],
          u = s[1],
          c = r1[(0, B.dQ)()] || 1,
          d = j.Children.count(n) > c,
          f = j.Children.toArray(n),
          h = (0, j.useCallback)(
            function () {
              var e,
                n =
                  null === (e = o.current) || void 0 === e
                    ? void 0
                    : e.clientWidth;
              return n ? -Math.floor(l / c) * (n + 12) : 0;
            },
            [c, l]
          ),
          g = (0, j.useCallback)(
            function (e) {
              var n = c * e;
              r
                ? u(function (e) {
                    return ((e + n) % f.length) - 1;
                  })
                : u(function (e) {
                    return tk()(e + n, 0, f.length - 1);
                  });
            },
            [f.length, r, c]
          ),
          x = (0, j.useCallback)(
            function () {
              g(1);
            },
            [g]
          ),
          v = (0, j.useCallback)(
            function () {
              g(-1);
            },
            [g]
          ),
          b = (0, m._)(
            (0, j.useMemo)(
              function () {
                if (r) return [!0, !0];
                var e = l < f.length - c;
                return [l > 0, e];
              },
              [f.length, l, r, c]
            ),
            2
          ),
          y = b[0],
          w = b[1];
        return (
          (0, j.useEffect)(
            function () {
              return (0, rJ.j)(i, h(), rX).stop;
            },
            [h, l, i]
          ),
          (0, p.jsxs)("div", {
            className: (0, O.Z)(
              "relative h-full w-full",
              a,
              d && "mb-12 lg:mb-0"
            ),
            children: [
              (0, p.jsx)(r0, {
                ref: o,
                children: f.map(function (e, n) {
                  return (0, p.jsx)(rK, { x: i, children: e }, n);
                }),
              }),
              d &&
                (0, p.jsxs)(p.Fragment, {
                  children: [
                    (0, p.jsx)(rY, {
                      onClick: v,
                      left: !0,
                      disabled: !y,
                      children: (0, p.jsx)(eo.ZP, { icon: J.YFh }),
                    }),
                    (0, p.jsx)(rY, {
                      onClick: x,
                      disabled: !w,
                      children: (0, p.jsx)(eo.ZP, { icon: J.Tfp }),
                    }),
                  ],
                }),
            ],
          })
        );
      }
      var r3 = t(74437);
      function r4() {
        var e = (0, j.useContext)(q.AX),
          n = (0, r3.Z)().installedPlugins;
        return (0, j.useMemo)(
          function () {
            return n.filter(function (n) {
              return e.has(n.id);
            });
          },
          [e, n]
        );
      }
      var r5 = new Set([
          "og:site_name",
          "og:title",
          "og:description",
          "og:image",
          "og:url",
        ]),
        r6 = {
          "og:site_name": "metadataTitle",
          "og:title": "title",
          "og:description": "description",
          "og:image": "imageUrl",
          "og:url": "url",
        },
        r7 =
          /https:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g,
        r8 = j.memo(function (e) {
          var n,
            t,
            r = e.urls,
            a = r4(),
            i =
              ((n = (0, eu.kP)().session),
              (t = (0, rO.h)({
                queries: r.map(function (e) {
                  return {
                    queryKey: ["opengraph", e],
                    queryFn: (0, e8._)(function () {
                      return (0, e9.Jh)(this, function (n) {
                        switch (n.label) {
                          case 0:
                            return [4, _.ZP.getPageMetadata({ url: e })];
                          case 1:
                            return [2, n.sent()];
                        }
                      });
                    }),
                    enabled: !!(e && (null == n ? void 0 : n.accessToken)),
                    retry: !1,
                  };
                }),
              })),
              (0, j.useMemo)(
                function () {
                  return t
                    .map(function (e, n) {
                      var t = e.data,
                        a = e.isError,
                        i = e.isLoading,
                        o = r[n];
                      if (a || i) return null;
                      var s = t.tags.reduce(function (e, n) {
                        return r5.has(n.type) && (e[r6[n.type]] = n.value), e;
                      }, {});
                      try {
                        var l,
                          u = o.split(/[#?]/)[0],
                          c =
                            null === (l = s.url) || void 0 === l
                              ? void 0
                              : l.endsWith("/login"),
                          d = s.url && "/" === new URL(s.url || "").pathname;
                        if (u !== s.url && (c || d)) return null;
                      } catch (e) {
                        return null;
                      }
                      return (s.url = o), s;
                    })
                    .filter(Boolean);
                },
                [t, r]
              )),
            o = (0, j.useMemo)(
              function () {
                return !i.some(function (e) {
                  return !!(null == e ? void 0 : e.imageUrl);
                });
              },
              [i]
            ),
            s = (0, j.useMemo)(
              function () {
                return a.reduce(function (e, n) {
                  return (e[rU.get(n.domain)] = n.manifest.logo_url), e;
                }, {});
              },
              [a]
            ),
            l = (0, j.useMemo)(
              function () {
                return i.map(function (e) {
                  var n, t;
                  if (!e) return null;
                  try {
                    n = rU.get(new URL(e.url).hostname);
                  } catch (e) {
                    return console.error("Invalid card url: ", e), null;
                  }
                  return (
                    n in s && (t = s[n]),
                    (0, p.jsx)(
                      rV,
                      {
                        title: e.title || "",
                        url: e.url,
                        imageUrl: e.imageUrl,
                        logoUrl: t,
                        mini: o,
                      },
                      e.url
                    )
                  );
                });
              },
              [i, o, s]
            );
          return 0 === i.length
            ? null
            : (0, p.jsx)(r2, { loop: !1, children: l });
        }),
        r9 = t(44541);
      function ae() {
        var e = (0, g._)([
          "\npy-2 px-3 border text-gray-600 rounded-md text-sm dark:text-gray-100\n",
          "\n",
          "\n",
          "\n",
        ]);
        return (
          (ae = function () {
            return e;
          }),
          e
        );
      }
      var an = j.memo(function (e) {
        var n,
          t = e.message,
          r = e.isEditing,
          a = e.format,
          i = e.isCompletionInProgress,
          o = e.className,
          s = e.onSandboxLinkClick,
          l = e.isCompletion,
          u = e.isResponseToPluginMessage,
          c = (0, h._)(e, [
            "message",
            "isEditing",
            "format",
            "isCompletionInProgress",
            "className",
            "onSandboxLinkClick",
            "isCompletion",
            "isResponseToPluginMessage",
          ]);
        return r
          ? (0, p.jsx)(
              rB,
              (0, f._)(
                {
                  currentLeaf: t.nodeId,
                  initialText: nl.Cv.getTextFromMessage(t.message),
                  role: t.message.author.role,
                },
                c
              )
            )
          : (0, p.jsx)(at, {
              text: nl.Cv.getTextFromMessage(t.message),
              errCode: t.errCode,
              err: t.err,
              flag: t.errType,
              isCompletionInProgress: i,
              format: a,
              className: o,
              citations:
                null === (n = t.message.metadata) || void 0 === n
                  ? void 0
                  : n.citations,
              isCompletion: l,
              onSandboxLinkClick: s,
              id: t.nodeId,
              onRequestMoreCompletions: c.onRequestMoreCompletions,
              clientThreadId: c.clientThreadId,
              showExtractedLinkCards: u,
            });
      });
      function at(e) {
        var n,
          t,
          r,
          a = e.citations,
          i = e.className,
          o = e.err,
          s = e.errCode,
          l = e.flag,
          u = e.format,
          c = e.isCompletionInProgress,
          d = e.size,
          f = e.text,
          h = e.onSandboxLinkClick,
          m = e.isCompletion,
          g = e.id,
          x = e.onRequestMoreCompletions,
          v = e.clientThreadId,
          b = e.showExtractedLinkCards,
          y = s === tx.Dd,
          w = (0, T.hz)(),
          C =
            ((t = (n = { text: f, isCompletionInProgress: c }).text),
            (r = n.isCompletionInProgress),
            (0, j.useMemo)(
              function () {
                if (r) return [];
                var e = t.match(r7);
                return Array.from(new Set(e));
              },
              [r, t]
            )),
          k = (0, j.useMemo)(
            function () {
              switch (s) {
                case tx.Dd:
                  return (0, p.jsx)(ao, {
                    $flag: l,
                    children: (0, p.jsx)(ai, {}),
                  });
                case r9.uU:
                  if (w.has("model_preview"))
                    return (0, p.jsx)(aa, {
                      id: g,
                      onRequestMoreCompletions: x,
                      flag: l,
                      clientThreadId: v,
                    });
                  return (0, p.jsx)(ao, { $flag: l, children: o });
                case rA.wp:
                  return (0, p.jsx)(ao, {
                    $flag: l,
                    children:
                      "Sorry, conversations created when Chat History is off expire after 6 hours of inactivity. Please start a new conversation to continue using ChatGPT.",
                  });
                default:
                  return (0, p.jsx)(ao, { $flag: l, children: o });
              }
            },
            [o, s, w, l, g, x, v]
          ),
          _ = (0, T.hz)().has(M.FZ);
        return (0, p.jsxs)("div", {
          className: (0, O.Z)(
            i,
            "flex flex-col items-start gap-4 whitespace-pre-wrap break-words",
            "danger" === l && "flex flex-row gap-2 text-red-500",
            "warning" === l && "text-orange-500",
            _ && "text-base"
          ),
          children: [
            (o && !f) || y || !u
              ? "danger" === l && y
                ? null
                : f
              : (0, p.jsx)(rR, {
                  size: void 0 === d ? "medium" : d,
                  className: (0, O.Z)(
                    "danger" !== l && c && "result-streaming",
                    "danger" === l && "text-red-500",
                    "warning" === l && "text-orange-500"
                  ),
                  onSandboxLinkClick: h,
                  children:
                    "" === f
                      ? "&#8203;"
                      : (function (e, n) {
                          if (!n) return e;
                          for (var t = n.length - 1; t >= 0; t--) {
                            var r = n[t],
                              a = r.start_ix,
                              i = r.end_ix,
                              o = r.metadata,
                              s = r.invalid_reason,
                              l = { index: t };
                            o ? (l.metadata = o) : s && (l.invalid_reason = s),
                              (e =
                                e.slice(0, a) +
                                ""
                                  .concat(tR, "`")
                                  .concat(tD)
                                  .concat(JSON.stringify(l), "`")
                                  .concat(tR) +
                                e.slice(i));
                          }
                          return e;
                        })(f, a),
                }),
            m && b && C.length > 0 && (0, p.jsx)(r8, { urls: C }),
            l && k,
          ],
        });
      }
      function ar(e) {
        var n = e && new Date(e),
          t = n && new Date(n);
        return t
          ? "after "
              .concat(t.getHours() % 12 || 12, ":")
              .concat(10 > t.getMinutes() ? "0" : "")
              .concat(t.getMinutes(), " ")
              .concat(t.getHours() >= 12 ? "PM" : "AM")
          : "later";
      }
      function aa(e) {
        var n = e.id,
          t = e.onRequestMoreCompletions,
          r = e.flag,
          a = e.clientThreadId,
          i = (0, y.useRouter)(),
          o = (0, r9.CS)(function (e) {
            return e.isoDate;
          }),
          s = ar(o),
          l = (0, j.useCallback)(
            function () {
              t(n, { eventSource: "mouse" }, !0, "none", !1);
            },
            [n, t]
          ),
          u = (0, j.useCallback)(
            function () {
              var e = void 0 !== a ? P.tQ.getServerThreadId(a) : void 0;
              void 0 === e
                ? i.replace("/", void 0, { shallow: !0 })
                : (0, r9.m0)(e),
                t(n, { eventSource: "mouse" }, !0, "none", !0);
            },
            [n, t, i, a]
          ),
          c = o
            ? (0, p.jsxs)("span", {
                children: [
                  "You've reached the current usage cap for GPT-4. You can continue with the default model now, or try again ".concat(
                    s,
                    "."
                  ),
                  " ",
                  (0, p.jsx)("a", {
                    href: "https://share.hsforms.com/16d0ZZVM3QZirXnCD_q7u1Q4sk30",
                    target: "_blank",
                    rel: "noreferrer",
                    className: "underline",
                    children: "Learn more",
                  }),
                ],
              })
            : "You previously reached your usage cap for GPT-4, but you can now try sending your message again";
        return (0, p.jsx)(ao, {
          $flag: !!o && r,
          children: (0, p.jsxs)("div", {
            className: "flex items-center gap-6",
            children: [
              c,
              !o &&
                (0, p.jsx)(ei.z, {
                  color: "light",
                  className: "flex-shrink-0 bg-white",
                  onClick: l,
                  children: "Try again",
                }),
              o &&
                (0, p.jsx)(ei.z, {
                  color: "light",
                  className: "flex-shrink-0 bg-white",
                  onClick: u,
                  children: "Use default model",
                }),
            ],
          }),
        });
      }
      function ai() {
        return (0, p.jsxs)(p.Fragment, {
          children: [
            "This content may violate our",
            " ",
            (0, p.jsx)("a", {
              target: "_blank",
              href: "https://platform.openai.com/docs/usage-policies/content-policy",
              rel: "noreferrer",
              className: "bold underline",
              children: "content policy",
            }),
            ". If you believe this to be in error, please",
            " ",
            (0, p.jsx)("a", {
              target: "_blank",
              href: "https://forms.gle/3gyAMj5r5rTEcgbs5",
              rel: "noreferrer",
              className: "bold underline",
              children: "submit your feedback",
            }),
            " ",
            "— your input will aid our research in this area.",
          ],
        });
      }
      var ao = w.Z.div(
        ae(),
        function (e) {
          return "warning" === e.$flag && "border-orange-500 bg-orange-500/10";
        },
        function (e) {
          return "danger" === e.$flag && "border-red-500 bg-red-500/10";
        },
        function (e) {
          return !e.$flag && "border-green-500 bg-green-500/10";
        }
      );
      function as(e) {
        var n = e.messages,
          t = e.isCompletionInProgress,
          r = e.isCompletion,
          a = e.onRequestMoreCompletions,
          i = n.reduce(function (e, n) {
            return n.err ? e : e + nl.Cv.getTextFromMessage(n.message);
          }, "");
        return (0, p.jsx)(at, {
          text: i,
          format: !0,
          isCompletion: r,
          isCompletionInProgress: t,
          id: "",
          onRequestMoreCompletions: a,
        });
      }
      function al() {
        var e = (0, g._)([
          "flex items-center gap-1 rounded-[5px] bg-red-200 py-0.5 px-1.5 text-xs font-medium uppercase text-red-800",
        ]);
        return (
          (al = function () {
            return e;
          }),
          e
        );
      }
      var au = j.memo(function (e) {
        var n,
          t = e.messages,
          r = (0, m._)(t, 2),
          a = r[0],
          i = r[1],
          o = r4(),
          s =
            null === (n = a.message.recipient) || void 0 === n
              ? void 0
              : n.split(".")[0],
          l = o.find(function (e) {
            return e.namespace === s;
          }),
          u = null == l ? void 0 : l.manifest.name_for_human;
        if (!u)
          return (0, p.jsx)("div", {
            className: "result-streaming prose dark:prose-invert",
            children: (0, p.jsx)("span", { children: "​" }),
          });
        var c = i
            ? (0, p.jsxs)("div", {
                children: ["Used ", (0, p.jsx)("b", { children: u })],
              })
            : (0, p.jsxs)("div", {
                children: ["Using ", (0, p.jsx)("b", { children: u }), "..."],
              }),
          d = nB(l)
            ? (0, p.jsx)(ad, {})
            : "approved" !== l.status
            ? (0, p.jsx)(ac, {})
            : void 0;
        return (0,
        p.jsx)(tB, { isComplete: !!i, results: (0, p.jsx)(ah, { pluginName: u, pluginMessage: a, toolMessage: i }), children: (0, p.jsxs)("div", { className: "flex items-center gap-3", children: [c, d] }) });
      });
      function ac() {
        return (0, p.jsxs)(af, {
          children: [
            (0, p.jsx)(eo.ZP, {
              icon: J.OH,
              className: "h-3 w-3",
              strokeWidth: 2.5,
            }),
            (0, p.jsx)("div", { children: "Unverified" }),
          ],
        });
      }
      function ad() {
        return (0, p.jsxs)(af, {
          children: [
            (0, p.jsx)(eo.ZP, { icon: J.V7f, className: "h-3 w-3" }),
            (0, p.jsx)("div", { children: "Localhost" }),
          ],
        });
      }
      var af = w.Z.div(al());
      function ah(e) {
        var n = e.pluginName,
          t = e.pluginMessage,
          r = e.toolMessage,
          a = nl.Cv.getTextFromMessage(t.message),
          i = r ? nl.Cv.getTextFromMessage(r.message) : null;
        try {
          (a = JSON.stringify(JSON.parse(a), null, 2)),
            i && (i = JSON.stringify(JSON.parse(i), null, 2));
        } catch (e) {}
        var o =
          (null == r ? void 0 : r.message.author.name) === "plugin_service";
        return (0, p.jsxs)("div", {
          className: "my-3 flex max-w-full flex-col gap-3",
          children: [
            (0, p.jsx)(am, {
              title: "Request to ".concat(n),
              infoTooltip: t.message.recipient,
              children: a,
            }),
            i &&
              (0, p.jsx)(am, {
                title: o ? "Error" : "Response from ".concat(n),
                infoTooltip: t.message.recipient,
                children: (0, p.jsx)("span", {
                  className: (0, O.Z)(o && "text-red-500"),
                  children: i,
                }),
              }),
          ],
        });
      }
      function am(e) {
        var n = e.title,
          t = e.infoTooltip,
          r = e.children;
        return (0, p.jsx)(rN, {
          title: (0, p.jsx)("span", { className: "uppercase", children: n }),
          headerDecoration:
            void 0 !== t
              ? (0, p.jsx)(nh.u, {
                  label: t,
                  children: (0, p.jsx)(eo.ZP, {
                    icon: J.H33,
                    className: "text-white/50",
                  }),
                })
              : void 0,
          shouldWrapCode: !0,
          className: "w-full text-xs text-white/80",
          children: r,
        });
      }
      var ag = j.memo(function (e) {
        var n = e.messages,
          t = (0, m._)(n, 2),
          r = t[0],
          a = t[1],
          i = nl.Cv.getTextFromMessage(r.message).match(
            /^search\(["'](.+)["'].*\)$/
          ),
          o = i ? i[1] : null;
        return o
          ? (0, p.jsx)(tB, {
              isComplete: !!a,
              children: a
                ? (0, p.jsxs)(p.Fragment, {
                    children: [
                      "Searched: ",
                      (0, p.jsxs)("b", { children: ["“", o, "”"] }),
                    ],
                  })
                : (0, p.jsxs)(p.Fragment, {
                    children: [
                      "Searching the web: ",
                      (0, p.jsxs)("b", { children: ["“", o, "”"] }),
                    ],
                  }),
            })
          : (0, p.jsx)("div", {
              className: "result-streaming prose dark:prose-invert",
              children: (0, p.jsx)("span", { children: "​" }),
            });
      });
      function ap() {
        var e = (0, g._)([""]);
        return (
          (ap = function () {
            return e;
          }),
          e
        );
      }
      function ax() {
        var e = (0, g._)(["flex flex-grow flex-col gap-3"]);
        return (
          (ax = function () {
            return e;
          }),
          e
        );
      }
      function av() {
        var e = (0, g._)(["flex p-4 gap-4 ", ""]);
        return (
          (av = function () {
            return e;
          }),
          e
        );
      }
      function ab() {
        var e = (0, g._)([
          "flex-shrink-0 flex flex-col relative items-end ",
          "",
        ]);
        return (
          (ab = function () {
            return e;
          }),
          e
        );
      }
      function ay() {
        var e = (0, g._)([
          "p-2 rounded-md hover:bg-gray-200 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200 flex items-center gap-2",
        ]);
        return (
          (ay = function () {
            return e;
          }),
          e
        );
      }
      function aj() {
        var e = (0, g._)([
          "p-1 rounded-md hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400",
        ]);
        return (
          (aj = function () {
            return e;
          }),
          e
        );
      }
      function aw() {
        var e = (0, g._)([
          "text-gray-400 flex self-end lg:self-center justify-center mt-2 gap-2 md:gap-3 lg:gap-1 lg:absolute lg:top-0 lg:translate-x-full lg:right-0 lg:mt-0 lg:pl-2\n",
          "",
        ]);
        return (
          (aw = function () {
            return e;
          }),
          e
        );
      }
      function aC() {
        var e = (0, g._)([
          "text-center border-b p-3 text-gray-500 dark:border-black/20 dark:text-gray-400 text-xs",
        ]);
        return (
          (aC = function () {
            return e;
          }),
          e
        );
      }
      function ak() {
        var e = (0, g._)([
          "flex justify-between items-center p-4 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm",
        ]);
        return (
          (ak = function () {
            return e;
          }),
          e
        );
      }
      ((a = u || (u = {}))[(a.Text = 0)] = "Text"),
        (a[(a.MultiText = 1)] = "MultiText"),
        (a[(a.SimpleBrowsing = 2)] = "SimpleBrowsing"),
        (a[(a.Browsing = 3)] = "Browsing"),
        (a[(a.Code = 4)] = "Code"),
        (a[(a.CodeExecutionOutput = 5)] = "CodeExecutionOutput"),
        (a[(a.Plugin = 6)] = "Plugin");
      var a_ = j.memo(function (e) {
          var n,
            t,
            r = e.turnIndex,
            a = e.turnLeafId,
            i = e.isFinalTurn,
            o = e.clientThreadId,
            l = e.onChangeItemInView,
            c = e.onChangeRating,
            d = e.onRequestMoreCompletions,
            h = e.onDeleteNode,
            g = e.onRequestCompletion,
            x = e.onUpdateNode,
            v = e.onSandboxLinkClick,
            b = e.onHandleChangeVariantFeedbackInlineComparisonRating,
            y = e.activeRequests,
            w = e.showInlineEmbeddedDisplay,
            _ = void 0 !== w && w,
            N = e.modelBackend,
            S = e.isSharedThread,
            I = void 0 !== S && S,
            Z = e.onTurnEnteredViewport,
            R = e.initiallyHighlightedMessageId,
            D = (0, P.GD)(o, r, a),
            F = D.role,
            A = D.messages,
            U = D.variantIds,
            z = E.G.theme,
            H = z.color,
            V = z.icon,
            Q = z.activeColor,
            W = (0, eu.kP)().session,
            G = (0, B.Ui)(),
            $ = (0, C.WS)(),
            Y = (0, m._)((0, j.useState)(!1), 2),
            K = Y[0],
            X = Y[1],
            ee = (0, j.useMemo)(
              function () {
                return U.findIndex(function (e) {
                  return e === A[0].nodeId;
                });
              },
              [U, A]
            ),
            en = F !== nA.uU.User,
            et = (0, j.useContext)(q.QL).historyDisabled,
            er = (0, T.hz)().has(M.FZ),
            ea = (0, j.useRef)(null);
          (0, j.useEffect)(
            function () {
              var e = ea.current;
              if (Z && e) {
                var n = new IntersectionObserver(
                  function (e, n) {
                    Z(D, r, e[0].isIntersecting);
                  },
                  { threshold: 0.51 }
                );
                return (
                  n.observe(e),
                  function () {
                    n.unobserve(e);
                  }
                );
              }
            },
            [ea, Z, D, r]
          ),
            (0, j.useEffect)(
              function () {
                var e;
                null != R &&
                  D.messages
                    .map(function (e) {
                      return e.message.id;
                    })
                    .includes(R) &&
                  (null === (e = ea.current) ||
                    void 0 === e ||
                    e.scrollIntoView({ behavior: "smooth" }));
              },
              [R]
            );
          var ei = A[A.length - 1],
            es = (0, m._)((0, j.useState)(ei.rating), 2),
            el = es[0],
            ec = es[1],
            ed = (0, T.hz)(),
            ef = r4(),
            eh = (0, j.useMemo)(
              function () {
                return (
                  (en &&
                    (null == A ? void 0 : A[0]) &&
                    nl.Cv.getModelFromMessage(
                      null == A ? void 0 : A[0].message
                    )) ||
                  N
                );
              },
              [en, A, N]
            ),
            em = (0, j.useCallback)(
              function () {
                1 === A.length &&
                  ($(F === nA.uU.User ? k.s6.editPrompt : k.s6.editCompletion, {
                    id: A[0].message.id,
                    threadId: P.tQ.getServerThreadId(o),
                  }),
                  X(!0));
              },
              [A, $, F, o]
            ),
            eg = (0, j.useCallback)(function () {
              X(!1);
            }, []),
            ep = (0, j.useCallback)(
              function () {
                var e = A.reduce(function (e, n) {
                  return n.err ||
                    n.message.author.role !== nA.uU.Assistant ||
                    "all" !== n.message.recipient
                    ? e
                    : e +
                        (e ? "\n\n" : "") +
                        nl.Cv.getTextFromMessage(n.message);
                }, "");
                navigator.clipboard.writeText(e),
                  $(k.s6.copyToClipboard, {
                    threadId: P.tQ.getServerThreadId(o),
                    id: A[0].message.id,
                    eventSource: "mouse",
                    model: eh,
                  }),
                  tj.m.logEvent("chatgpt_copy_to_clipboard");
              },
              [eh, $, A, o]
            ),
            ex = (0, j.useCallback)(
              function (e) {
                c(ei.nodeId, ei.message.id, e), ec(e);
              },
              [ei, c]
            ),
            ev = (0, m._)((0, j.useState)(ei.inlineComparisonRating), 2),
            eb = ev[0],
            ey = ev[1];
          (0, j.useEffect)(
            function () {
              ec(function (e) {
                return null != e ? e : ei.rating;
              }),
                ey(function (e) {
                  return null != e ? e : ei.inlineComparisonRating;
                });
            },
            [ei]
          );
          var ej = (0, j.useMemo)(
              function () {
                return nl.Cv.getRequestIdFromConversationTurn(D);
              },
              [D]
            ),
            ew = (0, j.useMemo)(
              function () {
                return y.has(ej);
              },
              [y, ej]
            ),
            eC = (0, j.useMemo)(
              function () {
                var e = !0,
                  n = !1,
                  t = void 0;
                try {
                  for (
                    var r, a = A[Symbol.iterator]();
                    !(e = (r = a.next()).done);
                    e = !0
                  ) {
                    var i = r.value;
                    if (i.errType) return i.errType;
                  }
                } catch (e) {
                  (n = !0), (t = e);
                } finally {
                  try {
                    e || null == a.return || a.return();
                  } finally {
                    if (n) throw t;
                  }
                }
                return !1;
              },
              [A]
            ),
            ek = (0, j.useMemo)(
              function () {
                if (en) {
                  var e,
                    n,
                    t = P.tQ.getTree(o),
                    r =
                      null === (e = t.getParentPromptNode(A[0].nodeId)) ||
                      void 0 === e
                        ? void 0
                        : e.parentId,
                    a =
                      r &&
                      (null === (n = t.getNode(r).message.metadata) ||
                      void 0 === n
                        ? void 0
                        : n.model_slug);
                  if (eh && a && eh !== a)
                    return r9.n2.has(a)
                      ? "The previous model used in this conversation has been deprecated. We've switched you to the latest default model."
                      : "The previous model used in this conversation is unavailable. We've switched you to the latest default model.";
                }
                return null;
              },
              [eh, en, A, o]
            ),
            e_ = (0, j.useMemo)(
              function () {
                if (!ed.has("tools") && !ed.has("tools2") && !ed.has("tools3"))
                  return { avatarIcon: V, avatarColor: H };
                if (ew && A.length > 0) {
                  var e = A[A.length - 1],
                    n = tw(e.message);
                  switch (n) {
                    case s.Text:
                      if (
                        nl.Cv.getTextFromMessage(e.message).length > 0 ||
                        A.length > 1
                      )
                        return { avatarIcon: "text", avatarColor: Q };
                      break;
                    case s.SimpleBrowsing:
                    case s.Browsing:
                    case s.BrowseTool:
                      return { avatarIcon: "browsing", avatarColor: Q };
                    case s.Code:
                    case s.CodeExecutionOutput:
                      return { avatarIcon: "code", avatarColor: Q };
                    case s.Plugin:
                    case s.PluginTool:
                      var t =
                          n === s.Plugin
                            ? e.message.recipient
                            : e.message.author.name,
                        r = null == t ? void 0 : t.split(".")[0],
                        a = ef.find(function (e) {
                          return e.namespace === r;
                        });
                      if (a) return { avatarPlugin: a };
                      return { avatarIcon: "plugin", avatarColor: Q };
                  }
                }
                return { avatarIcon: V, avatarColor: H };
              },
              [ed, ew, A, V, H, Q, ef]
            ),
            eT = e_.avatarIcon,
            eM = e_.avatarColor,
            eN = e_.avatarPlugin,
            eP = (0, j.useCallback)(
              function (e, n) {
                P.tQ.updateTree(o, function (t) {
                  var r = t.getParentId(e);
                  t.addNode(n, "", r, nA.Jq.Prompt);
                });
              },
              [o]
            ),
            eS = (0, j.useMemo)(
              function () {
                var e = [];
                return (
                  A.forEach(function (n, t) {
                    var r = tw(n.message),
                      a = null == A ? void 0 : A[t - 1],
                      i =
                        a &&
                        (nl.Cv.getIsIncompleteFromMessage(a.message) ||
                          nl.Cv.getIsContinuedFromMessage(a.message)),
                      o = nl.Cv.getIsContinuedFromMessage(n.message),
                      l = r === s.Text && nl.Cv.getTextFromMessage(n.message);
                    if (i && o && l) {
                      var c = e.pop();
                      (null == c ? void 0 : c.type) === u.MultiText
                        ? (c.messages.push(n), e.push(c))
                        : (null == c ? void 0 : c.type) === u.Text &&
                          e.push({
                            type: u.MultiText,
                            messages: [c.message, n],
                          });
                    } else if (
                      r === s.SimpleBrowsing ||
                      r === s.Browsing ||
                      r === s.BrowseTool
                    ) {
                      var d = e[e.length - 1];
                      (null == d ? void 0 : d.type) === u.SimpleBrowsing ||
                      (null == d ? void 0 : d.type) === u.Browsing
                        ? d.messages.push(n)
                        : e.push({
                            type:
                              r === s.SimpleBrowsing
                                ? u.SimpleBrowsing
                                : u.Browsing,
                            messages: [n],
                          });
                    } else if (r === s.Plugin || r === s.PluginTool) {
                      var f = e[e.length - 1];
                      r === s.PluginTool &&
                      (null == f ? void 0 : f.type) === u.Plugin
                        ? f.messages.push(n)
                        : e.push({ type: u.Plugin, messages: [n] });
                    } else {
                      var h = u.Text;
                      r === s.Code
                        ? (h = u.Code)
                        : r === s.CodeExecutionOutput &&
                          (h = u.CodeExecutionOutput),
                        e.push({ type: h, message: n });
                    }
                  }),
                  e.map(function (n, t) {
                    var r,
                      a = t === e.length - 1;
                    switch (n.type) {
                      case u.Text:
                        return (0,
                        p.jsx)(an, { className: "min-h-[20px]", message: n.message, isEditing: K, format: en, isCompletionInProgress: a && ew, onCreateEditNode: eP, clientThreadId: o, onUpdateNode: x, onDeleteNode: h, onChangeItemInView: l, onRequestCompletion: g, onExitEdit: eg, disabled: 0 !== y.size, onSandboxLinkClick: v, isCompletion: en, onRequestMoreCompletions: d, isResponseToPluginMessage: (null === (r = e[t - 1]) || void 0 === r ? void 0 : r.type) === u.Plugin }, n.message.nodeId);
                      case u.MultiText:
                        return (0,
                        p.jsx)(as, { messages: n.messages, isCompletionInProgress: a && ew, isCompletion: en, onRequestMoreCompletions: d }, t);
                      case u.SimpleBrowsing:
                        if (!ed.has("tools")) return null;
                        return (0,
                        p.jsx)(ag, { messages: n.messages }, n.messages[0].nodeId);
                      case u.Browsing:
                        if (!ed.has("tools")) return null;
                        return (0,
                        p.jsx)(tH, { messages: n.messages, isComplete: !a }, n.messages[0].nodeId);
                      case u.Code:
                        if (!ed.has("tools2")) return null;
                        var i = e[t + 1],
                          s =
                            i && i.type === u.CodeExecutionOutput
                              ? i.message
                              : void 0;
                        return (0,
                        p.jsx)(rF, { message: n.message, outputMessage: s }, n.message.nodeId);
                      case u.CodeExecutionOutput:
                        if (!ed.has("tools2")) return null;
                        return (0,
                        p.jsx)(tX, { message: n.message, isCollapsed: !1 }, n.message.nodeId);
                      case u.Plugin:
                        if (!ed.has("tools3")) return null;
                        return (0,
                        p.jsx)(au, { messages: n.messages }, n.messages[0].nodeId);
                      default:
                        return null;
                    }
                  })
                );
              },
              [A, K, en, ew, eP, o, x, h, l, g, eg, y.size, v, d, ed]
            ),
            eI =
              !I &&
              !G &&
              en &&
              !_ &&
              !K &&
              1 === ee &&
              i &&
              !eb &&
              !el &&
              2 === U.length &&
              Date.now() -
                (null !== (n = ei.message.create_time) && void 0 !== n
                  ? n
                  : 0) *
                  1e3 <
                6e5 &&
              !ew &&
              ed.has(M.st),
            eZ = (0, j.useRef)(Date.now()),
            eR = (0, j.useRef)(
              (null !== (t = ei.message.create_time) && void 0 !== t
                ? t
                : Date.now()) * 1e3
            ),
            eD = (0, j.useRef)(Date.now());
          (0, j.useEffect)(
            function () {
              ew || (eD.current = Date.now());
            },
            [ew]
          );
          var eL = (0, j.useCallback)(
              function (e) {
                if (eI) {
                  var n,
                    t,
                    r = P.tQ.getTree(o),
                    a = U[0] || "",
                    i = (null == r ? void 0 : r.getConversationTurns(a)) || [],
                    s = i[i.length - 1],
                    l = (null == s ? void 0 : s.messages) || [],
                    u = l[l.length - 1],
                    c =
                      (null == u
                        ? void 0
                        : null === (n = u.message) || void 0 === n
                        ? void 0
                        : n.id) || "",
                    d = U[1] || "",
                    h = (null == r ? void 0 : r.getConversationTurns(d)) || [],
                    m = h[h.length - 1],
                    g = (null == m ? void 0 : m.messages) || [],
                    p = g[g.length - 1];
                  b(
                    c,
                    (null == p
                      ? void 0
                      : null === (t = p.message) || void 0 === t
                      ? void 0
                      : t.id) || "",
                    e,
                    eZ.current,
                    eZ.current,
                    eR.current,
                    eD.current
                  ),
                    P.tQ.updateTree(o, function (n) {
                      n.updateNode(ei.nodeId, {
                        metadata: {
                          $set: (0, L._)(
                            (0, f._)({}, n.getMetadata(ei.nodeId)),
                            { inlineComparisonRating: e }
                          ),
                        },
                      });
                    }),
                    ey(e),
                    P.tQ.updateTree(o, function (e) {
                      e.updateNode(u.nodeId, {
                        metadata: {
                          $set: (0, L._)(
                            (0, f._)({}, e.getMetadata(u.nodeId)),
                            { inlineComparisonRating: "baseline" }
                          ),
                        },
                      });
                    });
                }
              },
              [eI, ei.nodeId, b, o, U]
            ),
            eF = (0, j.useCallback)(
              function () {
                P.tQ.updateTree(o, function (e) {
                  e.updateNode(ei.nodeId, {
                    metadata: {
                      $set: (0, L._)((0, f._)({}, e.getMetadata(ei.nodeId)), {
                        inlineComparisonRating: "skip",
                      }),
                    },
                  });
                }),
                  ey("skip");
              },
              [ei.nodeId, o]
            ),
            eA = en && !_ && !I,
            eE = !_ && !K,
            eq = !en && !_ && !I && 1 === A.length && !K;
          if (D.role === nA.uU.Unknown || D.role === nA.uU.System) return null;
          var eB =
              eE && (!er || U.length > 1)
                ? (0, p.jsx)(tN, {
                    currentPage: ee,
                    onChangeIndex: function (e) {
                      return l(U[e]);
                    },
                    length: U.length,
                    className: er
                      ? ""
                      : (0, O.Z)(
                          "self-center pt-2",
                          U.length > 1 ? "visible" : "!invisible"
                        ),
                  })
                : null,
            eO = eq
              ? (0, p.jsx)(aI, {
                  onClick: em,
                  className: (0, O.Z)(
                    !G && "md:invisible md:group-hover:visible"
                  ),
                  children: (0, p.jsx)(eo.ZP, { icon: J.vPQ }),
                })
              : null,
            eU = eA
              ? (0, p.jsx)(nc, {
                  onCopy: ep,
                  className:
                    "rounded-md p-1 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400",
                })
              : null,
            ez =
              eA && false
                ? (0, p.jsxs)("div", {
                    className: "flex gap-1",
                    children: [
                      "thumbsDown" !== el &&
                        !et &&
                        (0, p.jsx)(
                          aI,
                          {
                            onClick: function () {
                              return ex("thumbsUp");
                            },
                            disabled: "thumbsUp" === el,
                            className: (0, O.Z)(
                              "thumbsUp" === el &&
                                "!dark:text-gray-200 bg-gray-100 text-gray-700 dark:bg-gray-700"
                            ),
                            children: (0, p.jsx)(eo.ZP, { icon: J.fmn }),
                          },
                          "thumbsUp:".concat(ei.nodeId)
                        ),
                      "thumbsUp" !== el &&
                        !et &&
                        (0, p.jsx)(
                          aI,
                          {
                            onClick: function () {
                              return ex("thumbsDown");
                            },
                            disabled: "thumbsDown" === el,
                            className: (0, O.Z)(
                              "thumbsDown" === el &&
                                "!dark:text-gray-200 bg-gray-100 text-gray-700 dark:bg-gray-700"
                            ),
                            children: (0, p.jsx)(eo.ZP, { icon: J.oLd }),
                          },
                          "thumbsDown:".concat(ei.nodeId)
                        ),
                    ],
                  })
                : null,
            eH =
              eI && false
                ? (0, p.jsxs)(aD, {
                    children: [
                      (0, p.jsx)("div", {
                        className: (0, O.Z)("mr-4"),
                        children: "Was this response better or worse?",
                      }),
                      (0, p.jsxs)(aS, {
                        onClick: function () {
                          return eL("new");
                        },
                        title:
                          "This response was better than the previous response",
                        children: [
                          (0, p.jsx)(eo.ZP, {
                            icon: J.fmn,
                            className: (0, O.Z)("mr-1"),
                          }),
                          "Better",
                        ],
                      }),
                      (0, p.jsxs)(aS, {
                        onClick: function () {
                          return eL("original");
                        },
                        title:
                          "This response was worse than the previous response",
                        children: [
                          (0, p.jsx)(eo.ZP, {
                            icon: J.oLd,
                            className: (0, O.Z)("mr-1"),
                          }),
                          "Worse",
                        ],
                      }),
                      (0, p.jsxs)(aS, {
                        onClick: function () {
                          return eL("same");
                        },
                        title: "This response was the same in quality",
                        children: [
                          (0, p.jsx)(eo.ZP, {
                            icon: ty.Ny3,
                            className: (0, O.Z)(
                              "mr-1 rounded-full border border-gray-400 dark:border-gray-300"
                            ),
                          }),
                          "Same",
                        ],
                      }),
                      (0, p.jsx)(aS, {
                        onClick: eF,
                        title: "Skip this comparison",
                        children: (0, p.jsx)(eo.ZP, {
                          icon: J.q5L,
                          size: "medium",
                        }),
                      }),
                    ],
                  })
                : null;
          return (0, p.jsxs)(aT, {
            className: (0, O.Z)(
              "group",
              "w-full text-gray-800 dark:text-gray-100",
              er
                ? (0, O.Z)(
                    "sm:rounded-2xl",
                    en ? "my-2" : "bg-gray-50 dark:bg-gray-700"
                  )
                : (0, O.Z)(
                    !_ && "border-b border-black/10 dark:border-gray-900/50",
                    en ? "bg-gray-50 dark:bg-[#444654]" : "dark:bg-gray-800"
                  )
            ),
            ref: ea,
            children: [
              ek && (0, p.jsx)(aR, { children: ek }),
              (0, p.jsxs)(aN, {
                $isMessageRedesign: er,
                className: (0, O.Z)(_ ? "ml-5" : "m-auto"),
                children: [
                  (0, p.jsxs)(aP, {
                    $isMessageRedesign: er,
                    children: [
                      en
                        ? eN
                          ? (0, p.jsx)(e1, { plugin: eN, notice: eC || void 0 })
                          : (0, p.jsx)(e0, {
                              background:
                                ed.has("model_preview") && eh === r9.f_
                                  ? "black"
                                  : eM || "",
                              iconName: eT,
                              notice: eC || void 0,
                            })
                        : (0, p.jsx)(e5, {
                            user: null == W ? void 0 : W.user,
                            notice: eC || void 0,
                            size: er ? "redesign" : "medium",
                          }),
                      !er &&
                        eE &&
                        !G &&
                        (0, p.jsx)(tN, {
                          currentPage: ee,
                          onChangeIndex: function (e) {
                            return l(U[e]);
                          },
                          length: U.length,
                          className: (0, O.Z)(
                            "invisible absolute left-0 top-2 -ml-4 -translate-x-full group-hover:visible",
                            U.length > 1 ? "visible" : "!invisible"
                          ),
                        }),
                    ],
                  }),
                  (0, p.jsxs)("div", {
                    className: (0, O.Z)(
                      "relative flex flex-col",
                      er
                        ? "flex-grow overflow-hidden"
                        : "w-[calc(100%-50px)] gap-1 md:gap-3 lg:w-[calc(100%-115px)]"
                    ),
                    children: [
                      er &&
                        (0, p.jsx)("div", {
                          className: "mb-1 select-none text-xs text-gray-400",
                          children: en ? "ChatGPT" : "You",
                        }),
                      (0, p.jsx)(aM, { children: eS }),
                      er
                        ? (0, p.jsx)(p.Fragment, {
                            children:
                              eA &&
                              (0, p.jsxs)("div", {
                                className: "mt-2 flex flex-col gap-4",
                                children: [
                                  (0, p.jsxs)("div", {
                                    className: "flex gap-2 text-gray-400",
                                    children: [
                                      eB,
                                      ez,
                                      (0, p.jsx)("div", { className: "grow" }),
                                      eU,
                                    ],
                                  }),
                                  eH,
                                ],
                              }),
                          })
                        : (0, p.jsxs)(p.Fragment, {
                            children: [
                              eq &&
                                !G &&
                                (0, p.jsx)(aZ, {
                                  $hidden: 0 !== y.size,
                                  children: eO,
                                }),
                              (eA || eE) &&
                                (0, p.jsxs)("div", {
                                  className: "flex justify-between lg:block",
                                  children: [
                                    G && eB,
                                    eq &&
                                      G &&
                                      (0, p.jsx)(aZ, {
                                        $hidden: ew,
                                        children: eO,
                                      }),
                                    eA &&
                                      (0, p.jsxs)(aZ, {
                                        $hidden: ew,
                                        children: [eU, ez],
                                      }),
                                    eI && !et && eH,
                                  ],
                                }),
                            ],
                          }),
                    ],
                  }),
                  er && eq
                    ? (0, p.jsx)("div", {
                        className: "text-gray-400",
                        children: eO,
                      })
                    : null,
                ],
              }),
            ],
          });
        }),
        aT = w.Z.div(ap()),
        aM = w.Z.div(ax()),
        aN = w.Z.div(av(), function (e) {
          return (
            !e.$isMessageRedesign &&
            "text-base md:gap-6 md:max-w-2xl lg:max-w-xl xl:max-w-3xl md:py-6 lg:px-0"
          );
        }),
        aP = w.Z.div(ab(), function (e) {
          return !e.$isMessageRedesign && "w-[30px]";
        }),
        aS = w.Z.button(ay()),
        aI = w.Z.button(aj()),
        aZ = w.Z.div(aw(), function (e) {
          return e.$hidden ? "invisible" : "visible";
        }),
        aR = w.Z.div(aC()),
        aD = w.Z.div(ak());
      function aL() {
        var e = (0, g._)(["mb-2 mt-auto ml-auto mr-auto"]);
        return (
          (aL = function () {
            return e;
          }),
          e
        );
      }
      function aF() {
        var e = (0, g._)([
          "relative rounded-md border border-black/10 bg-gray-50 dark:border-gray-900/50 dark:bg-[#444654] flex flex-col overflow-hidden",
        ]);
        return (
          (aF = function () {
            return e;
          }),
          e
        );
      }
      function aA() {
        var e = (0, g._)(["mb-5 border dark:bg-gray-800 overflow-hidden"]);
        return (
          (aA = function () {
            return e;
          }),
          e
        );
      }
      function aE() {
        var e = (0, g._)([""]);
        return (
          (aE = function () {
            return e;
          }),
          e
        );
      }
      var aq = (0, Y.vU)({
        submitFeedback: {
          id: "feedbackModal.submitFeedback",
          defaultMessage: "Submit feedback",
          description: "Button text for submitting the feedback",
        },
        thumbsUpPlaceholder: {
          id: "feedbackModal.thumbsUpPlaceholder",
          defaultMessage: "What do you like about the response?",
          description:
            "Placeholder for textarea input when user chooses thumbs up",
        },
        thumbsDownPlaceholder: {
          id: "feedbackModal.thumbsDownPlaceholder",
          defaultMessage:
            "What was the issue with the response? How could it be improved?",
          description:
            "Placeholder for textarea input when user chooses thumbs down",
        },
        harmfulUnsafe: {
          id: "feedbackModal.harmfulUnsafe",
          defaultMessage: "This is harmful / unsafe",
          description: "Label for harmful/unsafe checkbox",
        },
        notTrue: {
          id: "feedbackModal.notTrue",
          defaultMessage: "This isn't true",
          description: "Label for not true checkbox",
        },
        notHelpful: {
          id: "feedbackModal.notHelpful",
          defaultMessage: "This isn't helpful",
          description: "Label for not helpful checkbox",
        },
        provideAdditionalFeedback: {
          id: "feedbackModal.provideAdditionalFeedback",
          defaultMessage: "Provide additional feedback",
          description: "Title for the critique feedback modal",
        },
        pickBestAnswer: {
          id: "feedbackModal.pickBestAnswer",
          defaultMessage: "Pick the best answer to improve the model",
          description: "Title for the compare feedback modal",
        },
        newAnswer: {
          id: "feedbackModal.newAnswer",
          defaultMessage: "New Answer",
          description: "Title for the new answer during comparison",
        },
        originalAnswer: {
          id: "feedbackModal.originalAnswer",
          defaultMessage: "Original Answer",
          description: "Title for the original answer during comparison",
        },
        newAnswerBetter: {
          id: "feedbackModal.newAnswerBetter",
          defaultMessage: "New answer is better",
          description: "Button text for choosing new answer during comparison",
        },
        originalAnswerBetter: {
          id: "feedbackModal.originalAnswerBetter",
          defaultMessage: "Original answer is better",
          description:
            "Button text for choosing original answer during comparison",
        },
        neitherAnswerBetter: {
          id: "feedbackModal.neitherAnswerBetter",
          defaultMessage: "Neither answer is better",
          description:
            "Button text for choosing neither answer during comparison",
        },
        skipStep: {
          id: "feedbackModal.skipStep",
          defaultMessage: "Skip this step",
          description: "Button text for skipping comparison step",
        },
        continueWithChosenAnswer: {
          id: "feedbackModal.continueWithChosenAnswer",
          defaultMessage:
            "The conversation will continue with the answer you choose.",
          description: "Information text for user during comparison",
        },
      });
      function aB(e) {
        var n,
          t,
          r,
          a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return (
          (null == e
            ? void 0
            : null === (n = e.messages) || void 0 === n
            ? void 0
            : n.length) === 1 &&
          !(null == e
            ? void 0
            : null === (t = e.messages) || void 0 === t
            ? void 0
            : t.some(function (e) {
                return "error" in e;
              })) &&
          (!a ||
            !(
              (null == e
                ? void 0
                : null === (r = e.messages) || void 0 === r
                ? void 0
                : r.length) === 1 &&
              nl.Cv.getTextFromMessage(
                null == e ? void 0 : e.messages[0].message
              ).length < 20
            ))
        );
      }
      function aO(e) {
        var n,
          t,
          r = e.ratingModalNodeId,
          a = e.ratingModalOpen,
          i = e.setRatingModalOpen,
          o = e.handleSubmitFeedback,
          s = e.onHandleChangeFeedbackComparisonRating,
          l = e.feedbackTextareaRef,
          u = e.clientThreadId,
          c = e.activeRequests,
          d = e.modelBackend,
          h = e.onChangeItemInView,
          g = e.onRequestMoreCompletions,
          x = e.onDeleteNode,
          v = e.onRequestCompletion,
          b = e.onUpdateNode,
          y = e.onSandboxLinkClick,
          w = (0, K.Z)(),
          _ = P.tQ.getTree(u),
          N = (0, P.XK)(u),
          S = (0, j.useRef)(0.5 > Math.random() ? "left" : "right"),
          I = null == _ ? void 0 : _.getConversationTurns(r || "root"),
          Z = I.length - 1,
          R = I[I.length - 1],
          D = (0, T.hz)().has(M.FZ),
          F = (0, m._)((0, j.useState)("critique"), 2),
          A = F[0],
          E = F[1],
          q = (0, B.lj)(),
          U = (0, T.hz)().has(M.Pt) && aB(R, !0) && !q,
          z = (0, C.WS)(),
          H = (0, j.useMemo)(
            function () {
              return {
                id: r || "root",
                threadId: P.tQ.getServerThreadId(u),
                rating: a,
                model: d,
              };
            },
            [r, u, a, d]
          ),
          V =
            null == I
              ? void 0
              : I[(null == I ? void 0 : I.length) - 1].variantIds,
          Q = null == V ? void 0 : V[(null == V ? void 0 : V.length) - 1],
          W = (t = (n = null == _ ? void 0 : _.getConversationTurns(Q))[
            n.length - 1
          ]).messages[t.messages.length - 1].nodeId,
          G = null == _ ? void 0 : _.getConversationTurns(W),
          Y = (0, j.useMemo)(
            function () {
              var e =
                null == G ? void 0 : G[(null == G ? void 0 : G.length) - 1];
              return "thumbsDown" === a && U && aB(e) && aB(R);
            },
            [a, U, G, R]
          ),
          ee = (0, j.useRef)(Date.now()),
          en = (0, j.useRef)(-1),
          et = (0, j.useRef)(Date.now()),
          er = (0, j.useRef)(Date.now());
        (0, j.useEffect)(
          function () {
            "compare" === A
              ? ((en.current = Date.now()), z(k.s6.displayedComparisonUIV0, H))
              : "critique" === A &&
                "thumbsDown" === a &&
                z(k.s6.displayedThumbsDownFeedbackForm, H);
          },
          [A]
        );
        var ea = I.length - 2,
          ei = G.length - 1,
          eo = G[G.length - 1],
          es = (0, j.useMemo)(
            function () {
              return eo && nl.Cv.getRequestIdFromConversationTurn(eo);
            },
            [eo]
          ),
          el = (0, j.useMemo)(
            function () {
              return c.has(es);
            },
            [c, es]
          );
        (0, j.useMemo)(
          function () {
            el || (er.current = Date.now());
          },
          [el]
        );
        var eu = R.messages,
          ec = eu[eu.length - 1],
          ed = ec.message.id,
          ef = ec.nodeId,
          eh = _.getLeafFromNode(ef),
          em = eo.messages,
          eg = em[em.length - 1],
          ep = eg.message.id,
          ex = eg.nodeId,
          ev = _.getLeafFromNode(ex),
          eb =
            "critique" === A
              ? w.formatMessage(aq.provideAdditionalFeedback)
              : w.formatMessage(aq.pickBestAnswer),
          ey = (0, j.useRef)([]),
          ej = (0, j.useRef)(""),
          ew = (0, j.useCallback)(
            function () {
              var e,
                n =
                  null === (e = l.current) || void 0 === e
                    ? void 0
                    : e.elements;
              (ey.current = (0, nP._)(n || [])
                .filter(function (e) {
                  return e.checked;
                })
                .map(function (e) {
                  return e.id;
                })
                .map(function (e) {
                  return e.replace("feedback-", "");
                })),
                (ej.current =
                  (null == n ? void 0 : n["feedback-other"].value) || ""),
                o(ej.current, ey.current),
                "thumbsDown" === a && z(k.s6.submitThumbsDownFeedbackForm, H),
                Y ? E("compare") : i(void 0);
            },
            [Y, z, H, l, o, a, i]
          ),
          eC =
            "critique" === A
              ? (0, p.jsx)(ni.mH, {
                  title: w.formatMessage(aq.submitFeedback),
                  onClick: ew,
                })
              : null,
          ek = "left" === S.current,
          e_ = ek ? "new" : "original",
          eT = ek ? "original" : "new",
          eM = ek
            ? w.formatMessage(aq.newAnswer)
            : w.formatMessage(aq.originalAnswer),
          eN = ek
            ? w.formatMessage(aq.originalAnswer)
            : w.formatMessage(aq.newAnswer),
          eP = ek
            ? w.formatMessage(aq.newAnswerBetter)
            : w.formatMessage(aq.originalAnswerBetter),
          eS = ek
            ? w.formatMessage(aq.originalAnswerBetter)
            : w.formatMessage(aq.newAnswerBetter),
          eI = (0, j.useCallback)(
            function (e) {
              var n = "left" === e ? e_ : "right" === e ? eT : "same";
              if (
                (z(
                  k.s6.submittedComparisonUIV0,
                  Object.assign({}, H, { choice: n })
                ),
                a)
              ) {
                var t = P.tQ.getTree(u),
                  r = t.getMetadata(ef);
                t.updateNode(ef, {
                  metadata: {
                    $set: (0, L._)((0, f._)({}, r), {
                      inlineComparisonRating: "baseline",
                    }),
                  },
                });
                var o = t.getMetadata(ex);
                t.updateNode(ex, {
                  metadata: {
                    $set: (0, L._)((0, f._)({}, o), {
                      inlineComparisonRating: n,
                    }),
                  },
                }),
                  s(
                    ed,
                    ep,
                    a,
                    n,
                    S.current,
                    ee.current,
                    en.current,
                    et.current,
                    er.current,
                    ej.current,
                    ey.current
                  );
              }
              P.tQ.setThreadCurrentLeafId(u, e === S.current ? ev.id : eh.id),
                i(void 0);
            },
            [e_, eT, z, H, a, u, ev.id, eh.id, i, ef, ex, s, ed, ep]
          ),
          eZ = !el && null != er.current && Y,
          eR = (0, j.useCallback)(
            function () {
              i(void 0),
                "critique" === A
                  ? z(k.s6.skippedThumbsDownFeedbackForm, Object.assign({}, H))
                  : "compare" === A &&
                    z(k.s6.skippedComparisonUIV0, Object.assign({}, H));
            },
            [i, z, H, A]
          );
        return (0, p.jsxs)(
          ni.ZP,
          {
            isOpen: !0,
            onModalClose: eR,
            closeButton: (0, p.jsx)(ni.ol, { onClose: eR }),
            type:
              "critique" === A
                ? "thumbsUp" === a
                  ? "success"
                  : "danger"
                : "success",
            icon:
              "critique" === A ? ("thumbsUp" === a ? J.fmn : J.oLd) : void 0,
            title: eb,
            primaryButton: eC,
            size: "larger",
            children: [
              "critique" === A &&
                (0, p.jsxs)("form", {
                  ref: l,
                  children: [
                    (0, p.jsx)(tv.ZP, {
                      id: "feedback-other",
                      placeholder:
                        "thumbsUp" === a
                          ? w.formatMessage(aq.thumbsUpPlaceholder)
                          : w.formatMessage(aq.thumbsDownPlaceholder),
                      rows: 3,
                      className:
                        "mb-1 mt-4 w-full rounded-md dark:bg-gray-800 dark:focus:border-white dark:focus:ring-white",
                    }),
                    "thumbsDown" === a &&
                      (0, p.jsxs)("div", {
                        className: "mb-4",
                        children: [
                          (0, p.jsx)(tb, {
                            id: "feedback-harmful",
                            label: w.formatMessage(aq.harmfulUnsafe),
                          }),
                          (0, p.jsx)(tb, {
                            id: "feedback-false",
                            label: w.formatMessage(aq.notTrue),
                          }),
                          (0, p.jsx)(tb, {
                            id: "feedback-not-helpful",
                            label: w.formatMessage(aq.notHelpful),
                          }),
                        ],
                      }),
                  ],
                }),
              "compare" === A &&
                G &&
                void 0 !== N &&
                (0, p.jsxs)("div", {
                  className: (0, O.Z)("w-full"),
                  children: [
                    (0, p.jsx)("p", {
                      className: (0, O.Z)("mb-7 mt-3"),
                      children: (0, p.jsx)(
                        X.Z,
                        (0, f._)({}, aq.continueWithChosenAnswer)
                      ),
                    }),
                    (0, p.jsx)(aH, {
                      className: D ? "rounded-2xl" : "rounded-md",
                      children: (0, p.jsx)(aV, {
                        children: (0, p.jsx)(a_, {
                          modelBackend: d,
                          turnIndex: ea,
                          isFinalTurn: !1,
                          clientThreadId: u,
                          onChangeItemInView: h,
                          onChangeRating: $(),
                          onRequestMoreCompletions: g,
                          onDeleteNode: x,
                          onRequestCompletion: v,
                          onUpdateNode: b,
                          onSandboxLinkClick: y,
                          activeRequests: c,
                          showInlineEmbeddedDisplay: !0,
                          onHandleChangeVariantFeedbackInlineComparisonRating:
                            $(),
                        }),
                      }),
                    }),
                    (0, p.jsxs)("div", {
                      className: (0, O.Z)(),
                      children: [
                        (0, p.jsxs)("div", {
                          className: (0, O.Z)(
                            "mb-2 grid w-full grid-cols-2 gap-5"
                          ),
                          children: [
                            (0, p.jsx)("div", {
                              children: (0, p.jsx)("p", {
                                className: (0, O.Z)("font-semibold"),
                                children: eM,
                              }),
                            }),
                            (0, p.jsx)("div", {
                              children: (0, p.jsx)("p", {
                                className: (0, O.Z)("font-semibold"),
                                children: eN,
                              }),
                            }),
                          ],
                        }),
                        (0, p.jsxs)("div", {
                          className: (0, O.Z)(
                            "mb-5 grid w-full grid-cols-2 gap-5"
                          ),
                          children: [
                            (0, p.jsxs)(az, {
                              children: [
                                (0, p.jsx)(aV, {
                                  children: (0, p.jsx)(a_, {
                                    modelBackend: d,
                                    turnIndex: ek ? ei : Z,
                                    turnLeafId: ek ? ex : ef,
                                    isFinalTurn: !0,
                                    clientThreadId: u,
                                    onChangeItemInView: h,
                                    onChangeRating: $(),
                                    onDeleteNode: x,
                                    onRequestMoreCompletions: g,
                                    onRequestCompletion: v,
                                    onUpdateNode: b,
                                    onSandboxLinkClick: y,
                                    activeRequests: c,
                                    showInlineEmbeddedDisplay: !0,
                                    onHandleChangeVariantFeedbackInlineComparisonRating:
                                      $(),
                                  }),
                                }),
                                (0, p.jsx)(aU, {
                                  children: (0, p.jsx)(ni.mH, {
                                    disabled: !eZ,
                                    title: eP,
                                    onClick: function () {
                                      return eI("left");
                                    },
                                    color: "dark",
                                  }),
                                }),
                              ],
                            }),
                            (0, p.jsxs)(az, {
                              children: [
                                (0, p.jsx)(aV, {
                                  children: (0, p.jsx)(a_, {
                                    modelBackend: d,
                                    turnIndex: ek ? Z : ei,
                                    turnLeafId: ek ? ef : ex,
                                    isFinalTurn: !0,
                                    clientThreadId: u,
                                    onChangeItemInView: h,
                                    onChangeRating: $(),
                                    onDeleteNode: x,
                                    onRequestMoreCompletions: g,
                                    onRequestCompletion: v,
                                    onUpdateNode: b,
                                    onSandboxLinkClick: y,
                                    activeRequests: c,
                                    showInlineEmbeddedDisplay: !0,
                                    onHandleChangeVariantFeedbackInlineComparisonRating:
                                      $(),
                                  }),
                                }),
                                (0, p.jsx)(aU, {
                                  children: (0, p.jsx)(ni.mH, {
                                    disabled: !eZ,
                                    title: eS,
                                    onClick: function () {
                                      return eI("right");
                                    },
                                    color: "dark",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, p.jsx)("div", {
                          className: (0, O.Z)("grid w-full"),
                          children: (0, p.jsxs)("div", {
                            className: (0, O.Z)("mb-2 text-right"),
                            children: [
                              (0, p.jsx)(ni.mH, {
                                disabled: !eZ,
                                title: w.formatMessage(aq.neitherAnswerBetter),
                                color: "primary",
                                onClick: function () {
                                  return eI("same");
                                },
                                className: (0, O.Z)("mr-2"),
                              }),
                              (0, p.jsx)(ni.mH, {
                                title: w.formatMessage(aq.skipStep),
                                onClick: function () {
                                  return i(void 0);
                                },
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
            ],
          },
          "RatingModal-".concat(r)
        );
      }
      var aU = w.Z.div(aL()),
        az = w.Z.div(aF()),
        aH = w.Z.div(aA()),
        aV = w.Z.div(aE()),
        aQ = t(70060),
        aW = t.n(aQ);
      function aG() {
        var e = (0, g._)([
          "\nflex flex-col w-full py-2 flex-grow md:py-3 md:pl-4 relative border border-black/10 bg-white dark:border-gray-900/50 dark:text-white dark:bg-gray-700 rounded-md shadow-[0_0_10px_rgba(0,0,0,0.10)] dark:shadow-[0_0_15px_rgba(0,0,0,0.10)]\n",
          "\n",
          "\n",
        ]);
        return (
          (aG = function () {
            return e;
          }),
          e
        );
      }
      function a$() {
        var e = (0, g._)([
          "\nabsolute p-1 rounded-md text-gray-500 bottom-1.5 md:bottom-2.5  hover:bg-gray-100 enabled:dark:hover:text-gray-400 dark:hover:bg-gray-900 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent\n",
          " ",
          "",
        ]);
        return (
          (a$ = function () {
            return e;
          }),
          e
        );
      }
      function aJ() {
        var e = (0, g._)([
          "",
          " flex ml-1 md:w-full md:m-auto md:mb-2 gap-0 md:gap-2 justify-center",
        ]);
        return (
          (aJ = function () {
            return e;
          }),
          e
        );
      }
      var aY = aW()(Promise.resolve().then(t.bind(t, 22208)), {
          loadableGenerated: {
            webpack: function () {
              return [22208];
            },
          },
          ssr: !1,
        }),
        aK = (0, Y.vU)({
          errorGeneratingResponse: {
            id: "PromptTextarea.errorGeneratingResponse",
            defaultMessage: "There was an error generating a response",
            description:
              "Error message shown when the response generation fails",
          },
          regenerateResponse: {
            id: "PromptTextarea.regenerateResponse",
            defaultMessage: "重新生成回复",
            description: "Button label for regenerating response",
          },
          continueGenerating: {
            id: "PromptTextarea.continueGenerating",
            defaultMessage: "继续生成",
            description: "Button label for continuing response generation",
          },
          stopGenerating: {
            id: "PromptTextarea.stopGenerating",
            defaultMessage: "停止生成",
            description: "Button label for stopping response generation",
          },
          placeholder: {
            id: "PromptTextarea.placeholder",
            defaultMessage: "来说点什么吧... (Shift + Enter = 换行)",
            description: "Placeholder text for the input field",
          },
          suggestionTooltip: {
            id: "PromptTextarea.suggestionTooltip",
            defaultMessage: "Click to send",
            description: "Tooltip for the suggestion button",
          },
        });
      function aX(e) {
        var n,
          t = e.onAbortCompletion,
          r = e.onCreateNewCompletion,
          a = e.onRequestMoreCompletions,
          i = e.onContinueGenerating,
          o = e.onFileUpload,
          s = e.canUpload,
          l = e.modelBackend,
          u = e.clientThreadId,
          c = e.isCompletionInProgress,
          d = e.className,
          h = e.placeholder,
          m = e.currentPrompt,
          g = e.onChangeCurrentPrompt,
          x = e.clearOnSubmit,
          v = void 0 === x || x,
          b = e.disabled,
          y = void 0 !== b && b,
          w = e.shouldRetry,
          _ = e.canPause,
          N = void 0 !== _ && _,
          S = e.canContinue,
          I = void 0 !== S && S,
          Z = e.suggestions,
          R = (0, K.Z)(),
          D = (0, P.oq)(u),
          L = (0, P.Hk)(u),
          F = (0, B.lj)(),
          A = (0, C.WS)(),
          E = (0, j.useContext)(q.gt).serviceStatus,
          U = (0, j.useContext)(q.QL).historyDisabled,
          z = (0, j.useRef)(null),
          H = (0, j.useCallback)(
            function (e) {
              g(e.currentTarget.value);
            },
            [g]
          ),
          V = (0, j.useCallback)(
            function (e, n) {
              if ((null == e || e.preventDefault(), !y)) {
                var t,
                  a,
                  i =
                    null === (t = z.current) || void 0 === t ? void 0 : t.value,
                  o = "".concat(
                    null === (a = z.current) || void 0 === a
                      ? void 0
                      : a.dataset.id,
                    "-nextPrompt"
                  );
                i &&
                  (r(
                    o,
                    { value: i || "" },
                    { eventSource: e ? "mouse" : "keyboard" },
                    { suggestions: Z }
                  ),
                  v && g(""),
                  (0, tv.SI)(1, z.current),
                  void 0 !== Z &&
                    (void 0 !== n
                      ? tj.m.logEvent("chatgpt_prompt_use_suggestion", i, {
                          index: "".concat(n),
                        })
                      : tj.m.logEvent("chatgpt_prompt_ignore_suggestions")));
              }
            },
            [v, y, r, g, Z]
          ),
          Q = (0, j.useCallback)(
            function () {
              t("", L), a(D, { eventSource: "mouse" });
            },
            [D, L, t, a]
          ),
          W = (0, j.useCallback)(
            function () {
              t("", L),
                A(k.s6.pauseCompletion, {
                  threadId: P.tQ.getServerThreadId(u),
                  eventSource: "mouse",
                });
            },
            [L, u, A, t]
          ),
          G = (0, j.useMemo)(
            function () {
              return {
                Enter: {
                  validator: function () {
                    return !y;
                  },
                  handler: function (e) {
                    (!e.metaKey &&
                      (F || e.shiftKey || e.nativeEvent.isComposing)) ||
                      (e.preventDefault(), c || V());
                  },
                },
                Escape: {
                  validator: function () {
                    return N && c;
                  },
                  handler: function () {
                    t("", L),
                      A(k.s6.pauseCompletion, {
                        threadId: P.tQ.getServerThreadId(u),
                        eventSource: "keyboard",
                      });
                  },
                },
              };
            },
            [y, F, c, V, N, t, L, A, u]
          ),
          $ = (0, j.useCallback)(
            function (e) {
              var n;
              (null === (n = G[e.key]) || void 0 === n
                ? void 0
                : n.validator(e)) && G[e.key].handler(e);
            },
            [G]
          );
        (0, j.useEffect)(function () {
          var e;
          null === (e = z.current) || void 0 === e || e.focus();
        }, []);
        var Y = "root" !== D && !c && !(null == E ? void 0 : E.oof),
          ee = null === (n = z.current) || void 0 === n ? void 0 : n.value,
          en = (0, j.useCallback)(
            function () {
              i(D);
            },
            [D, i]
          ),
          et = (0, T.hz)().has(M.uj),
          er = (0, j.useMemo)(
            function () {
              return (0, p.jsxs)("div", {
                className: w ? "w-full" : "",
                children: [
                  w &&
                    (0, p.jsx)("div", {
                      className: "mb-3 text-center text-xs",
                      children: (0, p.jsx)(
                        X.Z,
                        (0, f._)({}, aK.errorGeneratingResponse)
                      ),
                    }),
                  (0, p.jsxs)(a4, {
                    $shouldRetry: w,
                    children: [
                      !w &&
                        et &&
                        (0, p.jsx)(a1, {
                          suggestions: Z,
                          shouldRetry: w,
                          currentInputRef: z,
                          onChangeCurrentPrompt: g,
                          handleCreateNewCompletion: V,
                        }),
                      Y &&
                        (0, p.jsxs)(ei.z, {
                          as: "button",
                          color: w ? "primary" : "neutral",
                          onClick: Q,
                          className: (0, O.Z)(
                            w ? "m-auto" : "border-0 md:border"
                          ),
                          children: [
                            (0, p.jsx)(eo.ZP, {
                              icon: J.Qxo,
                              size: F ? "small" : "xsmall",
                              className: "flex-shrink-0",
                            }),
                            (!F || w) &&
                              (0, p.jsx)(
                                X.Z,
                                (0, f._)({}, aK.regenerateResponse)
                              ),
                          ],
                        }),
                      I &&
                        (0, p.jsxs)(ei.z, {
                          as: "button",
                          color: "neutral",
                          onClick: en,
                          className: "border-0 md:border",
                          children: [
                            (0, p.jsx)(eo.ZP, {
                              icon: J.lV_,
                              className: "-rotate-180",
                              size: F ? "small" : "xsmall",
                            }),
                            !F &&
                              (0, p.jsx)(
                                X.Z,
                                (0, f._)({}, aK.continueGenerating)
                              ),
                          ],
                        }),
                      N &&
                        c &&
                        (0, p.jsxs)(ei.z, {
                          as: "button",
                          color: "neutral",
                          onClick: W,
                          className: "border-0 md:border",
                          children: [
                            (0, p.jsx)(eo.ZP, {
                              icon: J.jxP,
                              size: F ? "small" : "xsmall",
                            }),
                            !F &&
                              (0, p.jsx)(X.Z, (0, f._)({}, aK.stopGenerating)),
                          ],
                        }),
                    ],
                  }),
                ],
              });
            },
            [I, N, Y, et, W, V, g, Q, en, c, F, w, Z]
          );
        return (0, p.jsx)("form", {
          className: d,
          onSubmit: V,
          children: (0, p.jsxs)("div", {
            className: "relative flex h-full flex-1 items-stretch md:flex-col",
            children: [
              !F && er,
              !w &&
                (0, p.jsxs)(a2, {
                  $disabled: w,
                  $historyDisabled: U,
                  children: [
                    (0, p.jsx)(tv.ZP, {
                      tabIndex: 0,
                      value: m,
                      "data-id": D,
                      ref: z,
                      style: { maxHeight: "200px" },
                      rows: 1,
                      onKeyDown: $,
                      onChange: H,
                      placeholder: h || R.formatMessage(aK.placeholder),
                      className: (0, O.Z)(
                        "m-0 w-full resize-none border-0 bg-transparent p-0 pr-7 focus:ring-0 focus-visible:ring-0 dark:bg-transparent",
                        s ? "pl-8 md:pl-5" : "pl-2 md:pl-0"
                      ),
                      disabled: w,
                    }),
                    s &&
                      (0, p.jsx)(aY, {
                        clientThreadId: u,
                        onFileUpload: o,
                        currentLeafId: D,
                        modelBackend: l,
                        disabled: c,
                      }),
                    (0, p.jsx)(a3, {
                      disabled: c || w || !ee || y,
                      $onRightSide: !0,
                      $nudgeBottom: c,
                      className: c ? "" : "disabled:opacity-40",
                      children: c
                        ? (0, p.jsx)("div", {
                            className: "text-2xl",
                            children: (0, p.jsx)(a0, {}),
                          })
                        : (0, p.jsx)(eo.ZP, {
                            icon: J.LbG,
                            size: "small",
                            className: "mr-1",
                          }),
                    }),
                  ],
                }),
              F && er,
            ],
          }),
        });
      }
      function a0() {
        var e = (0, m._)((0, j.useState)(0), 2),
          n = e[0],
          t = e[1];
        (0, j.useEffect)(function () {
          var e = setInterval(function () {
            t(function (e) {
              return (e + 1) % 3;
            });
          }, 350);
          return function () {
            return clearInterval(e);
          };
        }, []);
        for (var r = [], a = 0; a < 3; a++)
          r.push(
            (0, p.jsx)(
              "span",
              { className: a <= n ? "" : "invisible", children: "\xb7" },
              a
            )
          );
        return (0, p.jsx)(p.Fragment, { children: r });
      }
      function a1(e) {
        var n = e.suggestions,
          t = e.shouldRetry,
          r = e.currentInputRef,
          a = e.onChangeCurrentPrompt,
          i = e.handleCreateNewCompletion,
          o = (0, K.Z)(),
          s = (0, j.useCallback)(
            function (e, n) {
              null !== r.current && (a(e), (r.current.value = e), i(void 0, n));
            },
            [r, i, a]
          );
        return (
          (0, j.useEffect)(
            function () {
              void 0 !== n && tj.m.logEvent("chatgpt_prompt_show_suggestions");
            },
            [n]
          ),
          (0, p.jsx)("div", {
            className:
              "absolute -left-2 bottom-full mb-4 flex max-w-[100vw] grow gap-2 overflow-auto px-2 md:static md:mb-0 md:max-w-none md:overflow-visible md:px-0",
            children:
              t || void 0 === n
                ? null
                : n.slice(0, 2).map(function (e, n) {
                    return (0, p.jsxs)(
                      ei.z,
                      {
                        as: "button",
                        color: "neutral",
                        onClick: function () {
                          return s(e, n);
                        },
                        className:
                          "group overflow-hidden whitespace-nowrap text-left md:whitespace-normal",
                        children: [
                          e,
                          (0, p.jsx)("div", {
                            className:
                              "absolute bottom-0 right-0 top-0 flex items-center bg-gradient-to-l from-gray-100 from-[60%] pl-6 pr-2 text-gray-700 opacity-0 group-hover:opacity-100 dark:from-gray-700 dark:text-gray-200",
                            children: (0, p.jsx)(nh.u, {
                              label: o.formatMessage(aK.suggestionTooltip),
                              side: "top",
                              children: (0, p.jsx)(eo.ZP, {
                                icon: J.LbG,
                                size: "small",
                              }),
                            }),
                          }),
                        ],
                      },
                      n
                    );
                  }),
          })
        );
      }
      var a2 = w.Z.div(
          aG(),
          function (e) {
            return e.$historyDisabled
              ? "bg-gray-900 text-white shadow-[0_0_15px_rgba(0,0,0,0.10)] dark:bg-gray-900 dark:text-white dark:shadow-[0_0_15px_rgba(0,0,0,0.10)]"
              : "";
          },
          function (e) {
            return e.$disabled && "bg-gray-100";
          }
        ),
        a3 = w.Z.button(
          a$(),
          function (e) {
            return e.$nudgeBottom && "disabled:bottom-0.5 md:disabled:bottom-1";
          },
          function (e) {
            return e.$onRightSide ? "right-1 md:right-2" : "left-1 md:left-2";
          }
        ),
        a4 = w.Z.div(aJ(), function (e) {
          return e.$shouldRetry ? "" : "h-full";
        }),
        a5 = t(97703),
        a6 = (0, j.createContext)(),
        a7 = function (e) {
          return (0, S.oR)((0, j.useContext)(a6), e);
        },
        a8 = t(1215);
      function a9() {
        var e = (0, g._)([
          "bg-yellow-200 text-yellow-900 py-0.5 px-1.5 text-xs md:text-sm rounded-md uppercase",
        ]);
        return (
          (a9 = function () {
            return e;
          }),
          e
        );
      }
      var ie = w.Z.span(a9()),
        it = t(42530),
        ir = t(57526),
        ia = t(99581),
        ii = t(30892),
        io = t.n(ii),
        is = t(7361),
        il = t.n(is);
      function iu(e) {
        var n = e.values,
          t = e.className,
          r = Object.keys(n),
          a = Object.values(n);
        return (0, p.jsxs)("div", {
          className: (0, O.Z)("flex w-full items-stretch gap-2", t),
          children: [
            (0, p.jsx)("div", {
              className:
                "flex w-1/2 flex-col justify-between gap-1 text-sm text-gray-600 dark:text-gray-300",
              children: r.map(function (e, n) {
                return (0, p.jsx)("span", { children: io()(e) }, n);
              }),
            }),
            (0, p.jsx)("div", {
              className: "my-1.5 flex flex-1 flex-col justify-between gap-2",
              children: a.map(function (e, n) {
                var t = (0, m._)(e, 2),
                  r = t[0],
                  a = t[1];
                return (0, p.jsx)(ic, { num: r, max: a }, n);
              }),
            }),
          ],
        });
      }
      function ic(e) {
        var n = e.num,
          t = e.max,
          r = (0, j.useMemo)(
            function () {
              var e = il()(Array(t), !1);
              return il()(e, !0, 0, n);
            },
            [t, n]
          );
        return (0, p.jsx)("div", {
          className: "flex w-full gap-1",
          children: r.map(function (e, n) {
            return (0,
            p.jsx)("div", { className: (0, O.Z)("h-2 w-full rounded-lg", e ? "bg-green-600" : "bg-gray-200 dark:bg-gray-600"), children: e }, n);
          }),
        });
      }
      function id() {
        var e = (0, g._)([
          "rounded bg-white ring-1 ring-black/10 dark:bg-gray-800 dark:ring-white/20",
        ]);
        return (
          (id = function () {
            return e;
          }),
          e
        );
      }
      function ih() {
        var e = (0, g._)([
          "absolute z-[17] mt-2 flex max-h-60 w-full flex-col overflow-hidden text-base focus:outline-none dark:last:border-0 sm:text-xs md:w-[100%]",
        ]);
        return (
          (ih = function () {
            return e;
          }),
          e
        );
      }
      function im() {
        var e = (0, g._)([
          "absolute z-[17] -ml-[1px] flex flex-col gap-2 p-3 sm:p-4",
        ]);
        return (
          (im = function () {
            return e;
          }),
          e
        );
      }
      function ig() {
        var e = (0, g._)(["flex items-center gap-1.5 truncate"]);
        return (
          (ig = function () {
            return e;
          }),
          e
        );
      }
      function ip() {
        var e = (0, g._)(["h-6 w-6 shrink-0"]);
        return (
          (ip = function () {
            return e;
          }),
          e
        );
      }
      function ix() {
        var e = (0, g._)([
          "absolute inset-y-0 right-0 flex items-center pr-3 text-gray-800 dark:text-gray-100",
        ]);
        return (
          (ix = function () {
            return e;
          }),
          e
        );
      }
      var iv = ["confidential", "alpha", "plus"];
      function ib(e) {
        var n = e.selectedOption,
          t = e.onChange,
          r = e.onAction,
          a = e.onOpen,
          i = e.onClose,
          o = e.dropdownRef,
          s = (0, h._)(e, [
            "selectedOption",
            "onChange",
            "onAction",
            "onOpen",
            "onClose",
            "dropdownRef",
          ]),
          l = (0, j.useCallback)(
            function (e) {
              "string" == typeof e ? null == r || r(e) : t(e);
            },
            [t, r]
          );
        return (0, p.jsx)(it.R, {
          value: n.value,
          onChange: l,
          children: function (e) {
            var t = e.open;
            return (0, p.jsx)(
              ij,
              (0, f._)(
                {
                  ref: o,
                  selectedLabel: (0, p.jsxs)(p.Fragment, {
                    children: [
                      n.title,
                      n.tags.map(function (e) {
                        return iM(e);
                      }),
                      n.customTags,
                    ],
                  }),
                  open: t,
                  onOpen: a,
                  onClose: i,
                },
                s
              )
            );
          },
        });
      }
      function iy(e) {
        var n = e.selectedOptions,
          t = e.selectedLabel,
          r = e.onChange,
          a = e.onAction,
          i = e.onOpen,
          o = e.onClose,
          s = e.dropdownRef,
          l = (0, h._)(e, [
            "selectedOptions",
            "selectedLabel",
            "onChange",
            "onAction",
            "onOpen",
            "onClose",
            "dropdownRef",
          ]),
          u = (0, j.useCallback)(
            function (e) {
              if (
                e.some(function (e) {
                  return "string" == typeof e;
                })
              ) {
                var n = e.find(function (e) {
                  return "string" == typeof e;
                });
                null == a || a(n);
              } else r(e);
            },
            [r, a]
          );
        return (0, p.jsx)(it.R, {
          value: n.map(function (e) {
            return e.value;
          }),
          multiple: !0,
          onChange: u,
          children: function (e) {
            var r = e.open;
            return (0, p.jsx)(
              ij,
              (0, f._)(
                {
                  ref: s,
                  selectedLabel: t || "".concat(n.length, " selected"),
                  open: r,
                  onOpen: i,
                  onClose: o,
                  multiple: !0,
                },
                l
              )
            );
          },
        });
      }
      var ij = (0, j.forwardRef)(function (e, n) {
        var t = e.name,
          r = e.selectedLabel,
          a = e.open,
          i = e.options,
          o = e.actions,
          s = e.multiple,
          l = e.isLoading,
          u = e.loadingState,
          c = e.header,
          d = e.onOpen,
          f = e.onClose,
          h = (0, j.useRef)(null),
          m = (0, j.useRef)(null),
          g = (0, B.dD)();
        (0, j.useImperativeHandle)(
          n,
          function () {
            return {
              open: function () {
                if (!a) {
                  var e;
                  null === (e = h.current) || void 0 === e || e.click();
                }
              },
              close: function () {
                if (a) {
                  var e;
                  null === (e = h.current) || void 0 === e || e.click();
                }
              },
            };
          },
          [a]
        );
        var x = l
          ? u ||
            (0, p.jsx)("div", {
              className: "flex h-[42px] items-center justify-center",
              children: (0, p.jsx)(es.Z, {}),
            })
          : (0, p.jsxs)(p.Fragment, {
              children: [
                c,
                (0, p.jsxs)(it.R.Options, {
                  className: "overflow-auto",
                  children: [
                    i.map(function (e, n) {
                      return (0, p.jsx)(
                        iw,
                        {
                          value: e.value,
                          disabled: e.disabled,
                          children: function (n) {
                            var t = n.selected,
                              r = n.active;
                            return (0, p.jsxs)(p.Fragment, {
                              children: [
                                (0, p.jsxs)(iZ, {
                                  children: [
                                    e.imageUrl &&
                                      (0, p.jsx)(iR, {
                                        children: (0, p.jsx)(eW, {
                                          url: e.imageUrl,
                                          name: e.title,
                                          size: "100%",
                                        }),
                                      }),
                                    (0, p.jsxs)("span", {
                                      className: (0, O.Z)(
                                        t && !s && "font-semibold",
                                        "flex h-6 items-center gap-1 text-gray-800 dark:text-gray-100"
                                      ),
                                      children: [
                                        e.title,
                                        e.tags.map(function (e) {
                                          return iM(e);
                                        }),
                                        e.customTags,
                                      ],
                                    }),
                                  ],
                                }),
                                s && !e.disabled
                                  ? (0, p.jsx)(ik, { selected: t })
                                  : t && (0, p.jsx)(iC, { icon: J.UgA }),
                                e.disabled &&
                                  (0, p.jsx)(iC, {
                                    icon: ir.Z,
                                    className: "text-red-700 dark:text-red-500",
                                  }),
                                r &&
                                  !g &&
                                  (0, ia.createPortal)(
                                    (0, p.jsx)(iT, {
                                      option: e,
                                      dropdownRef: m,
                                    }),
                                    document.body
                                  ),
                              ],
                            });
                          },
                        },
                        n
                      );
                    }),
                    null == o
                      ? void 0
                      : o.map(function (e, n) {
                          return (0, p.jsx)(
                            iw,
                            {
                              value: e.id,
                              children: function () {
                                return (0, p.jsxs)(p.Fragment, {
                                  children: [
                                    (0, p.jsx)("div", {
                                      className:
                                        "text-gray-800 dark:text-gray-100",
                                      children: e.label,
                                    }),
                                    (0, p.jsx)(iC, { icon: e.icon }),
                                  ],
                                });
                              },
                            },
                            n
                          );
                        }),
                  ],
                }),
              ],
            });
        return (0,
        p.jsxs)("div", { className: "relative w-full md:w-1/2 lg:w-1/3 xl:w-1/4", children: [(0, p.jsxs)(it.R.Button, { ref: h, onClick: a ? f : d, className: "relative flex w-full cursor-default flex-col rounded-md border border-black/10 bg-white py-2 pl-3 pr-10 text-left focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600 dark:border-white/20 dark:bg-gray-800 sm:text-sm", children: [(0, p.jsx)(it.R.Label, { className: "block text-xs text-gray-700 dark:text-gray-500", children: t }), (0, p.jsx)("span", { className: "inline-flex w-full truncate", children: (0, p.jsx)("span", { className: "flex h-6 items-center gap-1 truncate", children: r }) }), (0, p.jsx)("span", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2", children: (0, p.jsx)(eo.ZP, { icon: J.bTu, className: " text-gray-400", "aria-hidden": "true" }) })] }), (0, p.jsx)(eB.u, { show: a, as: j.Fragment, leave: "transition ease-in duration-100", leaveFrom: "opacity-100", leaveTo: "opacity-0", children: (0, p.jsx)(iP, { ref: m, children: x }) })] });
      });
      function iw(e) {
        var n = e.value,
          t = e.disabled,
          r = e.children;
        return (0, p.jsx)(it.R.Option, {
          className: function (e) {
            var n = e.active;
            return (0, O.Z)(
              iI,
              n && !t ? "bg-gray-100 dark:bg-gray-700" : "text-gray-900",
              t &&
                "cursor-auto bg-gray-50 text-gray-400 dark:bg-gray-700 dark:text-gray-100"
            );
          },
          value: n,
          children: r,
        });
      }
      function iC(e) {
        var n = e.icon,
          t = e.className;
        return (0, p.jsx)(iD, {
          children: (0, p.jsx)(eo.ZP, {
            icon: n,
            className: (0, O.Z)("h-5 w-5", t),
            "aria-hidden": "true",
          }),
        });
      }
      function ik(e) {
        var n = e.selected,
          t = e.disabled;
        return (0, p.jsx)(iD, {
          children: (0, p.jsx)("div", {
            className: (0, O.Z)(
              "flex h-6 w-6 items-center justify-center rounded-full border transition-colors",
              n
                ? "border-transparent bg-green-600 text-white"
                : "border-black/5 dark:border-white/20"
            ),
            "aria-hidden": "true",
            children: (0, p.jsx)(eo.ZP, {
              icon: J.UgA,
              className: (0, O.Z)(
                "h-3 w-3 transition-opacity",
                n && "opacity-100",
                !n && "opacity-0",
                !n && !t && "group-hover:opacity-50"
              ),
              strokeWidth: n ? 2.5 : 2,
            }),
          }),
        });
      }
      function i_(e) {
        var n = e.showCheckbox;
        return (0, p.jsxs)("div", {
          className: (0, O.Z)(iI, "cursor-auto"),
          children: [
            (0, p.jsxs)(iZ, {
              children: [
                (0, p.jsx)(iR, {
                  children: (0, p.jsx)("div", {
                    className: "h-full w-full rounded-sm bg-gray-200",
                  }),
                }),
                (0, p.jsx)("div", {
                  className: "h-[12px] w-[88px] rounded-sm bg-gray-100",
                }),
              ],
            }),
            n && (0, p.jsx)(ik, { selected: !1, disabled: !0 }),
          ],
        });
      }
      function iT(e) {
        var n = e.option,
          t = e.dropdownRef,
          r = (0, m._)((0, j.useState)(), 2),
          a = r[0],
          i = r[1];
        (0, j.useEffect)(
          function () {
            var e = function () {
              if (t.current) {
                var e = t.current.getBoundingClientRect();
                i({ top: e.top, left: e.left - 260, minHeight: e.height });
              }
            };
            return (
              e(),
              window.addEventListener("resize", e),
              function () {
                return window.removeEventListener("resize", e);
              }
            );
          },
          [t]
        );
        var o = n.value.properties,
          s = (0, j.useMemo)(
            function () {
              return o
                ? (0, p.jsx)(iu, { values: o, className: "mt-auto" })
                : null;
            },
            [o]
          );
        return a
          ? (0, p.jsxs)(iS, {
              style: {
                width: 260,
                minHeight: a.minHeight,
                top: a.top,
                left: a.left,
              },
              children: [
                n.disabled &&
                  (0, p.jsx)(eo.ZP, {
                    icon: ir.Z,
                    size: "medium",
                    className: "text-red-700 dark:text-red-500",
                  }),
                n.imageUrl &&
                  (0, p.jsx)(eW, { url: n.imageUrl, name: n.title, size: 70 }),
                (0, p.jsxs)("div", {
                  className: "flex items-center gap-1",
                  children: [
                    n.title,
                    " ",
                    n.tags.map(function (e) {
                      return iM(e);
                    }),
                    " ",
                    n.customTags,
                  ],
                }),
                (0, p.jsx)("div", {
                  className: "whitespace-pre-line text-xs",
                  children: n.description,
                }),
                !n.disabled && s,
              ],
            })
          : null;
      }
      var iM = function (e) {
          return (
            iv.includes(e) &&
            (0, p.jsx)(
              "span",
              {
                className: (0, O.Z)(
                  "py-0.25 rounded px-1 text-[10px] font-semibold uppercase",
                  "confidential" === e && "bg-red-200 text-red-800",
                  "alpha" === e && "bg-blue-200 text-[#4559A4]",
                  "plus" === e && "bg-yellow-200 text-yellow-900"
                ),
                children: e,
              },
              e
            )
          );
        },
        iN = w.Z.div(id()),
        iP = (0, w.Z)(iN)(ih()),
        iS = (0, w.Z)(iN)(im()),
        iI =
          "group relative flex h-[42px] cursor-pointer select-none items-center overflow-hidden border-b border-black/10 pl-3 pr-9 last:border-0 dark:border-white/20",
        iZ = w.Z.span(ig()),
        iR = w.Z.span(ip()),
        iD = w.Z.span(ix()),
        iL = t(20485);
      function iF() {
        var e = (0, g._)(["mt-4 flex flex-col gap-4"]);
        return (
          (iF = function () {
            return e;
          }),
          e
        );
      }
      function iA() {
        var e = (0, g._)(["text-sm text-red-500"]);
        return (
          (iA = function () {
            return e;
          }),
          e
        );
      }
      var iE = w.Z.div(iF()),
        iq = w.Z.div(iA());
      function iB(e) {
        var n = e.onClickInstall,
          t = e.onInstallLocalhost,
          r = e.onClose,
          a = (0, m._)((0, j.useState)(), 2),
          i = a[0],
          o = a[1],
          s = (0, m._)((0, j.useState)(), 2),
          l = s[0],
          u = s[1],
          c = (0, m._)((0, j.useState)(!1), 2),
          d = c[0],
          f = c[1],
          h = (0, j.useCallback)(function (e) {
            o(e);
          }, []),
          g = (0, j.useCallback)(function () {
            f(!0);
          }, []);
        return d && (null == i ? void 0 : i.scrapeManifestResponse.plugin)
          ? (0, p.jsx)(iV, {
              plugin: null == i ? void 0 : i.scrapeManifestResponse.plugin,
              onClickInstall: n,
              onClose: r,
            })
          : l && (null == i ? void 0 : i.scrapeManifestResponse.plugin)
          ? (0, p.jsx)(iH, {
              plugin: i.scrapeManifestResponse.plugin,
              manifestAccessToken: i.manifestAccessToken,
              verificationTokens: l,
              onReadyToInstall: g,
              onClose: r,
            })
          : i
          ? (0, p.jsx)(iz, {
              loadManifestResult: i,
              onRefetch: h,
              onSubmitAuthInfo: u,
              onReadyToInstall: g,
              onInstallLocalhost: t,
              onClose: r,
            })
          : (0, p.jsx)(iO, { onFetch: h, onClose: r });
      }
      function iO(e) {
        var n = e.onFetch,
          t = e.onClose,
          r = (0, m._)((0, j.useState)(!1), 2),
          a = r[0],
          i = r[1],
          o = (0, m._)((0, j.useState)("bearer"), 2),
          s = o[0],
          l = o[1],
          u = (0, m._)((0, j.useState)(), 2),
          c = u[0],
          d = u[1],
          f = (0, j.useRef)(null),
          h = (0, j.useRef)(null),
          g = iQ(),
          x = g.fetchManifestAndSpec,
          v = g.isLoading,
          b = (0, T.hz)();
        (0, j.useEffect)(function () {
          var e;
          null === (e = f.current) || void 0 === e || e.focus();
        }, []);
        var y = (0, j.useCallback)(function () {
            i(function (e) {
              return !e;
            });
          }, []),
          w = (0, j.useCallback)(function (e) {
            l(e.target.value);
          }, []),
          C = (0, j.useCallback)(
            (0, e8._)(function () {
              var e, t, r;
              return (0, e9.Jh)(this, function (i) {
                return (r =
                  null === (e = f.current) || void 0 === e ? void 0 : e.value)
                  ? (x({
                      domain: r,
                      manifestAccessToken: a
                        ? {
                            authorization_type: s,
                            token:
                              (null === (t = h.current) || void 0 === t
                                ? void 0
                                : t.value) || "",
                          }
                        : void 0,
                      onSuccess: n,
                      onError: function (e) {
                        return d(
                          (null == e ? void 0 : e.message) ||
                            "Couldn't find manifest."
                        );
                      },
                    }),
                    [2])
                  : (d("Please provide a domain."), [2]);
              });
            }),
            [x, n, s, a]
          );
        return (0, p.jsx)(ni.ZP, {
          isOpen: !0,
          onModalClose: t,
          type: "success",
          title: "Enter your website domain",
          primaryButton: (0, p.jsx)(ni.mH, {
            title: "Find manifest file",
            color: "primary",
            onClick: C,
            loading: v,
          }),
          secondaryButton: (0, p.jsx)(ni.mH, {
            title: "Cancel",
            color: "neutral",
            onClick: t,
          }),
          children: (0, p.jsxs)(iE, {
            children: [
              (0, p.jsxs)("div", {
                children: [
                  "To create a plugin, host",
                  " ",
                  (0, p.jsx)("a", {
                    target: "_blank",
                    rel: "noreferrer",
                    className: "text-green-600",
                    href: "https://platform.openai.com/docs/plugins/getting-started",
                    children: "a manifest file",
                  }),
                  " ",
                  "on your website at",
                  " ",
                  (0, p.jsx)("code", {
                    className: "text-sm",
                    children: "/.well-known/ai-plugin.json",
                  }),
                  ". Then enter your website domain below.",
                  " ",
                  (0, p.jsx)("a", {
                    href: "https://platform.openai.com/docs/plugins/getting-started",
                    target: "_blank",
                    rel: "noreferrer",
                    className: "text-green-600",
                    children: "Visit our documentation to learn more.",
                  }),
                ],
              }),
              (0, p.jsx)(nr, {
                ref: f,
                name: "url",
                displayName: "Domain",
                placeholder: "ex: openai.com or localhost:3000",
                onPressEnter: C,
                autoFocus: !0,
              }),
              b.has("tools3_admin") &&
                (0, p.jsxs)(p.Fragment, {
                  children: [
                    (0, p.jsxs)("div", {
                      role: "button",
                      className:
                        "flex cursor-pointer items-center gap-1 text-sm text-black/60 hover:text-black/70",
                      onClick: y,
                      children: [
                        (0, p.jsx)("div", {
                          children: "My file requires authentication",
                        }),
                        (0, p.jsx)(eo.ZP, { icon: a ? J.rH8 : J.bTu }),
                      ],
                    }),
                    a &&
                      (0, p.jsxs)(p.Fragment, {
                        children: [
                          (0, p.jsxs)("div", {
                            className: "flex flex-col gap-2 text-sm",
                            children: [
                              (0, p.jsx)("div", {
                                children: "Authentication type",
                              }),
                              (0, p.jsxs)("div", {
                                className: "flex gap-6",
                                children: [
                                  (0, p.jsx)(iU, {
                                    label: "Bearer",
                                    value: "bearer",
                                    checked: "bearer" === s,
                                    onChange: w,
                                  }),
                                  (0, p.jsx)(iU, {
                                    label: "Basic",
                                    value: "basic",
                                    checked: "basic" === s,
                                    onChange: w,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, p.jsxs)("div", {
                            className: "flex flex-col gap-2 text-sm",
                            children: [
                              (0, p.jsx)("div", { children: "Access token" }),
                              (0, p.jsx)(nr, {
                                ref: h,
                                name: "manifestToken",
                                onPressEnter: C,
                              }),
                            ],
                          }),
                        ],
                      }),
                  ],
                }),
              c && (0, p.jsx)(iq, { children: c }),
            ],
          }),
        });
      }
      function iU(e) {
        var n = e.label,
          t = e.value,
          r = e.checked,
          a = e.onChange;
        return (0, p.jsxs)("label", {
          className: "flex items-center gap-2",
          children: [
            (0, p.jsx)("input", {
              name: "manifestAuthType",
              type: "radio",
              value: t,
              checked: r,
              onChange: a,
              className: "text-green-600 focus:ring-green-600",
            }),
            n,
          ],
        });
      }
      function iz(e) {
        var n = e.loadManifestResult,
          t = e.onRefetch,
          r = e.onSubmitAuthInfo,
          a = e.onReadyToInstall,
          i = e.onInstallLocalhost,
          o = e.onClose,
          s = n.domain,
          l = n.manifestAccessToken,
          u = n.scrapeManifestResponse,
          c = n.apiValidationInfo,
          d = u.plugin,
          f = u.manifest_validation_info,
          h = (0, m._)((0, j.useState)(), 2),
          g = h[0],
          v = h[1],
          b = (0, m._)((0, j.useState)(!1), 2),
          y = b[0],
          w = b[1],
          C = (0, j.useRef)(null),
          k = (0, j.useRef)(null),
          T = (0, j.useRef)(null),
          M = iQ(),
          N = M.fetchManifestAndSpec,
          P = M.isLoading,
          S = (0, x.NL)(),
          I = d && nB(d),
          Z = (null == d ? void 0 : d.manifest.auth.type) === "service_http",
          R = (null == d ? void 0 : d.manifest.auth.type) === "oauth",
          D =
            (f.errors && f.errors.length > 0) ||
            ((null == c ? void 0 : c.errors) &&
              (null == c ? void 0 : c.errors.length) > 0),
          L = (0, j.useCallback)(
            (0, e8._)(function () {
              var e, n, u, c, f;
              return (0, e9.Jh)(this, function (h) {
                switch (h.label) {
                  case 0:
                    if (!D) return [3, 1];
                    return (
                      N({
                        domain: s,
                        manifestAccessToken: l,
                        onSuccess: t,
                        onError: function (e) {
                          return v(
                            (null == e ? void 0 : e.message) ||
                              "Couldn't find manifest."
                          );
                        },
                      }),
                      [3, 15]
                    );
                  case 1:
                    if (!I) return [3, 2];
                    return nZ(d, S, ["installedAip"]), i(d), [3, 15];
                  case 2:
                    if (!Z) return [3, 8];
                    if (
                      !(null === (e = C.current) || void 0 === e
                        ? void 0
                        : e.value)
                    )
                      return (
                        v("Please provide your service access token."), [2]
                      );
                    h.label = 3;
                  case 3:
                    return (
                      h.trys.push([3, 5, 6, 7]),
                      w(!0),
                      [
                        4,
                        _.ZP.setPluginServiceHttpToken({
                          id: d.id,
                          serviceAccessToken: C.current.value,
                        }),
                      ]
                    );
                  case 4:
                    return r(h.sent().verification_tokens), [3, 7];
                  case 5:
                    return h.sent(), v("Error setting access token."), [3, 7];
                  case 6:
                    return w(!1), [7];
                  case 7:
                    return [3, 15];
                  case 8:
                    if (!R) return [3, 14];
                    if (
                      ((c =
                        null === (n = k.current) || void 0 === n
                          ? void 0
                          : n.value),
                      (f =
                        null === (u = T.current) || void 0 === u
                          ? void 0
                          : u.value),
                      !c || !f)
                    )
                      return v("Please provide your OAuth credentials."), [2];
                    h.label = 9;
                  case 9:
                    return (
                      h.trys.push([9, 11, 12, 13]),
                      [
                        4,
                        _.ZP.setPluginOAuthClientCredentials({
                          id: d.id,
                          clientId: k.current.value,
                          clientSecret: T.current.value,
                        }),
                      ]
                    );
                  case 10:
                    return r(h.sent().verification_tokens), [3, 13];
                  case 11:
                    return (
                      h.sent(), v("Error setting OAuth credentials."), [3, 13]
                    );
                  case 12:
                    return w(!1), [7];
                  case 13:
                    return [3, 15];
                  case 14:
                    d ? a(d) : o(), (h.label = 15);
                  case 15:
                    return [2];
                }
              });
            }),
            [Z, R, d, s, l, D, I, S, N, t, r, a, i, o]
          );
        return (0, p.jsx)(ni.ZP, {
          isOpen: !0,
          onModalClose: o,
          type: "success",
          title: "Found plugin",
          primaryButton: (0, p.jsx)(ni.mH, {
            title: D
              ? "Refetch manifest"
              : I
              ? "Install localhost plugin"
              : "Next",
            color: "primary",
            onClick: L,
            loading: y || P,
          }),
          secondaryButton:
            (D || Z || R) &&
            (0, p.jsx)(ni.mH, {
              title: "Cancel",
              color: "neutral",
              onClick: o,
            }),
          children: (0, p.jsxs)(iE, {
            children: [
              (0, p.jsx)(nk, { manifestValidationInfo: f }),
              c && (0, p.jsx)(n_, { apiValidationInfo: c }),
              d && (0, p.jsx)(nC, { plugin: d }),
              Z &&
                !D &&
                (0, p.jsxs)("div", {
                  children: [
                    (0, p.jsx)("div", {
                      className: "text-sm",
                      children: "Enter your service access token:",
                    }),
                    (0, p.jsx)("div", {
                      className: "mt-2",
                      children: (0, p.jsx)(nr, {
                        ref: C,
                        name: "serviceToken",
                        placeholder: "Service access token",
                        autoComplete: "off",
                        onPressEnter: L,
                        autoFocus: !0,
                      }),
                    }),
                  ],
                }),
              R &&
                !D &&
                (0, p.jsxs)("div", {
                  children: [
                    (0, p.jsx)("div", {
                      className: "text-sm",
                      children: "Enter your OAuth credentials:",
                    }),
                    (0, p.jsx)("div", {
                      className: "mt-2",
                      children: (0, p.jsx)(nr, {
                        ref: k,
                        name: "clientId",
                        placeholder: "Client ID",
                        autoComplete: "off",
                        onPressEnter: L,
                        autoFocus: !0,
                      }),
                    }),
                    (0, p.jsx)("div", {
                      className: "mt-2",
                      children: (0, p.jsx)(nr, {
                        ref: T,
                        type: "password",
                        name: "clientSecret",
                        placeholder: "Client secret",
                        autoComplete: "off",
                        onPressEnter: L,
                      }),
                    }),
                  ],
                }),
              g && (0, p.jsx)(iq, { children: g }),
            ],
          }),
        });
      }
      function iH(e) {
        var n = e.plugin,
          t = e.manifestAccessToken,
          r = e.verificationTokens,
          a = e.onReadyToInstall,
          i = e.onClose,
          o = (0, m._)((0, j.useState)(), 2),
          s = o[0],
          l = o[1],
          u = (0, m._)((0, j.useState)(!1), 2),
          c = u[0],
          d = u[1],
          f = (0, j.useCallback)(
            (0, e8._)(function () {
              var e, i;
              return (0, e9.Jh)(this, function (o) {
                switch (o.label) {
                  case 0:
                    return (
                      o.trys.push([0, 2, 3, 4]),
                      d(!0),
                      [
                        4,
                        _.ZP.scrapePluginManifest({
                          domain: n.domain,
                          manifestAccessToken: t,
                        }),
                      ]
                    );
                  case 1:
                    if ((e = o.sent().plugin)) {
                      for (var s in ((i =
                        "service_http" === e.manifest.auth.type ||
                        "oauth" === e.manifest.auth.type
                          ? e.manifest.auth.verification_tokens
                          : {}),
                      r))
                        if (r[s] !== i[s])
                          return (
                            l(
                              'Please add the "'.concat(
                                s,
                                '" token to your manifest file.'
                              )
                            ),
                            [2]
                          );
                      a(e);
                    } else l("Error creating plugin.");
                    return [3, 4];
                  case 2:
                    return o.sent(), l("Error creating plugin."), [3, 4];
                  case 3:
                    return d(!1), [7];
                  case 4:
                    return [2];
                }
              });
            }),
            [n, t, r, a]
          );
        return (0, p.jsx)(ni.ZP, {
          isOpen: !0,
          onModalClose: i,
          type: "success",
          title: "Add verification token",
          primaryButton: (0, p.jsx)(ni.mH, {
            title: "Verify tokens",
            color: "primary",
            onClick: f,
            loading: c,
          }),
          secondaryButton: (0, p.jsx)(ni.mH, {
            title: "I'll add the tokens later",
            color: "neutral",
            onClick: i,
          }),
          children: (0, p.jsxs)(iE, {
            children: [
              (0, p.jsx)(nC, { plugin: n }),
              (0, p.jsx)("div", {
                className: "text-sm",
                children:
                  "Add the following verification tokens to your manifest file:",
              }),
              (0, p.jsx)("pre", {
                className: "text-sm",
                children: JSON.stringify(r, null),
              }),
              s && (0, p.jsx)(iq, { children: s }),
            ],
          }),
        });
      }
      function iV(e) {
        var n = e.plugin,
          t = e.onClickInstall,
          r = e.onClose,
          a = (0, j.useCallback)(
            function () {
              t(n);
            },
            [n, t]
          );
        return (0, p.jsx)(ni.ZP, {
          isOpen: !0,
          onModalClose: r,
          type: "success",
          title: "Ready to install",
          primaryButton: (0, p.jsx)(ni.mH, {
            title: "Install for me",
            color: "primary",
            onClick: a,
          }),
          secondaryButton: (0, p.jsx)(ni.mH, {
            title: "Install later",
            color: "neutral",
            onClick: r,
          }),
          children: (0, p.jsx)(iE, {
            children: (0, p.jsxs)("div", {
              className: "text-sm",
              children: [
                "Your plugin can now be installed! Up to 15 developers will be able install your plugin until it is verified by OpenAI. To learn more,",
                " ",
                (0, p.jsx)("a", {
                  href: "https://platform.openai.com/docs/plugins/production/can-i-invite-people-to-try-my-plugin",
                  target: "_blank",
                  rel: "noreferrer",
                  className: "text-green-600",
                  children: "see our FAQ",
                }),
                ".",
              ],
            }),
          }),
        });
      }
      function iQ() {
        var e,
          n = (0, m._)((0, j.useState)(!1), 2),
          t = n[0],
          r = n[1];
        return {
          fetchManifestAndSpec: (0, j.useCallback)(
            ((e = (0, e8._)(function (e) {
              var n, t, a, i, o, s, l, u, c;
              return (0, e9.Jh)(this, function (d) {
                switch (d.label) {
                  case 0:
                    (n = e.domain),
                      (t = e.manifestAccessToken),
                      (a = e.onSuccess),
                      (i = e.onError),
                      (o = nO(n)),
                      (d.label = 1);
                  case 1:
                    if ((d.trys.push([1, 10, 11, 12]), r(!0), !o))
                      return [3, 3];
                    return [4, nU(o)];
                  case 2:
                    if (void 0 === (s = d.sent())) return [2];
                    return (
                      a({
                        domain: o,
                        scrapeManifestResponse: {
                          plugin: s.plugin,
                          manifest_validation_info: s.manifest_validation_info,
                        },
                        apiValidationInfo: s.api_validation_info,
                      }),
                      [3, 9]
                    );
                  case 3:
                    return [
                      4,
                      _.ZP.scrapePluginManifest({
                        domain: n,
                        manifestAccessToken: t,
                      }),
                    ];
                  case 4:
                    if (!(l = d.sent()).plugin) return [3, 8];
                    d.label = 5;
                  case 5:
                    return (
                      d.trys.push([5, 7, , 8]),
                      [4, _.ZP.getPluginApi({ id: l.plugin.id })]
                    );
                  case 6:
                    return (u = d.sent().api_validation_info), [3, 8];
                  case 7:
                    return d.sent(), [3, 8];
                  case 8:
                    a({
                      domain: n,
                      scrapeManifestResponse: l,
                      apiValidationInfo: u,
                      manifestAccessToken: t,
                    }),
                      (d.label = 9);
                  case 9:
                    return [3, 12];
                  case 10:
                    return (c = d.sent()), i(o ? c : void 0), [3, 12];
                  case 11:
                    return r(!1), [7];
                  case 12:
                    return [2];
                }
              });
            })),
            function (n) {
              return e.apply(this, arguments);
            }),
            []
          ),
          isLoading: t,
        };
      }
      var iW = t(5759);
      function iG(e) {
        var n = e.onConfirm,
          t = e.onClose;
        return (0, p.jsx)(ni.ZP, {
          isOpen: !0,
          onModalClose: t,
          type: "success",
          title: "Unverified plugin",
          primaryButton: (0, p.jsx)(ni.mH, {
            title: "Continue",
            color: "primary",
            onClick: n,
          }),
          secondaryButton: (0, p.jsx)(ni.mH, {
            title: "Cancel",
            color: "neutral",
            onClick: t,
          }),
          children: (0, p.jsx)(iE, {
            children: (0, p.jsx)(iW.I, {
              children: (0, p.jsx)(iW.Z, {
                icon: "\uD83D\uDEA8",
                children:
                  "OpenAI hasn't vetted this plugin. This plugin may pose risks to your information. Be sure you trust this plugin before proceeding.",
              }),
            }),
          }),
        });
      }
      function i$(e) {
        var n = e.plugin,
          t = e.onInstall,
          r = e.onClose,
          a = (0, m._)((0, j.useState)(!1), 2),
          i = a[0],
          o = a[1],
          s = (0, m._)((0, j.useState)(n), 2),
          l = s[0],
          u = s[1],
          c = (0, j.useCallback)(function () {
            o(!0);
          }, []);
        return l
          ? i
            ? (0, p.jsx)(iY, { plugin: l, onInstall: t, onClose: r })
            : (0, p.jsx)(iG, { onConfirm: c, onClose: r })
          : (0, p.jsx)(iJ, { onLoad: u, onClose: r });
      }
      function iJ(e) {
        var n = e.onLoad,
          t = e.onClose,
          r = (0, j.useRef)(null),
          a = (0, m._)((0, j.useState)(!1), 2),
          i = a[0],
          o = a[1],
          s = (0, m._)((0, j.useState)(), 2),
          l = s[0],
          u = s[1];
        (0, j.useEffect)(function () {
          setTimeout(function () {
            var e;
            null === (e = r.current) || void 0 === e || e.focus();
          }, 50);
        }, []);
        var c = (0, j.useCallback)(
          (0, e8._)(function () {
            var e, t, a;
            return (0, e9.Jh)(this, function (i) {
              switch (i.label) {
                case 0:
                  if (
                    !(t =
                      null === (e = r.current) || void 0 === e
                        ? void 0
                        : e.value)
                  )
                    return u("Please provide a URL."), [2];
                  if (nO(t))
                    return (
                      u(
                        'To add a localhost plugin, please go to "Develop your own plugin."'
                      ),
                      [2]
                    );
                  i.label = 1;
                case 1:
                  return (
                    i.trys.push([1, 3, 4, 5]),
                    o(!0),
                    [4, _.ZP.getPluginByDomain({ domain: t })]
                  );
                case 2:
                  return (
                    (a = i.sent()) ? n(a) : u("That plugin doesn't exist."),
                    [3, 5]
                  );
                case 3:
                  return i.sent(), u("Couldn't find plugin."), [3, 5];
                case 4:
                  return o(!1), [7];
                case 5:
                  return [2];
              }
            });
          }),
          [n, o, u]
        );
        return (0, p.jsx)(ni.ZP, {
          isOpen: !0,
          onModalClose: t,
          type: "success",
          title: "Install an unverified plugin",
          primaryButton: (0, p.jsx)(ni.mH, {
            title: "Find plugin",
            color: "primary",
            onClick: c,
            loading: i,
          }),
          secondaryButton: (0, p.jsx)(ni.mH, {
            title: "Cancel",
            color: "neutral",
            onClick: t,
          }),
          children: (0, p.jsxs)(iE, {
            children: [
              (0, p.jsx)("div", {
                children:
                  "Please provide the website domain of the unverified plugin you'd like to install.",
              }),
              (0, p.jsx)(nr, {
                ref: r,
                name: "url",
                placeholder: "openai.com",
                onPressEnter: c,
              }),
              l && (0, p.jsx)(iq, { children: l }),
            ],
          }),
        });
      }
      function iY(e) {
        var n = e.plugin,
          t = e.onInstall,
          r = e.onClose,
          a = (0, m._)((0, j.useState)(), 2),
          i = a[0],
          o = a[1],
          s = (0, m._)((0, j.useState)(!1), 2),
          l = s[0],
          u = s[1],
          c = (0, j.useRef)(null),
          d = nI({
            onSuccess: function (e) {
              t(e), r();
            },
            onError: function (e) {
              o("Couldn't install plugin.");
            },
          }),
          f = n.manifest.name_for_human,
          h = "user_http" === n.manifest.auth.type,
          g = "oauth" === n.manifest.auth.type,
          x = (0, j.useCallback)(
            (0, e8._)(function () {
              var e, t;
              return (0, e9.Jh)(this, function (r) {
                switch (r.label) {
                  case 0:
                    if (!g) return [3, 1];
                    return (
                      (e = nD(n))
                        ? (window.location.href = e)
                        : o("Missing plugin configuration for ".concat(f, ".")),
                      [3, 8]
                    );
                  case 1:
                    if (!h) return [3, 7];
                    if (
                      !(null === (t = c.current) || void 0 === t
                        ? void 0
                        : t.value)
                    )
                      return o("Please provide your credentials."), [2];
                    r.label = 2;
                  case 2:
                    return (
                      r.trys.push([2, 4, 5, 6]),
                      u(!0),
                      [
                        4,
                        _.ZP.setPluginUserHttpToken({
                          id: n.id,
                          userAccessToken: c.current.value,
                        }),
                      ]
                    );
                  case 3:
                    return r.sent(), d(n.id), [3, 6];
                  case 4:
                    return r.sent(), o("Couldn't install plugin."), [3, 6];
                  case 5:
                    return u(!1), [7];
                  case 6:
                    return [3, 8];
                  case 7:
                    try {
                      u(!0), d(n.id);
                    } catch (e) {
                      o("Couldn't install plugin.");
                    } finally {
                      u(!1);
                    }
                    r.label = 8;
                  case 8:
                    return [2];
                }
              });
            }),
            [n, f, g, h, d]
          );
        return (0, p.jsx)(ni.ZP, {
          isOpen: !0,
          onModalClose: r,
          type: "success",
          title: "Unverified plugin",
          primaryButton: (0, p.jsx)(ni.mH, {
            title: g ? "Log in with ".concat(f) : "Install plugin",
            color: "primary",
            onClick: x,
            loading: l,
          }),
          secondaryButton: (0, p.jsx)(ni.mH, {
            title: "Cancel",
            color: "neutral",
            onClick: r,
          }),
          children: (0, p.jsxs)(iE, {
            children: [
              (0, p.jsx)(nC, { plugin: n }),
              h &&
                (0, p.jsxs)("div", {
                  children: [
                    (0, p.jsx)("div", {
                      className: "text-sm",
                      children:
                        n.manifest.auth.instructions ||
                        "Enter your HTTP access token below:",
                    }),
                    (0, p.jsx)("div", {
                      className: "mt-2",
                      children: (0, p.jsx)(nr, {
                        ref: c,
                        type: "password",
                        name: "token",
                        placeholder: "Enter your credentials",
                        autoComplete: "off",
                        onPressEnter: x,
                      }),
                    }),
                  ],
                }),
              g &&
                (0, p.jsxs)("div", {
                  children: [
                    "You will be redirected to",
                    " ",
                    (0, p.jsx)("span", {
                      className: "font-medium",
                      children: f,
                    }),
                    " to log in.",
                  ],
                }),
              i && (0, p.jsx)(iq, { children: i }),
            ],
          }),
        });
      }
      function iK() {
        var e = (0, g._)(["flex items-center gap-2 text-xs"]);
        return (
          (iK = function () {
            return e;
          }),
          e
        );
      }
      function iX(e) {
        var n = e.onClose,
          t = (0, T.hz)(),
          r = (0, r3.Z)().installedPlugins;
        if (!t.has("tools3_admin")) return null;
        var a = r.map(function (e) {
          return (0, p.jsx)(i0, { plugin: e }, e.id);
        });
        return (0, p.jsx)(ni.ZP, {
          isOpen: !0,
          onModalClose: n,
          type: "success",
          title: "Plugins admin",
          primaryButton: (0, p.jsx)(ni.mH, {
            title: "Done",
            color: "primary",
            onClick: n,
          }),
          children: (0, p.jsx)(iE, { children: a }),
        });
      }
      function i0(e) {
        var n = e.plugin,
          t = (0, m._)((0, j.useState)(!1), 2),
          r = t[0],
          a = t[1],
          i = (0, x.NL)(),
          o = (0, nS.D)(_.ZP.scrapePluginManifest.bind(_.ZP), {
            onSuccess: function (e) {
              var n = e.plugin,
                t = e.manifest_validation_info;
              if (!n) {
                console.log("Error refreshing manifest:", t),
                  alert(
                    "Failed to refresh manifest. See console for detailed errors."
                  );
                return;
              }
              i.setQueryData(["allAip"], function (e) {
                var t = (0, nP._)((null == e ? void 0 : e.items) || []),
                  r = t.findIndex(function (e) {
                    return e.id === n.id;
                  });
                return -1 !== r && (t[r] = n), { count: t.length, items: t };
              });
            },
            onError: function (e) {
              console.error(e);
            },
          }).mutate,
          s = (0, nS.D)(_.ZP.deletePlugin.bind(_.ZP), {
            onSuccess: function () {
              i.setQueryData(["allAip"], function (e) {
                var t = (0, nP._)((null == e ? void 0 : e.items) || []),
                  r = t.findIndex(function (e) {
                    return e.id === n.id;
                  });
                return (
                  -1 !== r && t.splice(r, 1), { count: t.length, items: t }
                );
              });
            },
            onError: function (e) {
              console.error(e);
            },
          }).mutate,
          l = (0, j.useCallback)(
            function () {
              a(!r);
            },
            [r]
          ),
          u = (0, j.useCallback)(
            function () {
              window.confirm(
                "Are you sure you want to refresh ".concat(
                  n.manifest.name_for_human,
                  "'s manifest?"
                )
              ) && o({ domain: n.domain });
            },
            [n, o]
          ),
          c = (0, j.useCallback)(
            function () {
              window.confirm(
                "Are you sure you want to delete the ".concat(
                  n.manifest.name_for_human,
                  " plugin?"
                )
              ) && s({ id: n.id });
            },
            [n, s]
          );
        return (0, p.jsxs)("div", {
          children: [
            (0, p.jsxs)("div", {
              className: "flex items-center justify-between",
              children: [
                (0, p.jsxs)(i2, {
                  children: [
                    (0, p.jsx)("div", {
                      children: (0, p.jsx)(eW, {
                        url: n.manifest.logo_url,
                        name: n.manifest.name_for_human,
                        size: 24,
                      }),
                    }),
                    (0, p.jsxs)("div", {
                      children: [
                        (0, p.jsx)("div", {
                          children: n.manifest.name_for_human,
                        }),
                        (0, p.jsx)("div", {
                          className: "text-gray-500",
                          children: n.domain,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, p.jsxs)(i2, {
                  children: [
                    (0, p.jsx)(i1, { icon: J.Qxo, onClick: u }),
                    (0, p.jsx)(i1, { icon: J.Ybf, onClick: c }),
                    (0, p.jsx)(i1, { icon: r ? J.rH8 : J.bTu, onClick: l }),
                  ],
                }),
              ],
            }),
            r &&
              (0, p.jsx)("pre", {
                className: "mt-1 overflow-x-auto text-[10px]",
                children: JSON.stringify(n, null, 2),
              }),
          ],
        });
      }
      function i1(e) {
        var n = e.icon,
          t = e.onClick;
        return (0, p.jsx)("div", {
          role: "button",
          className: "cursor-pointer text-gray-500 hover:text-gray-700",
          onClick: t,
          children: (0, p.jsx)(eo.ZP, { icon: n }),
        });
      }
      var i2 = w.Z.div(iK()),
        i3 = t(95552),
        i4 = t.n(i3),
        i5 = t(87762);
      function i6(e) {
        var n = e.onClose,
          t = nn().setupMfa;
        return (0, p.jsx)(ni.ZP, {
          isOpen: !0,
          onModalClose: n,
          type: "success",
          title: "Enable two-factor authentication",
          primaryButton: (0, p.jsx)(ni.mH, {
            title: "Enable two-factor authentication",
            color: "primary",
            onClick: t,
          }),
          secondaryButton: (0, p.jsx)(ni.mH, {
            title: "Cancel",
            color: "neutral",
            onClick: n,
          }),
          children: (0, p.jsx)(iE, {
            children: (0, p.jsx)(iW.I, {
              children: (0, p.jsx)(iW.Z, {
                icon: "\uD83D\uDEA8",
                children:
                  "This plugin requires you to have two-factor authentication enabled for additional security. Please set up two-factor authentication and try again.",
              }),
            }),
          }),
        });
      }
      function i7() {
        var e = (0, g._)(["text-sm text-black/70 dark:text-white/70 ", ""]);
        return (
          (i7 = function () {
            return e;
          }),
          e
        );
      }
      function i8() {
        var e = (0, g._)([
          "hidden h-4 border-l border-black/30 dark:border-white/30 sm:block",
        ]);
        return (
          (i8 = function () {
            return e;
          }),
          e
        );
      }
      var i9 =
        ((c = {}),
        (0, rG._)(c, B._G.Small, 8),
        (0, rG._)(c, B._G.Medium, 4),
        (0, rG._)(c, B._G.Large, 4),
        (0, rG._)(c, B._G.XLarge, 6),
        (0, rG._)(c, B._G.Full, 8),
        c);
      function oe(e) {
        var n,
          t,
          r,
          a,
          i,
          o,
          s,
          l,
          u,
          c,
          f,
          h,
          g,
          x,
          v = e.onInstallWithAuthRequired,
          b = e.onClickInstallDeveloper,
          y = e.onClickDevelop,
          w = e.onClickManage,
          C = e.onClickAbout,
          k = e.onClose,
          M = (0, eu.kP)().session,
          N = (0, r3.Z)(),
          P = N.installedPlugins,
          S = N.isLoading,
          I =
            ((u = (0, eu.kP)().session),
            (c = (0, T.hz)()),
            (h = (f = (0, i5.a)(
              ["approvedAip"],
              function () {
                return _.ZP.getPlugins({
                  offset: 0,
                  limit: 20,
                  statuses: ["approved"],
                  accessToken: null == u ? void 0 : u.accessToken,
                });
              },
              {
                enabled:
                  c.has("tools3") && !!(null == u ? void 0 : u.accessToken),
                onError: function (e) {
                  console.error(e);
                },
              }
            )).data),
            (g = f.isLoading),
            (0, j.useMemo)(
              function () {
                var e = h
                  ? h.items.reduce(function (e, n) {
                      var t = !0,
                        r = !1,
                        a = void 0;
                      try {
                        for (
                          var i, o = (n.categories || [])[Symbol.iterator]();
                          !(t = (i = o.next()).done);
                          t = !0
                        ) {
                          var s = i.value;
                          e[s.id] ||
                            (e[s.id] = { id: s.id, title: s.title, items: [] }),
                            e[s.id].items.push(n);
                        }
                      } catch (e) {
                        (r = !0), (a = e);
                      } finally {
                        try {
                          t || null == o.return || o.return();
                        } finally {
                          if (r) throw a;
                        }
                      }
                      return e;
                    }, {})
                  : {};
                return {
                  approvedPlugins: h ? h.items : [],
                  approvedPluginsByCategory: e,
                  isLoading: g,
                };
              },
              [h, g]
            )),
          Z = I.approvedPlugins,
          R = I.isLoading,
          D = I.approvedPluginsByCategory,
          L = (0, j.useMemo)(
            function () {
              return P.filter(function (e) {
                return "approved" !== e.status;
              });
            },
            [P]
          ),
          F = (0, j.useMemo)(
            function () {
              var e = [];
              for (var n in D)
                D[n].items.length > 0 && e.push({ id: n, title: D[n].title });
              return (
                e.push({ id: d.All, title: "All plugins" }),
                L.length > 0 &&
                  e.push({ id: d.Developer, title: "Unverified plugins" }),
                e
              );
            },
            [L.length, D]
          ),
          A = (0, m._)((0, j.useState)(F[0].id), 2),
          E = A[0],
          q = A[1],
          O = (function (e, n) {
            for (
              var t = (0, nP._)(e), r = i4()(n), a = t.length - 1;
              a > 0;
              a--
            ) {
              var i,
                o = Math.floor(r() * (a + 1));
              (i = [t[o], t[a]]), (t[a] = i[0]), (t[o] = i[1]);
            }
            return t;
          })(
            on(
              (0, j.useMemo)(
                function () {
                  if (E === d.All) return Z;
                  if (E !== d.Developer) {
                    var e, n;
                    return null !==
                      (n =
                        null === (e = D[E]) || void 0 === e
                          ? void 0
                          : e.items) && void 0 !== n
                      ? n
                      : [];
                  }
                  return [];
                },
                [Z, E, D]
              )
            ),
            (null == M
              ? void 0
              : null === (x = M.user) || void 0 === x
              ? void 0
              : x.id) || ""
          ),
          U = on(L),
          z = (0, T.hz)(),
          H = i9[(0, B.dQ)()],
          V = [],
          Q = !1;
        E === d.Developer ? ((V = U), (Q = S)) : ((V = O), (Q = R));
        var W =
            ((t = (n = { items: V, numItemsPerPage: H }).items),
            (r = n.numItemsPerPage),
            (i = (a = (0, m._)((0, j.useState)(0), 2))[0]),
            (o = a[1]),
            (s = Math.ceil(t.length / r)),
            (l = i * r),
            {
              page: i,
              numPages: s,
              pageItems: t.slice(l, l + r),
              goToPage: (0, j.useCallback)(function (e) {
                o(e);
              }, []),
            }),
          G = W.page,
          $ = W.numPages,
          J = W.pageItems,
          Y = W.goToPage;
        (0, j.useEffect)(
          function () {
            E === d.Developer && 0 === L.length && (q(F[0].id), Y(0));
          },
          [E, L, Y, F]
        ),
          (0, j.useEffect)(
            function () {
              R || q(F[0].id);
            },
            [F, R]
          );
        var K = (0, m._)((0, j.useState)(!1), 2),
          X = K[0],
          ee = K[1];
        return X
          ? (0, p.jsx)(i6, {
              onClose: function () {
                ee(!1);
              },
            })
          : (0, p.jsx)(ni.ZP, {
              isOpen: !0,
              onModalClose: k,
              type: "success",
              title: "Plugin store",
              className:
                "bg-gray-50 sm:mx-7 sm:max-w-2xl lg:max-w-5xl xl:max-w-7xl",
              closeButton: (0, p.jsx)(ni.ol, { onClose: k }),
              children: (0, p.jsxs)(iE, {
                children: [
                  !Q &&
                    F.length > 1 &&
                    (0, p.jsx)("div", {
                      className: "flex gap-3",
                      children: F.map(function (e) {
                        return (0, p.jsx)(
                          ot,
                          {
                            selected: E === e.id,
                            onClick: function () {
                              q(e.id), Y(0);
                            },
                            children: e.title,
                          },
                          e.id
                        );
                      }),
                    }),
                  (0, p.jsx)(or, {
                    plugins: J,
                    numSkeletons: H,
                    isLoading: Q,
                    onInstallWithAuthRequired: v,
                    onRequestMfa: function () {
                      return ee(!0);
                    },
                  }),
                  (0, p.jsxs)("div", {
                    className:
                      "flex flex-col items-center gap-2 sm:flex-row sm:justify-between",
                    children: [
                      (0, p.jsx)("div", {
                        children:
                          $ > 1 &&
                          (0, p.jsx)(ol, { page: G, numPages: $, goToPage: Y }),
                      }),
                      (0, p.jsxs)("div", {
                        className:
                          "flex flex-col items-center gap-2 sm:flex-row",
                        children: [
                          z.has("tools3_dev") &&
                            (0, p.jsxs)(p.Fragment, {
                              children: [
                                (0, p.jsx)(ou, {
                                  role: "button",
                                  onClick: b,
                                  children: "Install an unverified plugin",
                                }),
                                (0, p.jsx)(oc, {}),
                                (0, p.jsx)(ou, {
                                  role: "button",
                                  onClick: y,
                                  children: "Develop your own plugin",
                                }),
                                z.has("tools3_admin") &&
                                  (0, p.jsxs)(p.Fragment, {
                                    children: [
                                      (0, p.jsx)(oc, {}),
                                      (0, p.jsx)(ou, {
                                        role: "button",
                                        onClick: w,
                                        children: "Plugins admin",
                                      }),
                                    ],
                                  }),
                                (0, p.jsx)(oc, {}),
                              ],
                            }),
                          (0, p.jsx)(ou, {
                            role: "button",
                            onClick: C,
                            children: "About plugins",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            });
      }
      function on(e) {
        return (0, j.useMemo)(
          function () {
            return e.sort(function (e, n) {
              return e.manifest.name_for_human.localeCompare(
                n.manifest.name_for_human
              );
            });
          },
          [e]
        );
      }
      function ot(e) {
        var n = e.selected,
          t = e.onClick,
          r = e.children;
        return (0, p.jsx)(ei.z, {
          color: n ? "light" : "neutral",
          className: (0, O.Z)(
            "focus:ring-0",
            n && "hover:bg-gray-200",
            !n && "text-black/50"
          ),
          onClick: t,
          children: r,
        });
      }
      function or(e) {
        var n = e.plugins,
          t = e.numSkeletons,
          r = e.isLoading,
          a = e.onInstallWithAuthRequired,
          i = e.onRequestMfa,
          o = r
            ? Array(t)
                .fill(0)
                .map(function (e, n) {
                  return (0, p.jsx)(oi, {}, n);
                })
            : n.map(function (e) {
                return (0,
                p.jsx)(oa, { plugin: e, onInstallWithAuthRequired: a, onRequestMfa: i }, e.id);
              });
        return (0, p.jsx)("div", {
          className:
            "grid grid-cols-1 gap-3 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-3 xl:grid-cols-4",
          children: o,
        });
      }
      function oa(e) {
        var n,
          t,
          r,
          a,
          i,
          o,
          s,
          l = e.plugin,
          u = e.onInstallWithAuthRequired,
          c = e.onRequestMfa,
          d = (0, m._)((0, j.useState)(!1), 2),
          f = d[0],
          h = d[1],
          g = (0, m._)((0, j.useState)(!1), 2),
          v = g[0],
          b = g[1],
          y = nI({
            onSuccess: function (e) {
              (0, nH.wu)(e.id);
            },
            onError: function (e) {
              console.error(e),
                ed.m.danger(
                  "Error installing ".concat(l.manifest.name_for_human, ".")
                );
            },
            onSettled: function () {
              h(!1);
            },
          }),
          w =
            ((t = (n = {
              onSuccess: function () {},
              onError: function (e) {
                console.error(e),
                  ed.m.danger(
                    "Error uninstalling ".concat(l.manifest.name_for_human, ".")
                  );
              },
              onSettled: function () {
                b(!1);
              },
            }).onSuccess),
            (r = n.onError),
            (a = n.onSettled),
            (i = (0, x.NL)()),
            (o = (0, nS.D)(_.ZP.updatePluginUserSettings.bind(_.ZP), {
              onSuccess: function (e) {
                (function (e, n, t) {
                  n.setQueryData(t, function (n) {
                    var t = (0, nP._)((null == n ? void 0 : n.items) || []),
                      r = t.findIndex(function (n) {
                        return n.id === e.id;
                      });
                    return (
                      -1 !== r && t.splice(r, 1), { count: t.length, items: t }
                    );
                  });
                })(e, i, ["installedAip"]),
                  nR(e, i, ["approvedAip"]),
                  t(e);
              },
              onError: r,
              onSettled: a,
            }).mutate),
            (0, j.useCallback)(
              function (e) {
                o({ pluginId: e, isInstalled: !1 });
              },
              [o]
            )),
          C = (0, eu.kP)().session,
          k = nn().isUsernamePassword,
          T = (0, j.useCallback)(
            function () {
              var e,
                n = l.manifest.auth.type;
              if (
                !("none" === n || "service_http" === n) &&
                !(null == C
                  ? void 0
                  : null === (e = C.user) || void 0 === e
                  ? void 0
                  : e.mfa) &&
                k
              ) {
                c();
                return;
              }
              if ("oauth" === n) {
                var t = nD(l);
                t
                  ? (window.location.href = t)
                  : ed.m.danger(
                      "Missing plugin configuration for ".concat(
                        l.manifest.name_for_human,
                        "."
                      )
                    );
              } else "user_http" === n ? u(l) : (h(!0), y(l.id));
            },
            [l, y, u, c, k, C]
          ),
          M = (0, j.useCallback)(
            function () {
              b(!0), w(l.id);
            },
            [l, w]
          );
        return (
          (s =
            f || v
              ? (0, p.jsxs)(ei.z, {
                  color: "light",
                  className: "bg-green-100 hover:bg-green-100",
                  children: [
                    f ? "Installing" : "Uninstalling",
                    (0, p.jsx)(es.Z, {}),
                  ],
                })
              : l.user_settings.is_installed
              ? (0, p.jsxs)(ei.z, {
                  color: "light",
                  className: "hover:bg-gray-200",
                  onClick: M,
                  children: ["Uninstall", (0, p.jsx)(eo.ZP, { icon: J.$Rx })],
                })
              : (0, p.jsxs)(ei.z, {
                  onClick: T,
                  children: ["Install", (0, p.jsx)(eo.ZP, { icon: J.wzc })],
                })),
          (0, p.jsx)(oo, {
            logo: (0, p.jsx)(eW, {
              url: l.manifest.logo_url,
              name: l.manifest.name_for_human,
              size: "100%",
              large: !0,
            }),
            tag: nB(l) && (0, p.jsx)(os, {}),
            title: (0, p.jsx)("div", {
              className: "max-w-full text-lg leading-5 line-clamp-1",
              children: l.manifest.name_for_human,
            }),
            button: s,
            description: l.manifest.description_for_human,
          })
        );
      }
      function oi() {
        return (0, p.jsx)(oo, {
          logo: (0, p.jsx)("div", {
            className: "h-full w-full rounded-[5px] bg-gray-300",
          }),
          title: (0, p.jsx)("div", {
            className: "h-[19px] w-[103px] rounded-[5px] bg-gray-100",
          }),
          button: (0, p.jsx)("div", {
            className: "h-[36px] w-[103px] rounded-[5px] bg-gray-200",
          }),
          description: (0, p.jsxs)("div", {
            className: "flex flex-col gap-1.5",
            children: [
              (0, p.jsx)("div", {
                className: "h-[14px] w-[209px] rounded-[5px] bg-gray-100",
              }),
              (0, p.jsx)("div", {
                className: "h-[14px] w-[218px] rounded-[5px] bg-gray-100",
              }),
              (0, p.jsx)("div", {
                className: "h-[14px] w-[184px] rounded-[5px] bg-gray-100",
              }),
            ],
          }),
        });
      }
      function oo(e) {
        var n = e.logo,
          t = e.tag,
          r = e.title,
          a = e.button,
          i = e.description;
        return (0, p.jsxs)("div", {
          className:
            "flex flex-col gap-4 rounded border border-black/10 bg-white p-6 dark:border-white/20 dark:bg-gray-900",
          children: [
            (0, p.jsxs)("div", {
              className: "flex gap-4",
              children: [
                (0, p.jsx)("div", {
                  className: "h-[70px] w-[70px] shrink-0",
                  children: n,
                }),
                (0, p.jsxs)("div", {
                  className:
                    "flex min-w-0 flex-col items-start justify-between",
                  children: [
                    t
                      ? (0, p.jsxs)("div", {
                          className: "flex items-center gap-1.5",
                          children: [t, r],
                        })
                      : r,
                    a,
                  ],
                }),
              ],
            }),
            (0, p.jsx)("div", {
              className:
                "h-[60px] text-sm text-black/70 line-clamp-3 dark:text-white/70",
              children: i,
            }),
          ],
        });
      }
      function os() {
        return (0, p.jsx)("div", {
          className:
            "flex h-[18px] w-[18px] items-center justify-center rounded-[5px] bg-red-200 text-red-800",
          children: (0, p.jsx)(eo.ZP, { icon: J.V7f, className: "h-3 w-3" }),
        });
      }
      function ol(e) {
        for (
          var n = function (e) {
              u.push(
                (0, p.jsx)(
                  ou,
                  {
                    role: "button",
                    className: (0, O.Z)(
                      "flex h-5 w-5 items-center justify-center",
                      e === t &&
                        "text-blue-600 hover:text-blue-600 dark:text-blue-600 dark:hover:text-blue-600"
                    ),
                    onClick: function () {
                      return a(e);
                    },
                    children: e + 1,
                  },
                  e
                )
              );
            },
            t = e.page,
            r = e.numPages,
            a = e.goToPage,
            i = t > 0,
            o = t < r - 1,
            s = (0, j.useCallback)(
              function () {
                a(Math.max(t - 1, 0));
              },
              [t, a]
            ),
            l = (0, j.useCallback)(
              function () {
                a(Math.min(t + 1, r - 1));
              },
              [t, r, a]
            ),
            u = [],
            c = 0;
          c < r;
          c++
        )
          n(c);
        return (0, p.jsxs)("div", {
          className: "flex gap-2 text-sm text-black/60 dark:text-white/70",
          children: [
            (0, p.jsxs)(ou, {
              role: "button",
              className: (0, O.Z)("flex items-center", !i && "opacity-50"),
              onClick: s,
              $disabled: !i,
              children: [(0, p.jsx)(eo.ZP, { icon: J.YFh }), "Prev"],
            }),
            u,
            (0, p.jsxs)(ou, {
              role: "button",
              className: (0, O.Z)("flex items-center", !o && "opacity-50"),
              onClick: l,
              $disabled: !o,
              children: ["Next", (0, p.jsx)(eo.ZP, { icon: J.Tfp })],
            }),
          ],
        });
      }
      ((i = d || (d = {}))[(i.All = 0)] = "All"),
        (i[(i.Developer = 1)] = "Developer");
      var ou = w.Z.div(i7(), function (e) {
          return e.$disabled
            ? "opacity-50 cursor-default"
            : "hover:text-black/50 dark:hover:text-white/50";
        }),
        oc = w.Z.div(i8());
      function od(e) {
        var n = e.allowClose,
          t = e.onConfirm,
          r = e.onClose;
        return (0, p.jsx)(ni.ZP, {
          isOpen: !0,
          onModalClose: r,
          type: "success",
          title: "About plugins",
          primaryButton: (0, p.jsx)(ni.mH, {
            title: "OK",
            color: "primary",
            onClick: t,
          }),
          secondaryButton:
            n &&
            (0, p.jsx)(ni.mH, {
              title: "Cancel",
              color: "neutral",
              onClick: r,
            }),
          children: (0, p.jsx)(iE, {
            children: (0, p.jsxs)(iW.I, {
              children: [
                (0, p.jsx)(iW.Z, {
                  icon: "\uD83D\uDEA8",
                  children:
                    "Plugins are powered by third party applications that are not controlled by OpenAI. Be sure you trust a plugin before installation.",
                }),
                (0, p.jsx)(iW.Z, {
                  icon: "\uD83C\uDF10",
                  children:
                    "Plugins connect ChatGPT to external apps. If you enable a plugin, ChatGPT may send parts of your conversation and the country or state you're in to the plugin to enhance your conversation.",
                }),
                (0, p.jsx)(iW.Z, {
                  icon: "\uD83E\uDDE0",
                  children:
                    "ChatGPT automatically chooses when to use plugins during a conversation, depending on the plugins you've enabled.",
                }),
              ],
            }),
          }),
        });
      }
      var of = "oai/apps/hasSeenPluginsDisclaimer";
      function oh(e) {
        var n = e.onInstall,
          t = e.onClose,
          r = (0, m._)((0, j.useState)(!!ec.m.getItem(of)), 2),
          a = r[0],
          i = r[1],
          o = (0, m._)((0, j.useState)(!1), 2),
          s = o[0],
          l = o[1],
          u = (0, m._)((0, j.useState)(!1), 2),
          c = u[0],
          d = u[1],
          f = (0, m._)((0, j.useState)(), 2),
          h = f[0],
          g = f[1],
          x = (0, m._)((0, j.useState)(!1), 2),
          v = x[0],
          b = x[1],
          y = (0, m._)((0, j.useState)(!1), 2),
          w = y[0],
          C = y[1],
          k = (0, j.useCallback)(function () {
            i(!0), l(!1), ec.m.setItem(of, !0);
          }, []),
          _ = (0, j.useCallback)(function (e) {
            g(e), d(!0);
          }, []),
          T = (0, j.useCallback)(function () {
            d(!0);
          }, []),
          M = (0, j.useCallback)(function () {
            b(!0);
          }, []),
          N = (0, j.useCallback)(function () {
            C(!0);
          }, []),
          P = (0, j.useCallback)(function () {
            l(!0);
          }, []),
          S = (0, j.useCallback)(
            function (e) {
              (0, nH.wu)(e.id), t(), n(e);
            },
            [n, t]
          ),
          I = (0, j.useCallback)(
            function () {
              g(void 0), d(!1), t();
            },
            [t]
          ),
          Z = (0, j.useCallback)(
            function () {
              b(!1), t();
            },
            [t]
          ),
          R = (0, j.useCallback)(
            function () {
              C(!1), t();
            },
            [t]
          );
        return !a || s
          ? (0, p.jsx)(od, { allowClose: !a, onConfirm: k, onClose: t })
          : c
          ? (0, p.jsx)(i$, { plugin: h, onInstall: S, onClose: I })
          : v
          ? (0, p.jsx)(iB, {
              onClickInstall: _,
              onInstallLocalhost: S,
              onClose: Z,
            })
          : w
          ? (0, p.jsx)(iX, { onClose: R })
          : (0, p.jsx)(oe, {
              onInstallWithAuthRequired: _,
              onClickInstallDeveloper: T,
              onClickDevelop: M,
              onClickManage: N,
              onClickAbout: P,
              onClose: t,
            });
      }
      function om() {
        var e = (0, g._)([
          "flex h-8 flex-shrink-0 items-center justify-center border-b border-black/10 bg-gray-50 text-xs text-gray-800 dark:border-white/20 dark:bg-[#272832] dark:text-white",
        ]);
        return (
          (om = function () {
            return e;
          }),
          e
        );
      }
      function og() {
        var e = (0, g._)([
          "flex h-[18px] w-[18px] items-center justify-center rounded-[5px] bg-red-200 text-red-800",
        ]);
        return (
          (og = function () {
            return e;
          }),
          e
        );
      }
      function op() {
        var e,
          n = (0, m._)((0, j.useState)(!1), 2),
          t = n[0],
          r = n[1],
          a = (0, m._)((0, j.useState)(!1), 2),
          i = a[0],
          o = a[1],
          s = (0, y.useRouter)(),
          l = (0, r3.Z)(),
          u = l.installedPlugins,
          c = l.isLoading,
          d = (0, nH.p0)(),
          f = (0, j.useRef)(null);
        (0, j.useEffect)(
          function () {
            if (!c) {
              var e = s.query,
                n = e.loginAip,
                t = e.loginSuccess,
                r = (0, h._)(e, ["loginAip", "loginSuccess"]);
              if (n) {
                var a,
                  i = u.find(function (e) {
                    return e.id === n;
                  });
                i && "true" === t
                  ? ((0, nH.wu)(s.query.loginAip),
                    null === (a = f.current) || void 0 === a || a.open())
                  : ed.m.warning(
                      "Couldn't log in with ".concat(
                        (null == i ? void 0 : i.manifest.name_for_human) ||
                          "plugin",
                        "."
                      )
                    ),
                  s.replace({ pathname: s.pathname, query: r });
              }
            }
          },
          [s, u, c]
        );
        var g = (0, j.useCallback)(function () {
            var e;
            null === (e = f.current) || void 0 === e || e.open();
          }, []),
          x = (0, j.useCallback)(function () {
            r(!1);
          }, []),
          v = (0, m._)((0, j.useState)(d), 2),
          b = v[0],
          w = v[1],
          C = (0, j.useCallback)(
            function (e) {
              if (e.length > nH.hZ)
                o(!0),
                  setTimeout(function () {
                    o(!1);
                  }, 600);
              else {
                var n = e.filter(function (e) {
                    return !d.find(function (n) {
                      return n.id === e.id;
                    });
                  }),
                  t = !0,
                  r = !1,
                  a = void 0;
                try {
                  for (
                    var i, s = nH.iO[Symbol.iterator]();
                    !(t = (i = s.next()).done);
                    t = !0
                  ) {
                    var l = (function () {
                      var e = i.value,
                        t = d.find(function (n) {
                          return e.includes(n.domain);
                        });
                      if (t) {
                        var r = e.find(function (e) {
                            return e !== t.domain;
                          }),
                          a = n.find(function (e) {
                            return e.domain === r;
                          });
                        if (a)
                          return (
                            ed.m.warning(
                              "You can't enable "
                                .concat(a.manifest.name_for_human, " while ")
                                .concat(
                                  t.manifest.name_for_human,
                                  " is enabled."
                                )
                            ),
                            { v: void 0 }
                          );
                      }
                    })();
                    if ("object" === (0, iL._)(l)) return l.v;
                  }
                } catch (e) {
                  (r = !0), (a = e);
                } finally {
                  try {
                    t || null == s.return || s.return();
                  } finally {
                    if (r) throw a;
                  }
                }
                (0, nH.dT)(
                  e.map(function (e) {
                    return e.id;
                  })
                );
              }
            },
            [d]
          ),
          k = (0, j.useCallback)(function (e) {
            var n;
            null === (n = f.current) || void 0 === n || n.close(),
              "store" === e && r(!0);
          }, []),
          _ = (0, j.useCallback)(
            function () {
              w(d),
                tj.m.logEvent("chatgpt_plugin_chooser_opened", null, {
                  num_enabled_plugins: "".concat(d.length),
                });
            },
            [d]
          ),
          T = (0, j.useCallback)(
            function () {
              var e = b.filter(function (e) {
                  return !d.find(function (n) {
                    return n.id === e.id;
                  });
                }),
                n = d.filter(function (e) {
                  return !b.find(function (n) {
                    return n.id === e.id;
                  });
                }),
                t = !0,
                r = !1,
                a = void 0;
              try {
                for (
                  var i, o = n[Symbol.iterator]();
                  !(t = (i = o.next()).done);
                  t = !0
                ) {
                  var s = i.value;
                  tj.m.logEvent("chatgpt_plugin_enabled", null, {
                    plugin_id: s.id,
                  });
                }
              } catch (e) {
                (r = !0), (a = e);
              } finally {
                try {
                  t || null == o.return || o.return();
                } finally {
                  if (r) throw a;
                }
              }
              var l = !0,
                u = !1,
                c = void 0;
              try {
                for (
                  var f, h = e[Symbol.iterator]();
                  !(l = (f = h.next()).done);
                  l = !0
                ) {
                  var m = f.value;
                  tj.m.logEvent("chatgpt_plugin_disabled", null, {
                    plugin_id: m.id,
                  });
                }
              } catch (e) {
                (u = !0), (c = e);
              } finally {
                try {
                  l || null == h.return || h.return();
                } finally {
                  if (u) throw c;
                }
              }
            },
            [d, b]
          ),
          M = u.map(function (e) {
            return {
              value: e,
              title: e.manifest.name_for_human,
              description: e.manifest.description_for_human,
              tags: [],
              customTags: nB(e)
                ? (0, p.jsx)(ov, {})
                : "approved" !== e.status
                ? (0, p.jsx)(ox, {})
                : void 0,
              imageUrl: e.manifest.logo_url,
            };
          }),
          N = M.filter(function (e) {
            return d.find(function (n) {
              return n.id === e.value.id;
            });
          }),
          P = "".concat(0 === d.length ? "No" : d.length, " plugins enabled");
        if (d.length > 0 && d.length < 6) {
          var S = d.map(function (e, n) {
            return (0,
            p.jsx)(eW, { url: e.manifest.logo_url, name: e.manifest.name_for_human, size: 16 }, n);
          });
          P = (0, p.jsx)("div", { className: "flex gap-1", children: S });
        }
        var I = [{ id: "store", label: "Plugin store", icon: J.Rgz }];
        u.length > nH.hZ &&
          (e = (0, p.jsxs)(ob, {
            className: (0, O.Z)(
              "transition-colors duration-300",
              i && "bg-red-200 text-red-800 dark:bg-red-200 dark:text-red-800"
            ),
            children: [d.length, "/", nH.hZ, " Enabled"],
          }));
        var Z = (0, p.jsxs)(p.Fragment, {
          children: [
            (0, p.jsx)(ob, { children: "Loading..." }),
            (0, p.jsx)(i_, { showCheckbox: !0 }),
            (0, p.jsx)(i_, { showCheckbox: !0 }),
            (0, p.jsx)(i_, { showCheckbox: !0 }),
            (0, p.jsx)(i_, { showCheckbox: !0 }),
            (0, p.jsx)(i_, { showCheckbox: !0 }),
          ],
        });
        return (0, p.jsxs)(p.Fragment, {
          children: [
            (0, p.jsx)(iy, {
              name: "Plugins",
              selectedOptions: N,
              selectedLabel: P,
              options: M,
              actions: I,
              onChange: C,
              onAction: k,
              onOpen: _,
              onClose: T,
              dropdownRef: f,
              isLoading: c,
              loadingState: Z,
              header: e,
            }),
            t && (0, p.jsx)(oh, { onInstall: g, onClose: x }),
          ],
        });
      }
      function ox() {
        return (0, p.jsx)(oy, {
          children: (0, p.jsx)(eo.ZP, {
            icon: J.OH,
            className: "h-3 w-3",
            strokeWidth: 2.5,
          }),
        });
      }
      function ov() {
        return (0, p.jsx)(oy, {
          children: (0, p.jsx)(eo.ZP, { icon: J.V7f, className: "h-3 w-3" }),
        });
      }
      var ob = w.Z.div(om()),
        oy = w.Z.div(og()),
        oj = { textarea: "", "model-switcher": "" };
      function ow() {
        var e = (0, T.hz)(),
          n = ar(
            (0, r9.CS)(function (e) {
              return e.isoDate;
            })
          ),
          t = (0, i5.a)(
            ["modelMessageCap"],
            function () {
              return _.ZP.getModelMessageCap();
            },
            { enabled: e.has("model_preview") }
          ).data;
        return (0, j.useMemo)(
          function () {
            var e = (null == t ? void 0 : t.message_cap) || 0,
              r = (null == t ? void 0 : t.message_cap_window) || 1,
              a = (function (e) {
                if (e < 60) return e < 2 ? "minute" : "".concat(e, " minutes");
                var n = Math.floor(e / 60);
                if (n < 24) return n < 2 ? "hour" : "".concat(n, " hours");
                var t = Math.floor(n / 24);
                if (t < 7) return t < 2 ? "day" : "".concat(t, " days");
              })(r),
              i = (null == t ? void 0 : t.message_disclaimer) || oj;
            return a
              ? t && r && e
                ? {
                    textareaDisclaimer: i.textarea
                      .replaceAll("%FORMATTED_TIME%", n)
                      .replaceAll("%NUMERATOR%", "".concat(e))
                      .replaceAll("%DENOMINATOR%", a),
                    modelSwitcherDisclaimer: i["model-switcher"]
                      .replaceAll("%FORMATTED_TIME%", n)
                      .replaceAll("%NUMERATOR%", "".concat(e))
                      .replaceAll("%DENOMINATOR%", a),
                  }
                : {
                    textareaDisclaimer: oj.textarea,
                    modelSwitcherDisclaimer: oj["model-switcher"],
                  }
              : {
                  textareaDisclaimer: i.textarea,
                  modelSwitcherDisclaimer: i["model-switcher"],
                };
          },
          [t, n]
        );
      }
      function oC(e) {
        var n,
          t = e.onChangeModelSetting,
          r = e.availableModels,
          a = e.modelBackend,
          i = (0, T.hz)(),
          o = (0, j.useMemo)(
            function () {
              return r.find(function (e) {
                return e.id === a;
              });
            },
            [r, a]
          );
        return (0, p.jsxs)("div", {
          className: "flex items-center justify-center gap-2",
          children: [
            (0, p.jsx)(ok, {
              onChangeModelSetting: t,
              availableModels: r,
              modelBackend: a,
            }),
            i.has("tools3") &&
              (null == o
                ? void 0
                : null === (n = o.enabledTools) || void 0 === n
                ? void 0
                : n.includes("tools3")) &&
              (0, p.jsx)(op, {}),
          ],
        });
      }
      function ok(e) {
        var n = e.onChangeModelSetting,
          t = e.availableModels,
          r = e.modelBackend,
          a = (0, r9.BT)(),
          i = (0, C.WS)(),
          o = ow(),
          s = (0, j.useCallback)(
            function (e) {
              e.id !== a &&
                (n(r9.G3.Model, e.id), i(k.s6.toggleModel, { model: e.id }));
            },
            [a, i, n]
          ),
          l = "".concat(o.modelSwitcherDisclaimer),
          u = t.map(function (e) {
            return {
              value: e,
              title: e.title,
              description: e.id === a ? l : e.description,
              tags: e.tags,
              disabled: e.id === a,
            };
          }),
          c =
            u.find(function (e) {
              return e.value.id === r;
            }) || u[0];
        return (0, p.jsx)(ib, {
          name: "Model",
          selectedOption: c,
          options: u,
          onChange: s,
        });
      }
      var o_ = function (e) {
          var n,
            t = e.modelBackend,
            r = e.availableModels,
            a = e.clientThreadId,
            i = e.isSharedThread,
            o =
              r.find(function (e) {
                return e.id === t;
              }) || r[0],
            s = o.tags
              .filter(function (e) {
                return iv.includes(e);
              })
              .map(function (e) {
                return iM(e);
              }),
            l = r4();
          if (l.length > 0) {
            var u = l.map(function (e, n) {
              return (0,
              p.jsx)(eW, { url: e.manifest.logo_url, name: e.manifest.name_for_human, size: 16 }, n);
            });
            n = (0, p.jsxs)(p.Fragment, {
              children: [
                (0, p.jsx)("div", { children: "Enabled plugins:" }),
                u,
              ],
            });
          }
          var c = (0, P.qA)(a),
            d = (0, P.je)(a);
          return (0, p.jsxs)("div", {
            className:
              "flex w-full items-center justify-center gap-1 border-b border-black/10 bg-gray-50 p-3 text-gray-500 dark:border-gray-900/50 dark:bg-gray-700 dark:text-gray-300",
            children: [
              i &&
                (0, p.jsxs)(p.Fragment, {
                  children: [
                    (0, p.jsxs)(p.Fragment, {
                      children: [
                        d ? "Shared By: ".concat(d) : "Shared Conversation",
                        " ",
                        (0, p.jsx)("span", {
                          className: "px-1",
                          children: "•",
                        }),
                      ],
                    }),
                    c &&
                      (0, p.jsxs)(p.Fragment, {
                        children: [
                          c,
                          (0, p.jsx)("span", {
                            className: "px-1",
                            children: "•",
                          }),
                        ],
                      }),
                  ],
                }),
              "Model: ",
              o.title,
              s,
              n
                ? (0, p.jsxs)(p.Fragment, {
                    children: [
                      (0, p.jsx)("span", { className: "px-1", children: "•" }),
                      n,
                    ],
                  })
                : null,
            ],
          });
        },
        oT = t(75318);
      function oM() {
        var e = (0, g._)([
          "text-gray-800 w-full md:max-w-2xl lg:max-w-3xl md:h-full md:flex md:flex-col px-6 dark:text-gray-100",
        ]);
        return (
          (oM = function () {
            return e;
          }),
          e
        );
      }
      function oN() {
        var e = (0, g._)([
          "text-4xl font-semibold text-center mt-6 sm:mt-[20vh] ml-auto mr-auto mb-10 sm:mb-16 flex gap-2 items-center justify-center",
        ]);
        return (
          (oN = function () {
            return e;
          }),
          e
        );
      }
      function oP() {
        var e = (0, g._)(["md:flex items-start text-center gap-3.5"]);
        return (
          (oP = function () {
            return e;
          }),
          e
        );
      }
      function oS() {
        var e = (0, g._)(["flex flex-col mb-8 md:mb-auto gap-3.5 flex-1"]);
        return (
          (oS = function () {
            return e;
          }),
          e
        );
      }
      function oI() {
        var e = (0, g._)([
          "flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2",
        ]);
        return (
          (oI = function () {
            return e;
          }),
          e
        );
      }
      function oZ() {
        var e = (0, g._)(["flex flex-col gap-3.5 w-full sm:max-w-md m-auto"]);
        return (
          (oZ = function () {
            return e;
          }),
          e
        );
      }
      function oR() {
        var e = (0, g._)(["w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md"]);
        return (
          (oR = function () {
            return e;
          }),
          e
        );
      }
      function oD() {
        var e = (0, g._)([
          "w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md after:content-['\"'] before:content-['\"']",
        ]);
        return (
          (oD = function () {
            return e;
          }),
          e
        );
      }
      function oL() {
        var e = (0, g._)([
          "w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-900",
        ]);
        return (
          (oL = function () {
            return e;
          }),
          e
        );
      }
      var oF = w.Z.div(oM()),
        oA = w.Z.h1(oN()),
        oE = w.Z.div(oP()),
        oq = w.Z.div(oS()),
        oB = w.Z.h2(oI()),
        oO = w.Z.ul(oZ()),
        oU = w.Z.li(oR());
      w.Z.li(oD());
      var oz = w.Z.button(oL());
      function oH(e) {
        var n = e.text,
          t = e.onChangeCurrentPrompt,
          r = (0, j.useCallback)(
            function () {
              t(n);
            },
            [n, t]
          );
        return (0, p.jsxs)(oz, { onClick: r, children: ['"', n, '" →'] });
      }
      function oV(e) {
        var n = e.onChangeCurrentPrompt,
          t = (0, T.nR)();
        return (0, p.jsxs)(oF, {
          children: [
            (0, p.jsxs)(oA, {
              children: ["ChatGPT", t && (0, p.jsx)(ie, { children: "Plus" })],
            }),
            (0, p.jsxs)(oE, {
              children: [
                (0, p.jsxs)(oq, {
                  children: [
                    (0, p.jsxs)(oB, {
                      children: [
                        (0, p.jsx)(eo.ZP, { icon: J.kXG, size: "medium" }),
                        "示例",
                      ],
                    }),
                    (0, p.jsxs)(oO, {
                      children: [
                        (0, p.jsx)(oH, {
                          text: "用简单的语言解释量子计算",
                          onChangeCurrentPrompt: n,
                        }),
                        (0, p.jsx)(oH, {
                          text: "你有任何有创意的想法可以为一个10岁孩子的生日庆祝活动吗？",
                          onChangeCurrentPrompt: n,
                        }),
                        (0, p.jsx)(oH, {
                          text: "如何在Javascript中发起一个HTTP请求？",
                          onChangeCurrentPrompt: n,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, p.jsxs)(oq, {
                  children: [
                    (0, p.jsxs)(oB, {
                      children: [
                        (0, p.jsx)(eo.ZP, { icon: oT.Z, size: "medium" }),
                        "能力",
                      ],
                    }),
                    (0, p.jsxs)(oO, {
                      children: [
                        (0, p.jsx)(oU, {
                          children:
                            "记住用户先前在对话中说过的话",
                        }),
                        (0, p.jsx)(oU, {
                          children:
                            "允许用户提供后续更正",
                        }),
                        (0, p.jsx)(oU, {
                          children: "经过训练以拒绝不恰当的请求",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, p.jsxs)(oq, {
                  children: [
                    (0, p.jsxs)(oB, {
                      children: [
                        (0, p.jsx)(eo.ZP, { icon: J.BJv, size: "medium" }),
                        "局限",
                      ],
                    }),
                    (0, p.jsxs)(oO, {
                      children: [
                        (0, p.jsx)(oU, {
                          children:
                            "可能偶尔生成不正确的信息",
                        }),
                        (0, p.jsx)(oU, {
                          children:
                            "可能偶尔产生有害指令或带偏见的内容",
                        }),
                        (0, p.jsx)(oU, {
                          children:
                            "对2021年之后的世界和事件了解有限",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function oQ() {
        var e = (0, g._)([
          "flex flex-col items-center text-sm dark:bg-gray-800",
        ]);
        return (
          (oQ = function () {
            return e;
          }),
          e
        );
      }
      function oW() {
        var e = (0, g._)(["w-full h-32 md:h-48 flex-shrink-0"]);
        return (
          (oW = function () {
            return e;
          }),
          e
        );
      }
      function oG() {
        var e = (0, g._)([
          "cursor-pointer absolute right-6 bottom-[124px] md:bottom-[120px] z-10 rounded-full border border-gray-200 bg-gray-50 text-gray-600 dark:border-white/10 dark:bg-white/10 dark:text-gray-200",
        ]);
        return (
          (oG = function () {
            return e;
          }),
          e
        );
      }
      function o$() {
        var e = (0, g._)(["px-2 py-10 relative w-full flex flex-col h-full"]);
        return (
          (o$ = function () {
            return e;
          }),
          e
        );
      }
      function oJ() {
        var e = (0, g._)([
          "text-4xl font-semibold text-center text-gray-200 dark:text-gray-600 ml-auto mr-auto mb-10 sm:mb-16 flex gap-2 items-center justify-center flex-grow",
        ]);
        return (
          (oJ = function () {
            return e;
          }),
          e
        );
      }
      function oY(e) {
        var n = e.onChangeItemInView,
          t = e.onRequestMoreCompletions,
          r = e.onUpdateNode,
          a = e.onChangeRating,
          i = e.onDeleteNode,
          o = e.onRequestCompletion,
          s = e.onChangeCurrentPrompt,
          l = e.onSandboxLinkClick,
          u = e.onHandleChangeVariantFeedbackInlineComparisonRating,
          c = e.clientThreadId,
          d = e.isNewThread,
          f = e.activeRequests,
          h = e.isLoading,
          g = e.onChangeModelSetting,
          x = e.availableModels,
          v = e.currentThreadModel,
          b = e.canShowThreadSettings,
          y = e.isSharedThread,
          w = e.inlineEmbeddedDisplay,
          C = e.onTurnEnteredViewport,
          k = e.initiallyHighlightedMessageId,
          _ = (0, a8.useScrollToBottom)(),
          N = (0, m._)((0, a8.useSticky)(), 1)[0],
          S = et(),
          I = b && d && !h,
          Z = (0, T.nR)(),
          R = (0, m._)((0, j.useState)(!1), 2),
          D = R[0],
          L = R[1],
          F = (0, r9.ZP)(x, v, c).modelBackend,
          A = (0, P.U0)(c);
        (0, j.useEffect)(
          function () {
            h
              ? setTimeout(function () {
                  S() && L(!0);
                }, 1e3)
              : L(!1);
          },
          [h, S]
        );
        var E = (0, T.hz)().has(M.FZ),
          q = (0, nP._)(Array(A).keys()).map(function (e) {
            return (0,
            p.jsx)(a_, { isFinalTurn: e === A - 1, turnIndex: e, clientThreadId: c, onChangeItemInView: n, onChangeRating: a, onRequestMoreCompletions: t, onDeleteNode: i, onRequestCompletion: o, onUpdateNode: r, onSandboxLinkClick: l, onHandleChangeVariantFeedbackInlineComparisonRating: u, activeRequests: f, modelBackend: F, isSharedThread: y, showInlineEmbeddedDisplay: w, onTurnEnteredViewport: C, initiallyHighlightedMessageId: k }, e);
          });
        return (0, p.jsxs)(p.Fragment, {
          children: [
            I &&
              (0, p.jsxs)(o1, {
                children: [
                  (0, p.jsx)(oC, {
                    onChangeModelSetting: g,
                    availableModels: x,
                    modelBackend: F,
                  }),
                  (0, p.jsxs)(o2, {
                    children: [
                      "ChatGPT",
                      Z && (0, p.jsx)(ie, { children: "Plus" }),
                    ],
                  }),
                ],
              }),
            (0, p.jsxs)(oK, {
              children: [
                d && !h && !b && (0, p.jsx)(oV, { onChangeCurrentPrompt: s }),
                D && h && (0, p.jsx)(es.Z, { className: "mx-auto mt-4" }),
                !d &&
                  !h &&
                  b &&
                  (0, p.jsx)(o_, {
                    availableModels: x,
                    modelBackend: F,
                    clientThreadId: c,
                    isSharedThread: y,
                  }),
                E
                  ? (0, p.jsx)("div", {
                      className: "flex w-full flex-col items-center sm:px-4",
                      children: (0, p.jsx)("div", {
                        className: "w-full max-w-2xl pt-4",
                        children: q,
                      }),
                    })
                  : q,
                !I && !w && (0, p.jsx)(oX, {}),
              ],
            }),
            !N &&
              !w &&
              (0, p.jsx)(o0, {
                onClick: _,
                children: (0, p.jsx)(eo.ZP, { icon: J.tv1, className: "m-1" }),
              }),
          ],
        });
      }
      var oK = w.Z.div(oQ()),
        oX = w.Z.div(oW()),
        o0 = w.Z.button(oG()),
        o1 = w.Z.div(o$()),
        o2 = w.Z.h1(oJ());
      function o3() {
        var e = (0, g._)([
          "relative h-full w-full transition-width flex flex-col overflow-hidden items-stretch",
        ]);
        return (
          (o3 = function () {
            return e;
          }),
          e
        );
      }
      function o4() {
        var e = (0, g._)(["grow flex-1 overflow-hidden"]);
        return (
          (o4 = function () {
            return e;
          }),
          e
        );
      }
      function o5() {
        var e = (0, g._)([
          "w-full mb-2 shadow-[0_2px_12px_0px_rgba(0,0,0,0.08)] rounded border border-[rgba(0, 0, 0, 0.1)]",
        ]);
        return (
          (o5 = function () {
            return e;
          }),
          e
        );
      }
      function o6() {
        var e = (0, g._)([
          "m-2 shadow-[0px_0px_24px_0px_rgba(0,0,0,0.25)] rounded max-h-80 overflow-scroll",
        ]);
        return (
          (o6 = function () {
            return e;
          }),
          e
        );
      }
      function o7() {
        var e = (0, g._)(["p-4 relative -top-4 bg-white border-t\n", "\n"]);
        return (
          (o7 = function () {
            return e;
          }),
          e
        );
      }
      function o8() {
        var e = (0, g._)(["flex w-full items-center justify-left"]);
        return (
          (o8 = function () {
            return e;
          }),
          e
        );
      }
      function o9() {
        var e = (0, g._)(["mt-2 text-[#8E8EA0]"]);
        return (
          (o9 = function () {
            return e;
          }),
          e
        );
      }
      function se() {
        var e = (0, g._)(["text-sm border-none bg-transparent p-0 m-0 w-full"]);
        return (
          (se = function () {
            return e;
          }),
          e
        );
      }
      function sn(e) {
        var n = e.serverThreadId,
          t = (0, P.U0)(n),
          r = (0, P.GD)(n, t - 1),
          a = r.messages[r.messages.length - 1],
          i = (0, P.nh)(n, a.nodeId).message.id,
          o = (0, P.qA)(n),
          s = (0, j.useRef)(
            (0, a5.Z)(function (e, n) {
              return {
                requestsInflight: 0,
                title: o,
                highlightedMessageId: i,
                initiallyHighlightedMessageId: "",
                shareLinkId: "",
                shareLinkUrl: "",
                isPublic: !1,
                isDeleted: !1,
                isAnonymous: !0,
              };
            })
          );
        return (0, p.jsx)(a6.Provider, {
          value: s.current,
          children: (0, p.jsx)(st, (0, f._)({}, e)),
        });
      }
      function st(e) {
        var n,
          t,
          r,
          a = e.serverThreadId,
          i = e.isNewThread,
          o = e.isLoading,
          s = e.sharingModalOpen,
          l = e.setSharingModalOpen,
          u = e.activeRequests,
          c = e.availableModels,
          d = e.currentThreadModel,
          f = (0, j.useRef)(null),
          h = (0, j.useRef)(),
          g = (0, m._)((0, j.useState)(!1), 2),
          x = g[0],
          v = g[1],
          b = (0, m._)((0, j.useState)(!1), 2),
          y = b[0],
          w = b[1],
          C = (0, m._)((0, j.useState)(!1), 2),
          k = C[0],
          T = C[1],
          M = (0, j.useContext)(a6),
          N = a7(function (e) {
            return e.title;
          }),
          S = a7(function (e) {
            return e.isAnonymous;
          }),
          I = a7(function (e) {
            return e.initiallyHighlightedMessageId;
          }),
          Z = (0, eu.kP)().session;
        (0, j.useEffect)(function () {
          h.current = _.ZP.createShareLink({
            message_id: M.getState().highlightedMessageId,
            conversation_id: a,
            is_anonymous: !0,
          }).then(function (e) {
            M.setState({
              shareLinkId: e.share_id,
              shareLinkUrl: e.share_url,
              isPublic: e.is_public,
              isDeleted: !e.is_visible,
              title: e.title,
              highlightedMessageId: e.highlighted_message_id,
              initiallyHighlightedMessageId: e.highlighted_message_id,
            });
          });
        }, []);
        var R = function () {
            l(!1);
          },
          D =
            ((n = (0, e8._)(function () {
              var e, n, t, r, a, i, o;
              return (0, e9.Jh)(this, function (s) {
                switch (s.label) {
                  case 0:
                    w(!0), (s.label = 1);
                  case 1:
                    return s.trys.push([1, 3, , 4]), [4, h.current];
                  case 2:
                    return s.sent(), [3, 4];
                  case 3:
                    return (
                      s.sent(),
                      ed.m.danger(
                        "Failed to copy link to clipboard - could not create link"
                      ),
                      [3, 4]
                    );
                  case 4:
                    if (
                      ((n = (e = M.getState()).shareLinkId),
                      (t = e.shareLinkUrl),
                      (r = e.highlightedMessageId),
                      (a = e.title),
                      (i = e.isDeleted),
                      (o = e.isAnonymous),
                      null == t || null == n)
                    )
                      return (
                        console.error(
                          "Failed to copy link to clipboard - no url yet"
                        ),
                        [2]
                      );
                    if (!(null != n)) return [3, 6];
                    return (
                      M.setState({ isPublic: !0 }),
                      [
                        4,
                        _.ZP.updateShareLink({
                          share_id: n,
                          highlighted_message_id: r,
                          title: a,
                          is_public: !i,
                          is_visible: !i,
                          is_anonymous: o,
                        }),
                      ]
                    );
                  case 5:
                    s.sent(), (s.label = 6);
                  case 6:
                    return (
                      s.trys.push([6, 8, , 9]),
                      [4, navigator.clipboard.writeText(t)]
                    );
                  case 7:
                    return s.sent(), [3, 9];
                  case 8:
                    return (
                      console.error(
                        "Failed to copy link to clipboard: ",
                        s.sent()
                      ),
                      w(!1),
                      [2]
                    );
                  case 9:
                    return (
                      w(!1),
                      T(!0),
                      setTimeout(function () {
                        T(!1), l(!1);
                      }, 500),
                      [2]
                    );
                }
              });
            })),
            function () {
              return n.apply(this, arguments);
            }),
          L = (0, p.jsxs)(ni.mH, {
            onClick: D,
            color: "primary",
            disabled: y || k,
            children: [
              k
                ? (0, p.jsx)(eo.ZP, { icon: J.LSm })
                : y
                ? (0, p.jsx)(es.Z, {})
                : (0, p.jsx)(eo.ZP, { icon: J.UH }),
              k ? "Copied!" : y ? "Copying..." : "Copy (INTERNAL ONLY)",
            ],
          }),
          F = (0, j.useCallback)(
            function (e) {
              var n;
              null == e || e.preventDefault(),
                M.setState({
                  title:
                    null === (n = f.current) || void 0 === n ? void 0 : n.value,
                }),
                v(!1);
            },
            [M]
          ),
          A = (0, j.useCallback)(
            function (e) {
              "Enter" === e.key && F();
            },
            [F]
          ),
          E = (0, p.jsxs)(ss, {
            $active: x,
            children: [
              x
                ? (0, p.jsx)(sc, {
                    ref: f,
                    type: "text",
                    defaultValue: N,
                    autoFocus: !0,
                    onKeyDown: A,
                    className: "mr-0",
                    onBlur: F,
                  })
                : (0, p.jsxs)(sl, {
                    onDoubleClick: function () {
                      return v(!0);
                    },
                    children: [
                      N,
                      x
                        ? null
                        : (0, p.jsx)(eo.ZP, {
                            icon: J.Nte,
                            onClick: function () {
                              return v(!0);
                            },
                          }),
                    ],
                  }),
              S
                ? (0, p.jsx)(su, { children: "Shared Anonymously" })
                : (0, p.jsx)(su, {
                    children:
                      null == Z
                        ? void 0
                        : null === (r = Z.user) || void 0 === r
                        ? void 0
                        : r.name,
                  }),
            ],
          }),
          q =
            ((t = (0, e8._)(function (e) {
              return (0, e9.Jh)(this, function (e) {
                return [2];
              });
            })),
            function (e) {
              return t.apply(this, arguments);
            }),
          B = (0, j.useRef)({}),
          U = (0, j.useRef)({}),
          z = (0, j.useRef)(0),
          H = (0, j.useCallback)(
            function (e, n, t) {
              B.current[n] = t;
              var r = M.getState().highlightedMessageId,
                i = r;
              if (t && null == U.current[n]) {
                var o = e.messages[e.messages.length - 1],
                  s = P.tQ.getTree(a).getNode(o.nodeId);
                U.current[n] = s.message.id;
              }
              if (
                (t && n > z.current && ((z.current = n), (i = U.current[n])),
                !t && n === z.current)
              )
                for (; z.current >= 0 && !1 === B.current[z.current]; )
                  z.current--, (i = U.current[z.current]);
              i !== r && M.setState({ highlightedMessageId: i });
            },
            [M, a]
          );
        return (0, p.jsxs)(ni.ZP, {
          isOpen: s,
          onModalClose: R,
          closeButton: null,
          type: "success",
          icon: void 0,
          title: "Share Chat - INTERNAL ONLY",
          primaryButton: null,
          children: [
            (0, p.jsxs)("div", {
              className: (0, O.Z)("w-full"),
              children: [
                (0, p.jsx)("p", {
                  className: (0, O.Z)("mb-7 mt-3 text-[#8E8EA0]"),
                  children:
                    "Create a sharable link to a snapshot of your conversation. Messages you send after creating your link won't be shared.",
                }),
                (0, p.jsx)("p", {
                  className: (0, O.Z)("mb-7 mt-3 text-[#8E8EA0]"),
                  children: (0, p.jsx)("b", {
                    children: "INTERNAL ONLY. DO NOT SHARE LINKS EXTERNALLY.",
                  }),
                }),
              ],
            }),
            (0, p.jsx)(si, {
              children: (0, p.jsx)("div", {
                className: "flex h-full max-w-full flex-1 flex-col",
                children: (0, p.jsx)(sr, {
                  children: (0, p.jsxs)(sa, {
                    children: [
                      (0, p.jsx)(so, {
                        children: (0, p.jsx)(oY, {
                          isLoading: o,
                          onChangeItemInView: $(),
                          onRequestMoreCompletions: $(),
                          onUpdateNode: $(),
                          onChangeRating: $(),
                          onDeleteNode: $(),
                          onRequestCompletion: $(),
                          onChangeCurrentPrompt: $(),
                          onSandboxLinkClick: q,
                          onHandleChangeVariantFeedbackInlineComparisonRating:
                            $(),
                          clientThreadId: a,
                          activeRequests: u,
                          onChangeModelSetting: $(),
                          availableModels: c,
                          currentThreadModel: d,
                          canShowThreadSettings: !1,
                          inlineEmbeddedDisplay: !0,
                          isSharedThread: !1,
                          isNewThread: i,
                          onTurnEnteredViewport: H,
                          initiallyHighlightedMessageId: I,
                        }),
                      }),
                      E,
                    ],
                  }),
                }),
              }),
            }),
            (0, p.jsxs)("div", {
              className: (0, O.Z)("grid grid-cols-2"),
              children: [
                (0, p.jsx)("div", {
                  children: (0, p.jsxs)(ni.mH, {
                    onClick: R,
                    className: (0, O.Z)(
                      "ml-0 border-0 pl-0 hover:bg-transparent"
                    ),
                    children: [
                      (0, p.jsx)(eo.ZP, { icon: J.H33 }),
                      "INTERNAL ONLY - DO NOT SHARE LINKS EXTERNALLY",
                    ],
                  }),
                }),
                (0, p.jsx)("div", {
                  className: (0, O.Z)("text-right"),
                  children: L,
                }),
              ],
            }),
          ],
        });
      }
      var sr = w.Z.main(o3()),
        sa = w.Z.div(o4()),
        si = w.Z.div(o5()),
        so = w.Z.div(o6()),
        ss = w.Z.div(o7(), function (e) {
          return e.$active, "";
        }),
        sl = w.Z.div(o8()),
        su = w.Z.div(o9()),
        sc = w.Z.input(se());
      function sd() {
        var e = (0, g._)(["hidden md:block p-1 ", ""]);
        return (
          (sd = function () {
            return e;
          }),
          e
        );
      }
      var sf = (0, Y.vU)({
        newChat: {
          defaultMessage: "New chat",
          id: "Stage.newChat",
          description: "New chat button tooltip",
        },
        closeSidebar: {
          defaultMessage: "Close sidebar",
          id: "Stage.closeSidebar",
          description: "Close sidebar button tooltip",
        },
        openSidebar: {
          defaultMessage: "Open sidebar",
          id: "Stage.openSidebar",
          description: "Open sidebar button tooltip",
        },
      });
      function sh(e) {
        var n = e.isSharedThread,
          t = e.handleResetThread,
          r = e.toggleDebugSidebar,
          a = e.activeSidebar,
          i = (0, K.Z)(),
          o = A(),
          s = o.isNavigationCollapsed,
          l = o.toggleNavigation,
          u = (0, T.hz)(),
          c = u.has(M.M6),
          d = u.has("debug") && (c || !1 === a);
        return n
          ? null
          : (0, p.jsxs)(p.Fragment, {
              children: [
                c &&
                  (0, p.jsx)("button", {
                    className: "absolute left-4 top-4 z-10 p-1",
                    onClick: l,
                    "aria-label": s
                      ? i.formatMessage(sf.openSidebar)
                      : i.formatMessage(sf.closeSidebar),
                    children: (0, p.jsx)(nh.u, {
                      side: "top",
                      label: s
                        ? i.formatMessage(sf.openSidebar)
                        : i.formatMessage(sf.closeSidebar),
                      children: (0, p.jsx)(eo.ZP, { icon: J.iYc }),
                    }),
                  }),
                (0, p.jsxs)("div", {
                  className: (0, O.Z)(
                    "absolute z-10 flex flex-col gap-2",
                    c ? "right-4 top-4" : "right-3 top-3"
                  ),
                  children: [
                    c &&
                      (0, p.jsxs)(p.Fragment, {
                        children: [
                          (0, p.jsx)("button", {
                            className: "p-1",
                            onClick: function () {
                              t();
                            },
                            "aria-label": i.formatMessage(sf.newChat),
                            children: (0, p.jsx)(nh.u, {
                              side: "top",
                              label: i.formatMessage(sf.newChat),
                              children: (0, p.jsx)(eo.ZP, { icon: J.vPQ }),
                            }),
                          }),
                          d &&
                            (0, p.jsx)("div", {
                              className:
                                "my-3 border-t-[1px] border-black/20 dark:border-white/20",
                            }),
                        ],
                      }),
                    d &&
                      (0, p.jsx)(sm, {
                        onClick: r,
                        $isNewLayout: c,
                        children: (0, p.jsx)(eo.ZP, { icon: J.cDN }),
                      }),
                  ],
                }),
              ],
            });
      }
      var sm = w.Z.button(sd(), function (e) {
          return e.$isNewLayout
            ? "opacity-40 hover:opacity-100"
            : "rounded-md  bg-black/10 dark:bg-white/10 ";
        }),
        sg = aW()(
          function () {
            return Promise.resolve().then(t.bind(t, 1215));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [1215];
              },
            },
            ssr: !1,
          }
        );
      function sp(e) {
        var n = e.children;
        return (0, p.jsx)(sg, {
          className: "h-full dark:bg-gray-800",
          followButtonClassName: "scroll-convo",
          initialScrollBehavior: "auto",
          children: n,
        });
      }
      function sx() {
        var e,
          n,
          t,
          r,
          a,
          i,
          o =
            ((n = (e = nn()).isLoggedInWithMfa),
            (t = e.isUsernamePassword),
            (r = e.setupMfa),
            (i = (a = (0, nH.p0)()).filter(function (e) {
              return !(
                "none" === e.manifest.auth.type ||
                "service_http" === e.manifest.auth.type
              );
            })),
            (n || !t) && (i = []),
            {
              disablePluginsThatWeCantUse: function () {
                var e = a.filter(function (e) {
                  return (
                    "none" === e.manifest.auth.type ||
                    "service_http" === e.manifest.auth.type
                  );
                });
                (0, nH.dT)(
                  e.map(function (e) {
                    return e.id;
                  })
                );
              },
              pluginsWeCantUse: i,
              setupMfa: r,
            }),
          s = o.disablePluginsThatWeCantUse,
          l = o.pluginsWeCantUse,
          u = o.setupMfa,
          c = (0, j.useCallback)(
            function () {
              s();
            },
            [s]
          );
        return 0 === l.length
          ? null
          : (0, p.jsx)(ni.ZP, {
              isOpen: !0,
              onModalClose: c,
              title: "Some of your plugins require two-factor authentication.",
              primaryButton: (0, p.jsx)(ni.mH, {
                onClick: u,
                title: "Setup two-factor authentication",
                color: "primary",
              }),
              secondaryButton: (0, p.jsx)(ni.mH, {
                onClick: s,
                title: "Turn off the plugins",
              }),
              type: "danger",
              children: (0, p.jsx)("div", {
                className: "flex flex-col gap-2 py-4",
                children: l.map(function (e) {
                  return (0,
                  p.jsx)("div", { className: "w-full", children: (0, p.jsx)(nC, { plugin: e }) }, e.id);
                }),
              }),
            });
      }
      var sv = t(74853),
        sb = t(99652),
        sy = t(44925),
        sj = t(1220);
      function sw(e) {
        var n = e.isOpen,
          t = e.onClose,
          r = (0, j.useRef)(null),
          a = (0, C.WS)(),
          i = (0, m._)((0, j.useState)(!1), 2),
          o = i[0],
          s = i[1],
          l = (0, y.useRouter)(),
          u = (0, j.useCallback)(
            function () {
              a(k.s6.closeAccountPaymentModal), t();
            },
            [t, a]
          ),
          c = (0, j.useCallback)(
            (0, e8._)(function () {
              var e;
              return (0, e9.Jh)(this, function (n) {
                switch (n.label) {
                  case 0:
                    s(!0), a(k.s6.clickAccountCustomerPortal), (n.label = 1);
                  case 1:
                    return (
                      n.trys.push([1, 3, 4, 5]),
                      [4, _.ZP.fetchCustomerPortalUrl()]
                    );
                  case 2:
                    return (e = n.sent()), l.push(e.url), [3, 5];
                  case 3:
                    return (
                      n.sent(),
                      ed.m.warning(
                        "The account management page encountered an error. Please try again. If the problem continues, please visit help.openai.com.",
                        { hasCloseButton: !0 }
                      ),
                      [3, 5]
                    );
                  case 4:
                    return s(!1), [7];
                  case 5:
                    return [2];
                }
              });
            }),
            [l, a, s]
          ),
          d = (0, j.useCallback)(
            function () {
              a(k.s6.clickAccountPaymentGetHelp);
            },
            [a]
          );
        return (0, p.jsxs)(sv.x, {
          isOpen: n,
          onClose: t,
          focusRef: r,
          children: [
            (0, p.jsxs)("div", {
              className:
                "flex w-full flex-row items-center justify-between border-b px-4 py-3 dark:border-gray-700",
              children: [
                (0, p.jsx)("span", {
                  className: "text-base font-semibold sm:text-base",
                  children: "Your plan",
                }),
                (0, p.jsx)("button", {
                  className:
                    "text-gray-700 opacity-50 transition hover:opacity-75 dark:text-white",
                  onClick: u,
                  children: (0, p.jsx)(J.q5L, { className: "h-6 w-6" }),
                }),
              ],
            }),
            (0, p.jsx)("div", {
              className: "grid",
              children: (0, p.jsx)("div", {
                className: "relative order-1 col-span-1 sm:order-2",
                children: (0, p.jsx)(sb.Oi, {
                  rowElements: [
                    (0, p.jsx)(
                      sb.Cu,
                      {
                        text: sj.S.plus.name,
                        children: (0, p.jsx)("span", {
                          className: "font-semibold text-gray-500",
                          children: sj.S.plus.costInDollars,
                        }),
                      },
                      "row-plus-plan-name"
                    ),
                    (0, p.jsx)(
                      sb.hi,
                      {
                        disabled: !0,
                        variant: "primary-disabled",
                        ref: r,
                        text: sj.S.plus.callToAction.active,
                      },
                      "row-plus-plan-button"
                    ),
                    (0, p.jsx)(
                      sb.G,
                      { text: sj.S.plus.demandAccess },
                      "row-plus-plan-demand"
                    ),
                    (0, p.jsx)(
                      sb.G,
                      { text: sj.S.plus.responseSpeed },
                      "row-plus-plan-speed"
                    ),
                    (0, p.jsx)(
                      sb.G,
                      { className: "sm:pb-1", text: sj.S.plus.modelFeatures },
                      "row-plus-plan-feathers"
                    ),
                  ],
                }),
              }),
            }),
          ],
        });
      }
      var sC = t(48432),
        sk = { showAccountPaymentModal: !1 },
        s_ = (0, S.ZP)()(function (e) {
          return (0, L._)((0, f._)({}, sk), {
            setShowAccountPaymentModal: function (n) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : $();
              e({ showAccountPaymentModal: n }), t && t();
            },
          });
        }),
        sT = t(60382),
        sM = t(89678),
        sN = t.n(sM),
        sP = t(55989),
        sS = [
          /\bnigger\w*/i,
          /\bfaggot\w*/i,
          /\bkike\w*/i,
          /\bdykes?\b/i,
          /\bwetbacks?\b/i,
          /\bchinks?\b/i,
          /\bgooks?\b/i,
          /\bpakis?\b/i,
          /\binjuns?\b/i,
          /\btrannys?\b/i,
          /\btrannies\b/i,
          /\bspicks?\b/i,
          /\bshemales?\b/i,
        ];
      function sI() {
        var e = (0, g._)([
          "relative h-full w-full transition-width flex flex-col overflow-hidden items-stretch",
        ]);
        return (
          (sI = function () {
            return e;
          }),
          e
        );
      }
      function sZ() {
        var e = (0, g._)(["grow flex-1 overflow-hidden"]);
        return (
          (sZ = function () {
            return e;
          }),
          e
        );
      }
      function sR() {
        var e = (0, g._)([
          "absolute bottom-0 left-0 w-full border-t md:border-t-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:bg-vert-light-gradient bg-white dark:bg-gray-800 md:!bg-transparent dark:md:bg-vert-dark-gradient pt-2",
        ]);
        return (
          (sR = function () {
            return e;
          }),
          e
        );
      }
      var sD = (0, Y.vU)({
          contentPolicyViolation: {
            id: "thread.modal.restrictedTerms.title",
            defaultMessage: "This prompt may violate our content policy.",
            description: "Title for the restricted terms modal",
          },
          acknowledge: {
            id: "thread.modal.common.acknowledge",
            defaultMessage: "Acknowledge",
            description: "Acknowledge button text",
          },
          doNotShareSensitive: {
            id: "thread.modal.onboarding.title",
            defaultMessage:
              "Do not share sensitive materials with this application",
            description: "Title for the onboarding warning modal",
          },
          freeResearchPreview: {
            id: "thread.chatgptFreeResearchPreview",
            defaultMessage:
              "Free Research Preview. ChatGPT may produce inaccurate information about people, places, or facts. <link>ChatGPT May 3 Version</link>",
            description: "Free Research Preview disclaimer",
          },
          mayProduceInaccurateInformation: {
            id: "thread.chatgptMayProduceInaccurateInformation",
            defaultMessage:
              "ChatGPT may produce inaccurate information about people, places, or facts. <link>ChatGPT May 3 Version</link>",
            description:
              "ChatGPT disclaimer for producing inaccurate information",
          },
          somethingWentWrong: {
            id: "thread.modal.unrecoverableError.title",
            defaultMessage: "Something went wrong",
            description: "Title for the UnrecoverableErrorModal",
          },
          tryAgainLater: {
            id: "thread.modal.unrecoverableError.description",
            defaultMessage:
              "We're sorry, but something went wrong. Please try again later.",
            description: "Description for the UnrecoverableErrorModal",
          },
          resetThread: {
            id: "thread.modal.unrecoverableError.resetThread",
            defaultMessage: "Reset thread",
            description: "Reset thread button text",
          },
        }),
        sL = function (e) {
          var n,
            r,
            a,
            i,
            o,
            s,
            l,
            u,
            c,
            d,
            h,
            g,
            x,
            v,
            b,
            y,
            w,
            S,
            I,
            R,
            F,
            A,
            E,
            U,
            z,
            H,
            V,
            Q,
            W = e.initialThreadData,
            G = e.clientThreadId,
            Y = e.isLoading,
            ee = e.showAccountPortalModal,
            en = e.setShowAccountPortalModal,
            et = e.activeSidebar,
            er = e.setActiveSidebar,
            ea = e.activeRequests,
            ei = e.setActiveRequests,
            eo = e.newChatName,
            es = e.setNewChatName,
            el = e.userModifiedTitle,
            eu = e.handleResetThread,
            ed = e.sharingModalOpen,
            eh = e.setSharingModalOpen,
            em = e.isSharedThread,
            eg = e.initiallyHighlightedMessageId,
            ex = (0, K.Z)(),
            ev = (0, T.hz)(),
            eb = (0, B.lj)(),
            ey = (0, C.WS)(),
            ej = ev.has(M.Pt) && !eb,
            ew = (0, j.useContext)(q.QL).historyDisabled,
            eC = (0, P.U0)(G),
            ek = (0, P.oq)(G),
            e_ = (0, m._)((0, j.useState)(), 2),
            eT = e_[0],
            eM = e_[1],
            eN = (0, m._)((0, j.useState)(), 2),
            eP = eN[0],
            eS = eN[1],
            eI = (0, m._)((0, j.useState)(), 2),
            eZ = eI[0],
            eR = eI[1],
            eD = (0, j.useRef)(null),
            eL = (0, ef.Z)(),
            eF = eL.accountStatusResponse,
            eA = eL.isLoading,
            eE = (0, T.nR)(),
            eq = (0, N.g)(function (e) {
              return e.flags.isUserInCanPayGroup;
            }),
            eB = (0, m._)((0, j.useState)(!1), 2),
            eO = eB[0],
            eU = eB[1],
            ez =
              ((r = (n = {
                exempt: !1,
                onRestrictedTermFound: (0, j.useCallback)(
                  function (e) {
                    eU(!0),
                      ey(k.s6.promptUsedRestrictedWords, {
                        threadId: P.tQ.getServerThreadId(G),
                        content: e,
                      });
                  },
                  [ey, G]
                ),
              }).exempt),
              (a = n.onRestrictedTermFound),
              (o = (i = (0, m._)((0, j.useState)(!1), 2))[0]),
              (s = i[1]),
              {
                hasRestrictedTerms: o,
                checkRestrictedTerms: (0, j.useCallback)(
                  function (e) {
                    var n;
                    return (sS.some(function (t) {
                      var r = t.exec(e);
                      return r && (n = r[0]), r;
                    }),
                    !r && n)
                      ? (s(!0), null == a || a(n), !0)
                      : (s(!1), !1);
                  },
                  [r, a]
                ),
              }),
            eH = ez.hasRestrictedTerms,
            eV = ez.checkRestrictedTerms,
            eQ = (0, m._)((0, j.useState)(!0), 2),
            eW = eQ[0],
            eG = eQ[1],
            e$ = (0, m._)((0, j.useState)(!1), 2),
            eJ = e$[0],
            eY = e$[1],
            eK = (0, sT.Z)().availableModels,
            eX = (0, nH.p0)(),
            e0 = (0, r9.ZP)(eK, W.lastModelUsed, G),
            e1 = e0.modelBackend,
            e2 = e0.onChangeModelSetting,
            e3 = (0, j.useMemo)(
              function () {
                return eK.find(function (e) {
                  return e.id === e1;
                });
              },
              [eK, e1]
            ),
            e4 = ep(),
            e5 = (0, j.useCallback)(
              function () {
                e4(), es(""), ey(k.s6.newThread);
              },
              [ey, e4, es]
            ),
            e6 = el || eo || W.title,
            e7 = (0, m._)((0, j.useState)(), 2),
            ne = e7[0],
            nn = e7[1],
            nt = (0, j.useCallback)(
              function (e, n) {
                ew ||
                  _.ZP.generateTitle(null != n ? n : "", e, e1)
                    .then(function (e) {
                      var t = e.title;
                      es(t),
                        e4(),
                        ey(k.s6.renameThread, {
                          threadId: n,
                          content: t,
                          model: e1,
                        });
                    })
                    .catch(function (e) {
                      console.error(e);
                    });
              },
              [ew, ey, e1, es, e4]
            ),
            nr = (0, j.useCallback)(
              function (e, n, t) {
                var r = ev.has(M.uj);
                ew ||
                  !r ||
                  void 0 === t ||
                  nl.Cv.getIsIncompleteFromMessage(t) ||
                  nl.Cv.getWasInterruptedFromMessage(t) ||
                  _.ZP.generateSuggestions(e, n, e1)
                    .then(function (e) {
                      nn({ messageId: n, suggestions: e.suggestions });
                    })
                    .catch(function (e) {
                      console.error(e);
                    });
              },
              [ev, ew, e1]
            ),
            na =
              ((l =
                ev.has("tools3") &&
                (null == e3
                  ? void 0
                  : null === (U = e3.enabledTools) || void 0 === U
                  ? void 0
                  : U.includes("tools3"))
                  ? eX.map(function (e) {
                      return e.id;
                    })
                  : void 0),
              (u = (0, T.hz)()),
              (c = (0, j.useId)()),
              (d = (0, C.WS)()),
              (h = (0, r9.CS)(function (e) {
                return null == e ? void 0 : e.setCapTimeout;
              })),
              (g = (0, r9.CS)(function (e) {
                return null == e ? void 0 : e.clearCapTimeout;
              })),
              (x = (0, j.useContext)(q.QL).historyDisabled),
              (v = (0, j.useRef)(0)),
              (b = (0, j.useRef)({})),
              (y = (0, j.useCallback)(
                function (e, n, t, r) {
                  var a,
                    i,
                    o = r.eventSource,
                    s = function () {
                      setTimeout(function () {
                        D.removeAborterById(t),
                          ei(function (e) {
                            var n = new Set(e);
                            return n.delete(t), n;
                          }),
                          delete b.current[t],
                          P.tQ.releaseThread(G);
                      }, 0);
                    },
                    l = P.tQ.getTree(G),
                    c = t,
                    m = l.getParentId(c),
                    p = n === nA.Os.Continue,
                    x = !0,
                    v = !1,
                    y = l.getMessage(c),
                    j = new Set(),
                    w = l.getIsBlockedFromNode(m),
                    C = !1,
                    _ = !1,
                    T = sN()(
                      function () {
                        w ||
                          C ||
                          P.tQ.updateTree(G, function (e) {
                            e.updateNodeMessage(c, y);
                          });
                      },
                      50,
                      { leading: !0, maxWait: 50 }
                    );
                  function M(e, n, t) {
                    return N.apply(this, arguments);
                  }
                  function N() {
                    return (N = (0, e8._)(function (e, n, t) {
                      var r,
                        a,
                        i,
                        o,
                        s,
                        u = arguments;
                      return (0, e9.Jh)(this, function (c) {
                        switch (c.label) {
                          case 0:
                            (r = u.length > 3 && void 0 !== u[3] && u[3]),
                              (c.label = 1);
                          case 1:
                            return (
                              c.trys.push([1, 3, , 4]),
                              [4, (0, tx._I)(t, !1, e, l.getMessageId(n))]
                            );
                          case 2:
                            return (
                              (i = (a = c.sent()).isBlocked),
                              (o = a.isFlagged),
                              (i || o) && (_ = !0),
                              i
                                ? ((C = !0),
                                  r || (w = !0),
                                  P.tQ.updateTree(G, function (e) {
                                    e.updateNode(n, {
                                      message: {
                                        content: { parts: { $set: [""] } },
                                      },
                                      metadata: {
                                        $set: (0, L._)((0, f._)({}, tx.sK), {
                                          completionSampleFinishTime:
                                            Date.now(),
                                        }),
                                      },
                                    });
                                  }),
                                  d(
                                    r
                                      ? k.s6.completionBlockedByModeration
                                      : k.s6.promptBlockedByModeration,
                                    { threadId: e, id: n }
                                  ))
                                : o
                                ? (P.tQ.updateTree(G, function (e) {
                                    e.updateNode(n, {
                                      metadata: { $set: tx.Mf },
                                    });
                                  }),
                                  d(
                                    r
                                      ? k.s6.completionFlaggedByModeration
                                      : k.s6.promptFlaggedByModeration,
                                    { threadId: e, id: n }
                                  ))
                                : r &&
                                  w &&
                                  P.tQ.updateTree(G, function (e) {
                                    e.updateNodeMessage(n, y);
                                  }),
                              [3, 4]
                            );
                          case 3:
                            return (
                              (s = c.sent()),
                              (C = !0),
                              P.tQ.updateTree(G, function (e) {
                                e.updateNode(n, {
                                  metadata: {
                                    $set: {
                                      err: "An error occured",
                                      errType: "danger",
                                      completionSampleFinishTime: Date.now(),
                                    },
                                  },
                                });
                              }),
                              d(k.s6.moderationError, {
                                threadId: e,
                                content: JSON.stringify(s || ""),
                              }),
                              tp().publish("UnrecoverableError"),
                              [3, 4]
                            );
                          case 4:
                            return [2];
                        }
                      });
                    })).apply(this, arguments);
                  }
                  return (
                    (a = (0, e8._)(function (r) {
                      var a, N, I, Z, R, F, A, E, q, B;
                      return (0, e9.Jh)(this, function (O) {
                        switch (O.label) {
                          case 0:
                            if ("error" === r.type)
                              return (
                                console.error((a = r.error)),
                                (N =
                                  (null == a ? void 0 : a.message) ||
                                  "Something went wrong"),
                                P.tQ.updateTree(G, function (e) {
                                  e.updateNode(c, {
                                    message: { $set: y },
                                    metadata: {
                                      $set: {
                                        err: N,
                                        errType: "danger",
                                        errCode: ((0, sP.T)(a) && a.code) || "",
                                        completionSampleFinishTime: Date.now(),
                                      },
                                    },
                                  });
                                }),
                                s(),
                                (0, sP.T)(a) &&
                                  (null == a ? void 0 : a.code) === r9.uU &&
                                  (null == a ? void 0 : a.clearsIn) &&
                                  (h(
                                    new Date(
                                      Date.now() + 1e3 * a.clearsIn
                                    ).toISOString()
                                  ),
                                  setTimeout(function () {
                                    g();
                                  }, 1e3 * a.clearsIn)),
                                [2]
                              );
                            if ("message" === r.type) {
                              if (
                                ((I = r.message),
                                (Z = r.conversationId),
                                x && l.isFirstCompletion)
                              ) {
                                if (
                                  (null == I ? void 0 : I.author.role) ===
                                  nA.uU.System
                                )
                                  return l.appendSystemMessageToRoot(I), [2];
                                if (
                                  (null == I ? void 0 : I.author.role) ===
                                  nA.uU.User
                                )
                                  return [2];
                              }
                              x
                                ? ((x = !1),
                                  (v = l.isFirstCompletion),
                                  (null == I ? void 0 : I.id) && j.add(t),
                                  void 0 !== Z &&
                                    ((i = Z),
                                    (0, P.Zz)(G) &&
                                      P.tQ.setServerIdForNewThread(G, Z)),
                                  P.tQ.updateTree(G, function (e) {
                                    e.updateNodeMessage(c, I);
                                  }),
                                  v && e5(Z),
                                  p ||
                                    M(Z, m, l.getTextFromLastNTurns(m, 1), !1),
                                  d(k.s6.generateCompletion, {
                                    id: t,
                                    threadId: Z,
                                    completionType: n,
                                    eventSource: o,
                                    model: e,
                                  }),
                                  D.addAborter(t, b.current[t]))
                                : p ||
                                  I.id === l.getMessageId(c) ||
                                  (j.add(I.id),
                                  T.flush(),
                                  P.tQ.updateTree(G, function (e) {
                                    e.addNode(I.id, I, c, nA.Jq.Completion);
                                  }),
                                  (c = I.id),
                                  P.tQ.setThreadCurrentLeafId(G, c)),
                                (y = I);
                            }
                            if (
                              (T(),
                              "done" !== r.type ||
                                (w ||
                                  C ||
                                  (T.flush(),
                                  _ ||
                                    ((R = l.getMessageId(c)),
                                    v && nt(R, i),
                                    nr(i, R, y))),
                                (F = l.getTextFromTurnsById(Array.from(j))),
                                (A =
                                  l.getTextFromLastNTurns(m, 2) + "\n\n" + F),
                                M(i, c, A, !0),
                                P.tQ.updateTree(G, function (e) {
                                  e.updateNode(c, {
                                    metadata: {
                                      $set: (0, L._)(
                                        (0, f._)({}, l.getMetadata(c)),
                                        {
                                          completionSampleFinishTime:
                                            Date.now(),
                                        }
                                      ),
                                    },
                                  });
                                }),
                                s(),
                                !u.has("tools3_dev") ||
                                  !(E = (function (e) {
                                    var n,
                                      t,
                                      r,
                                      a =
                                        (null === (n = e.metadata) ||
                                        void 0 === n
                                          ? void 0
                                          : null === (t = n.invoked_plugin) ||
                                            void 0 === t
                                          ? void 0
                                          : t.http_api_call_data) ||
                                        (null === (r = e.metadata) ||
                                        void 0 === r
                                          ? void 0
                                          : r.http_api_call_data);
                                    if (void 0 !== a) {
                                      if (e.author.role !== nA.uU.Assistant) {
                                        console.error(
                                          "Refusing to make localhost plugin HTTP call from non-assistant message",
                                          e
                                        );
                                        return;
                                      }
                                      if (
                                        "object" != typeof a ||
                                        "string" != typeof a.namespace ||
                                        0 === a.namespace.length ||
                                        "string" != typeof a.function_name ||
                                        0 === a.function_name.length ||
                                        "string" !=
                                          typeof a.parent_message_id ||
                                        0 === a.parent_message_id.length ||
                                        "string" != typeof a.url ||
                                        0 === a.url.length ||
                                        "string" != typeof a.method ||
                                        ![
                                          "get",
                                          "post",
                                          "put",
                                          "delete",
                                          "patch",
                                        ].includes(a.method) ||
                                        !Array.isArray(a.qs_params) ||
                                        a.qs_params.some(function (e) {
                                          return (
                                            !Array.isArray(e) ||
                                            2 !== e.length ||
                                            "string" != typeof e[0] ||
                                            "string" != typeof e[1]
                                          );
                                        }) ||
                                        "object" != typeof a.headers ||
                                        Object.keys(a.headers).some(function (
                                          e
                                        ) {
                                          return "string" != typeof e;
                                        }) ||
                                        Object.values(a.headers).some(function (
                                          e
                                        ) {
                                          return "string" != typeof e;
                                        }) ||
                                        !(
                                          null === a.body ||
                                          ("object" == typeof a.body &&
                                            Object.keys(a.body).every(function (
                                              e
                                            ) {
                                              return "string" == typeof e;
                                            }))
                                        ) ||
                                        "string" !=
                                          typeof a.api_function_type ||
                                        !["kwargs", "chat"].includes(
                                          a.api_function_type
                                        )
                                      ) {
                                        console.error(
                                          "Refusing to make localhost plugin HTTP call with invalid metadata",
                                          e
                                        );
                                        return;
                                      }
                                      if (
                                        !/^https?:\/\/localhost:/.test(a.url)
                                      ) {
                                        console.error(
                                          "Refusing to make localhost plugin HTTP call with non-localhost URL",
                                          e
                                        );
                                        return;
                                      }
                                      return a;
                                    }
                                  })(y))))
                            )
                              return [3, 2];
                            return [
                              4,
                              (function (e) {
                                return nE.apply(this, arguments);
                              })(E),
                            ];
                          case 1:
                            (q = O.sent()),
                              (B = c),
                              P.tQ.updateTree(G, function (e) {
                                var n = !0,
                                  t = !1,
                                  r = void 0;
                                try {
                                  for (
                                    var a, i = q[Symbol.iterator]();
                                    !(n = (a = i.next()).done);
                                    n = !0
                                  ) {
                                    var o = a.value;
                                    e.addNode(o.id, o, B, nA.Jq.Completion, {
                                      completionSampleFinishTime: Date.now(),
                                    }),
                                      (B = o.id);
                                  }
                                } catch (e) {
                                  (t = !0), (r = e);
                                } finally {
                                  try {
                                    n || null == i.return || i.return();
                                  } finally {
                                    if (t) throw r;
                                  }
                                }
                              }),
                              P.tQ.setThreadCurrentLeafId(G, B),
                              S(e, nA.Os.Next, B, {}, void 0, void 0),
                              (O.label = 2);
                          case 2:
                            return [2];
                        }
                      });
                    })),
                    function (e) {
                      return a.apply(this, arguments);
                    }
                  );
                },
                [d, e5, nt, ei, G]
              )),
              (S = (0, j.useCallback)(
                ((w = (0, e8._)(function (e, n, t, r) {
                  var a,
                    i,
                    o,
                    s,
                    u,
                    d,
                    f,
                    h,
                    m,
                    g,
                    p,
                    j = arguments;
                  return (0, e9.Jh)(this, function (w) {
                    switch (w.label) {
                      case 0:
                        return (
                          (a = !(j.length > 4) || void 0 === j[4] || j[4]),
                          (i = j.length > 5 ? j[5] : void 0),
                          (o = P.tQ.getTree(G)),
                          P.tQ.retainThread(G),
                          (s = "request-".concat(c, "-").concat(v.current++)),
                          ei(function (e) {
                            var n = new Set(e);
                            return n.add(s), n;
                          }),
                          P.tQ.updateTree(G, function (e) {
                            e.addNode(s, "", t, nA.Jq.Completion);
                          }),
                          a && P.tQ.setThreadCurrentLeafId(G, s),
                          (d = []),
                          (f = o.getNode(t)),
                          n === nA.Os.Next || n === nA.Os.Variant
                            ? ((u =
                                (null ===
                                  (h = (m = o.getNode(f.parentId)).message) ||
                                void 0 === h
                                  ? void 0
                                  : h.id) || m.id),
                              d.push(f.message))
                            : (u = f.message.id),
                          void 0 === (g = P.tQ.getServerThreadId(G)) &&
                            (0, P.Zz)(G) &&
                            P.tQ.updateInitialThreadDataForNewThread(G, e, l),
                          [
                            4,
                            _.ZP.publicApiCompletionStream(
                              {
                                model: e,
                                completionType: n,
                                threadId: g,
                                historyDisabled: x,
                                parentMessageId: u,
                                messages: d,
                                enabledPluginIds: l,
                                completionMetadata: i,
                              },
                              y(e, n, s, r)
                            ),
                          ]
                        );
                      case 1:
                        return (p = w.sent()), (b.current[s] = p), [2];
                    }
                  });
                })),
                function (e, n, t, r) {
                  return w.apply(this, arguments);
                }),
                [c, ei, G, x, l, y]
              ))),
            no = (0, j.useCallback)(
              function () {
                if (ek) {
                  var e = P.tQ.getTree(G).getBranchFromLeaf(ek);
                  e.forEach(function (e) {
                    D.abortAndRemoveById(e.id);
                  }),
                    ei(function (n) {
                      var t = new Set(n);
                      return (
                        e.forEach(function (e) {
                          t.delete(e.id);
                        }),
                        t
                      );
                    });
                }
              },
              [ek, ei, G]
            ),
            ns = (0, j.useCallback)(
              ((I = (0, e8._)(function (e, n, t, r) {
                var a,
                  i,
                  o,
                  s,
                  l = arguments;
                return (0, e9.Jh)(this, function (u) {
                  return (
                    (a = !(l.length > 4) || void 0 === l[4] || l[4]),
                    (i = l.length > 5 ? l[5] : void 0),
                    (o = l.length > 6 ? l[6] : void 0),
                    r && no(),
                    (s = P.tQ.getTree(G)),
                    (e !== nA.Os.Continue && eV(s.getTextFromNode(n))) ||
                      na(
                        i
                          ? (0, r9.xt)(
                              ev.has("priority_driven_models_list"),
                              eK
                            )
                          : e1,
                        e,
                        n,
                        t,
                        a,
                        o
                      ),
                    [2]
                  );
                });
              })),
              function (e, n, t, r) {
                return I.apply(this, arguments);
              }),
              [eV, G, na, ev, eK, e1, no]
            ),
            nu = (0, j.useCallback)(
              function (e, n, t, r) {
                P.tQ.updateTree(G, function (t) {
                  t.addNode(e, r, n, nA.Jq.Prompt);
                });
              },
              [G]
            ),
            nc = (0, j.useCallback)(
              function (e, n, t) {
                var r = n.value,
                  a =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : {};
                nu(e, ek, nA.Jq.Prompt, r),
                  ns(nA.Os.Next, e, t, !0, void 0, void 0, a);
              },
              [ek, nu, ns]
            ),
            nd = (0, P.nh)(G, ek),
            nf = (0, j.useMemo)(
              function () {
                var e,
                  n,
                  t = nd.type === nA.Jq.Prompt,
                  r =
                    (null === (e = nd.metadata) || void 0 === e
                      ? void 0
                      : e.err) &&
                    (null === (n = nd.metadata) || void 0 === n
                      ? void 0
                      : n.errCode) !== tx.Dd;
                return !!(t || r) && 0 === ea.size;
              },
              [ea.size, nd]
            ),
            nh = (0, r9.CS)(function (e) {
              return e.isoDate;
            }),
            nm = (0, j.useMemo)(
              function () {
                var e,
                  n =
                    (null === (e = nd.metadata) || void 0 === e
                      ? void 0
                      : e.errCode) === r9.uU;
                return nf && n && nh;
              },
              [
                null === (z = nd.metadata) || void 0 === z ? void 0 : z.errCode,
                nf,
                nh,
              ]
            ),
            ng = (0, j.useCallback)(
              function (e, n) {
                var t,
                  r =
                    !(arguments.length > 2) ||
                    void 0 === arguments[2] ||
                    arguments[2],
                  a =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : "none",
                  i = arguments.length > 4 ? arguments[4] : void 0,
                  o = P.tQ.getTree(G);
                (t = nf
                  ? o.getLastValidNode(e).id
                  : o.getParentPromptNode(e).id),
                  ns(nA.Os.Variant, t, n, !1, r, i, { variantPurpose: a });
              },
              [ns, nf, G]
            ),
            np = (0, j.useCallback)(
              function (e) {
                ns(nA.Os.Continue, e, { eventSource: "mouse" }, !1);
              },
              [ns]
            ),
            nx = (0, j.useCallback)(
              function (e) {
                var n = ek,
                  t = !0,
                  r = !1,
                  a = void 0;
                try {
                  for (
                    var i, o = e[Symbol.iterator]();
                    !(t = (i = o.next()).done);
                    t = !0
                  )
                    !(function () {
                      var e = i.value;
                      e.conversation_id &&
                        (0, P.Zz)(G) &&
                        P.tQ.setServerIdForNewThread(G, e.conversation_id),
                        P.tQ.updateTree(G, function (t) {
                          t.addNode(
                            e.message.id,
                            e.message,
                            n,
                            nA.Jq.Completion
                          );
                        }),
                        (n = e.message.id);
                    })();
                } catch (e) {
                  (r = !0), (a = e);
                } finally {
                  try {
                    t || null == o.return || o.return();
                  } finally {
                    if (r) throw a;
                  }
                }
                P.tQ.setThreadCurrentLeafId(G, n),
                  ns(nA.Os.Next, n, {}, !0, void 0, void 0, void 0);
              },
              [ek, ns, G]
            ),
            nb = !!(
              ev.has("tools2") &&
              (null == e3
                ? void 0
                : null === (H = e3.enabledTools) || void 0 === H
                ? void 0
                : H.includes("tools2"))
            ),
            ny = (0, j.useCallback)(
              ((R = (0, e8._)(function (e) {
                var n, r;
                return (0, e9.Jh)(this, function (a) {
                  switch (a.label) {
                    case 0:
                      if (!nb) return [3, 3];
                      return (
                        e.preventDefault(),
                        e.stopPropagation(),
                        (n = e.currentTarget.href),
                        (r = P.tQ.getServerThreadId(G)),
                        [4, Promise.resolve().then(t.bind(t, 22208))]
                      );
                    case 1:
                      return [4, a.sent().handleSandboxLinkClick(ev, e3, r)(n)];
                    case 2:
                      a.sent(), (a.label = 3);
                    case 3:
                      return [2];
                  }
                });
              })),
              function (e) {
                return R.apply(this, arguments);
              }),
              [ev, e3, G, nb]
            ),
            nj = (0, j.useCallback)(
              function (e) {
                var n = P.tQ.getTree(G).getLeafFromNode(e);
                P.tQ.setThreadCurrentLeafId(G, n.id), ey(k.s6.changeNode);
              },
              [ey, G]
            ),
            nw = (0, j.useCallback)(
              function (e, n) {
                P.tQ.updateTree(G, function (t) {
                  t.updateNodeText(e, n);
                });
              },
              [G]
            ),
            nC = (0, j.useCallback)(
              function (e, n, t) {
                var r = P.tQ.getServerThreadId(G);
                if (
                  (ey(k.s6.thumbRating, {
                    id: n,
                    threadId: r,
                    rating: t,
                    model: e1,
                  }),
                  void 0 !== r &&
                    _.ZP.submitMessageFeedback({
                      message_id: n,
                      conversation_id: r,
                      rating: t,
                    }),
                  eS(e),
                  eR(n),
                  eM(t),
                  P.tQ.updateTree(G, function (n) {
                    var r = n.getMetadata(e);
                    n.updateNode(e, {
                      metadata: {
                        $set: (0, L._)((0, f._)({}, r), { rating: t }),
                      },
                    });
                  }),
                  "thumbsDown" === t && ej)
                ) {
                  var a = P.tQ.getTree(G).getConversationTurns(e || "root");
                  aB(a[a.length - 1]) &&
                    ng(
                      e,
                      { eventSource: "mouse", intent: "comparison" },
                      !1,
                      "comparison"
                    );
                }
              },
              [ey, G, e1, ej, ng]
            ),
            nk = (0, j.useCallback)(
              function (e, n) {
                if (eT && eP && (e || n.length > 0)) {
                  var t = P.tQ.getServerThreadId(G);
                  ey(k.s6.reportResult, {
                    id: eZ,
                    threadId: t,
                    content: e,
                    model: e1,
                    rating: eT,
                    tags: n,
                  }),
                    G &&
                      eZ &&
                      _.ZP.submitMessageFeedback({
                        message_id: eZ,
                        conversation_id: t,
                        rating: eT,
                        text: e,
                        tags: n,
                      });
                }
              },
              [eT, eP, ey, eZ, G, e1]
            ),
            n_ = (0, j.useCallback)(
              ((F = (0, e8._)(function (e, n, t, r, a, i, o, s, l, u, c) {
                return (0, e9.Jh)(this, function (d) {
                  switch (d.label) {
                    case 0:
                      return [
                        4,
                        _.ZP.submitMessageComparisonFeedback({
                          feedback_version: "comparison_feedback_modal:a:1.0",
                          original_message_id: e,
                          new_message_id: n,
                          rating: t,
                          conversation_id: P.tQ.getServerThreadId(G),
                          text: u,
                          tags: c.map(function (e) {
                            return e.replace("feedback-", "");
                          }),
                          completion_comparison_rating: r,
                          new_completion_placement: a,
                          feedback_start_time: i,
                          compare_step_start_time: o,
                          new_completion_load_start_time: s,
                          new_completion_load_end_time: l,
                          frontend_submission_time: Date.now(),
                          timezone_offset_min: new Date().getTimezoneOffset(),
                        }),
                      ];
                    case 1:
                      return d.sent(), [2];
                  }
                });
              })),
              function (e, n, t, r, a, i, o, s, l, u, c) {
                return F.apply(this, arguments);
              }),
              [G]
            ),
            nT = (0, j.useCallback)(
              ((A = (0, e8._)(function (e, n, t, r, a, i, o) {
                return (0, e9.Jh)(this, function (s) {
                  switch (s.label) {
                    case 0:
                      return [
                        4,
                        _.ZP.submitMessageComparisonFeedback({
                          feedback_version: "inline_regen_feedback:a:1.0",
                          original_message_id: e,
                          new_message_id: n,
                          rating: "none",
                          conversation_id: P.tQ.getServerThreadId(G),
                          text: "",
                          tags: [],
                          completion_comparison_rating: t,
                          new_completion_placement: "not-applicable",
                          feedback_start_time: r,
                          compare_step_start_time: a,
                          new_completion_load_start_time: i,
                          new_completion_load_end_time: o,
                          frontend_submission_time: Date.now(),
                          timezone_offset_min: new Date().getTimezoneOffset(),
                        }),
                      ];
                    case 1:
                      return s.sent(), [2];
                  }
                });
              })),
              function (e, n, t, r, a, i, o) {
                return A.apply(this, arguments);
              }),
              [G]
            ),
            nM = (0, j.useCallback)(
              function (e, n) {
                var t = P.tQ.getTree(G).getConversationTurns(e),
                  r =
                    null == t
                      ? void 0
                      : t[(null == t ? void 0 : t.length) - 1].variantIds,
                  a = (null == r ? void 0 : r.length) === 1;
                ng(
                  e,
                  a
                    ? (0, L._)((0, f._)({}, n), {
                        intent: "comparison_implicit",
                      })
                    : n,
                  !0,
                  a ? "comparison_implicit" : "none"
                );
              },
              [ng, G]
            ),
            nN = (0, j.useCallback)(
              function (e) {
                P.tQ.updateTree(G, function (n) {
                  n.deleteNode(e);
                });
              },
              [G]
            ),
            nP = (0, j.useCallback)(
              function () {
                er(function (e) {
                  return "navigation" !== e && "navigation";
                });
              },
              [er]
            ),
            nS = (0, j.useCallback)(
              function () {
                er(function (e) {
                  return "debug" !== e && "debug";
                });
              },
              [er]
            ),
            nI = (0, j.useCallback)(
              function () {
                en(!1);
              },
              [en]
            ),
            nZ = s_(function (e) {
              return {
                setShowAccountPaymentModal: e.setShowAccountPaymentModal,
                showAccountPaymentModal: e.showAccountPaymentModal,
              };
            }),
            nR = nZ.showAccountPaymentModal,
            nD = nZ.setShowAccountPaymentModal,
            nL = (0, j.useCallback)(
              function () {
                nD(!1);
              },
              [nD]
            ),
            nF = (0, j.useCallback)(
              function (e, n) {
                var t = P.tQ.getTree(G);
                if (t.isFirstCompletion && !ew) {
                  var r,
                    a = t.getParent(n);
                  (null === (r = a.metadata) || void 0 === r
                    ? void 0
                    : r.errCode) !== tx.Dd &&
                    setTimeout(function () {
                      nt(a.message.id);
                    }, 500);
                }
                D.abortAndRemoveById(n),
                  ei(function (e) {
                    var t = new Set(e);
                    return t.delete(n), t;
                  });
              },
              [nt, ew, ei, G]
            ),
            nq = (0, j.useCallback)(function () {
              eY(!0);
            }, []);
          (0, j.useEffect)(
            function () {
              var e = tp().subscribe("AbortCompletion", nF),
                n = tp().subscribe("UnrecoverableError", nq);
              return function () {
                tp().unsubscribe(e), tp().unsubscribe(n);
              };
            },
            [nF, nq]
          );
          var nB = (0, P.Hk)(G),
            nO = eC >= 2,
            nU = !Y && (0, P.Zz)(G) && !nO,
            nz = (0, m._)((0, j.useState)(""), 2),
            nV = nz[0],
            nQ = nz[1];
          (0, j.useEffect)(
            function () {
              nQ("");
            },
            [G]
          );
          var nG = (0, j.useCallback)(function () {
              eG(!0), ec.m.setItem("oai/librarian/hasSeenWarning", "true");
            }, []),
            n$ = (0, j.useCallback)(function () {
              eU(!1);
            }, []),
            nJ = (0, P.lA)(G, ek),
            nY = (0, P.dz)(G, ek),
            nK = (0, j.useMemo)(
              function () {
                return !!ev.has("can_continue") && !nJ && nY;
              },
              [ek, ev, nJ, nY]
            ),
            nX = ow(),
            n0 = ev.has("model_switcher") && eK.length > 1,
            n1 = Z(function (e) {
              return null != e.aborters[nB];
            }),
            n2 = (0, P.XK)(G);
          return (0, p.jsxs)(p.Fragment, {
            children: [
              (0, p.jsxs)(tm(), {
                children: [
                  (0, p.jsx)("title", { children: e6 }),
                  em &&
                    (0, p.jsxs)(p.Fragment, {
                      children: [
                        (0, p.jsx)("meta", {
                          property: "og:site_name",
                          content: "ChatGPT",
                        }),
                        (0, p.jsx)("meta", {
                          property: "og:title",
                          content:
                            null != e6 ? e6 : "Shared Conversation on ChatGPT",
                        }),
                        (0, p.jsx)("meta", {
                          property: "og:image",
                          content: "/api/p/og/".concat(n2),
                        }),
                      ],
                    }),
                ],
              }),
              (0, p.jsx)(sx, {}),
              !eW &&
                (0, p.jsx)(
                  ni.ZP,
                  {
                    isOpen: !0,
                    onModalClose: nG,
                    icon: tf.Z,
                    title: ex.formatMessage(sD.doNotShareSensitive),
                    primaryButton: (0, p.jsx)(ni.mH, {
                      onClick: nG,
                      title: ex.formatMessage(sD.acknowledge),
                    }),
                    type: "danger",
                  },
                  "OnboardingModal"
                ),
              eH &&
                eO &&
                (0, p.jsx)(
                  ni.ZP,
                  {
                    isOpen: !0,
                    onModalClose: n$,
                    icon: J.U0j,
                    title: ex.formatMessage(sD.contentPolicyViolation),
                    primaryButton: (0, p.jsx)(ni.mH, {
                      onClick: n$,
                      title: ex.formatMessage(sD.acknowledge),
                    }),
                    type: "danger",
                  },
                  "RestrictedTerms"
                ),
              !!ed &&
                null != n2 &&
                (0, p.jsx)(sn, {
                  serverThreadId: n2,
                  isNewThread: nU,
                  isLoading: Y || (eA && !eF),
                  currentLeafId: ek,
                  sharingModalOpen: ed,
                  setSharingModalOpen: eh,
                  activeRequests: ea,
                  availableModels: eK,
                  currentThreadModel: W.lastModelUsed,
                }),
              !!eT &&
                (0, p.jsx)(aO, {
                  ratingModalNodeId: eP,
                  ratingModalOpen: eT,
                  setRatingModalOpen: eM,
                  handleSubmitFeedback: nk,
                  onHandleChangeFeedbackComparisonRating: n_,
                  modelBackend: e1,
                  feedbackTextareaRef: eD,
                  clientThreadId: G,
                  activeRequests: ea,
                  onChangeItemInView: nj,
                  onRequestMoreCompletions: ng,
                  onUpdateNode: nw,
                  onChangeRating: nC,
                  onDeleteNode: nN,
                  onRequestCompletion: ns,
                  onSandboxLinkClick: ny,
                }),
              (0, p.jsxs)("div", {
                className:
                  "flex h-full max-w-full flex-1 flex-col overflow-hidden",
                children: [
                  eb &&
                    (0, p.jsx)(td, {
                      onNewThread: eu,
                      onClickOpenSidebar: nP,
                      title: W.title,
                      newChatName: eo,
                    }),
                  (0, p.jsxs)(sF, {
                    className: "flex-1 ",
                    children: [
                      (0, p.jsx)(sh, {
                        isSharedThread: em,
                        handleResetThread: eu,
                        activeSidebar: et,
                        toggleDebugSidebar: nS,
                      }),
                      (0, p.jsx)(sA, {
                        children:
                          !Y &&
                          (nU || nO) &&
                          ((E = (0, p.jsx)(
                            oY,
                            {
                              isLoading: Y || (eA && !eF),
                              onChangeItemInView: nj,
                              onRequestMoreCompletions: ng,
                              onUpdateNode: nw,
                              onChangeRating: nC,
                              onDeleteNode: nN,
                              onRequestCompletion: ns,
                              onChangeCurrentPrompt: nQ,
                              onSandboxLinkClick: ny,
                              onHandleChangeVariantFeedbackInlineComparisonRating:
                                nT,
                              isNewThread: nU,
                              clientThreadId: G,
                              isSharedThread: em,
                              activeRequests: ea,
                              onChangeModelSetting: e2,
                              availableModels: eK,
                              currentThreadModel: W.lastModelUsed,
                              canShowThreadSettings: n0,
                              initiallyHighlightedMessageId: eg,
                              inlineEmbeddedDisplay: !1,
                            },
                            G
                          )),
                          em
                            ? (0, p.jsx)("div", {
                                className: "h-full dark:bg-gray-800",
                                children: E,
                              })
                            : (0, p.jsx)(sp, { children: E })),
                      }),
                      (0, p.jsxs)(sE, {
                        children: [
                          ev.has("model_preview") &&
                            nU &&
                            e1 === r9.f_ &&
                            (0, p.jsx)("div", {
                              className:
                                "stretch mx-2 mb-2 text-center text-xs text-gray-600 dark:text-gray-200 md:mx-4 md:text-sm lg:m-auto lg:max-w-3xl",
                              children: nX.textareaDisclaimer,
                            }),
                          !nm &&
                            !em &&
                            (0, p.jsx)(
                              aX,
                              {
                                clientThreadId: G,
                                currentPrompt: nV,
                                onChangeCurrentPrompt: nQ,
                                onRequestMoreCompletions: nM,
                                onCreateNewCompletion: nc,
                                onAbortCompletion: nF,
                                onContinueGenerating: np,
                                onFileUpload: nx,
                                modelBackend: e1,
                                canUpload: nb,
                                isCompletionInProgress: ea.has(nB),
                                className: (0, O.Z)(
                                  "stretch mx-2 flex flex-row gap-3 last:mb-2 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl"
                                ),
                                shouldRetry: nf,
                                canContinue: nK,
                                suggestions:
                                  void 0 !== ne &&
                                  (null == ne ? void 0 : ne.messageId) ===
                                    (null ===
                                      (V = P.tQ
                                        .getTree(G)
                                        .getLastValidNode(ek)) || void 0 === V
                                      ? void 0
                                      : null === (Q = V.message) || void 0 === Q
                                      ? void 0
                                      : Q.id)
                                    ? null == ne
                                      ? void 0
                                      : ne.suggestions
                                    : void 0,
                                disabled: !eK.length,
                                canPause: n1,
                              },
                              G
                            ),
                          !1 &&
                            (0, p.jsx)("div", {
                              className:
                                "px-3 pb-3 pt-2 text-center text-xs text-gray-600 dark:text-gray-300 md:px-4 md:pb-6 md:pt-3",
                              children: eE
                                ? (0, p.jsx)("span", {
                                    children: (0, p.jsx)(
                                      X.Z,
                                      (0, L._)(
                                        (0, f._)(
                                          {},
                                          sD.mayProduceInaccurateInformation
                                        ),
                                        {
                                          values: {
                                            link: function (e) {
                                              return (0, p.jsx)("a", {
                                                href: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                className: "underline",
                                                children: e,
                                              });
                                            },
                                          },
                                        }
                                      )
                                    ),
                                  })
                                : (0, p.jsx)("span", {
                                    children: (0, p.jsx)(
                                      X.Z,
                                      (0, L._)(
                                        (0, f._)({}, sD.freeResearchPreview),
                                        {
                                          values: {
                                            link: function (e) {
                                              return (0, p.jsx)("a", {
                                                href: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                className: "underline",
                                                children: e,
                                              });
                                            },
                                          },
                                        }
                                      )
                                    ),
                                  }),
                            }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              ev.has("debug") &&
                "debug" === et &&
                (0, p.jsx)(nv, {
                  clientThreadId: G,
                  currentLeafId: ek,
                  isOpen: "debug" === et,
                  slideOver: eb,
                  onClose: nS,
                }),
              ev.has("tools3_dev") && (0, p.jsx)(nW, { slideOver: eb }),
              eq && (0, p.jsx)(sC.Z, { isOpen: nR, onClose: nL }),
              void 0 !== eE &&
                eE &&
                (0, p.jsx)(sw, { isOpen: ee, onClose: nI }),
              eJ &&
                (0, p.jsx)(
                  ni.ZP,
                  {
                    onModalClose: $(),
                    isOpen: !0,
                    icon: tf.Z,
                    title: ex.formatMessage(sD.somethingWentWrong),
                    description: ex.formatMessage(sD.tryAgainLater),
                    primaryButton: (0, p.jsx)(ni.mH, {
                      onClick: function () {
                        eu(), eY(!1);
                      },
                      title: ex.formatMessage(sD.resetThread),
                    }),
                    type: "danger",
                  },
                  "UnrecoverableErrorModal"
                ),
            ],
          });
        },
        sF = w.Z.main(sI()),
        sA = w.Z.div(sZ()),
        sE = w.Z.div(sR());
      function sq() {
        var e = (0, g._)(["overflow-hidden w-full h-full relative flex z-0"]);
        return (
          (sq = function () {
            return e;
          }),
          e
        );
      }
      var sB = E.G.href,
        sO = w.Z.div(sq()),
        sU =
          ((o = function (e) {
            var n = e.clientThreadId,
              t = e.setClientThreadId,
              r = e.isSharedThread,
              a = (0, h._)(e, [
                "clientThreadId",
                "setClientThreadId",
                "isSharedThread",
              ]),
              i = (0, P.UL)(n),
              o = (0, P.Kt)(n),
              s = a.setShowAccountPortalModal,
              l = a.activeSidebar,
              u = a.setActiveSidebar,
              c = a.setActiveRequests,
              d = a.newChatName,
              m = a.setNewChatName,
              g = a.userModifiedTitle,
              w = a.setUserModifiedTitle,
              S = a.setSharingModalOpen,
              I = (0, P.XK)(n),
              Z = (0, T.hz)(),
              R = (0, y.useRouter)(),
              L = (0, B.lj)(),
              F = (0, C.WS)(),
              E = Z.has(M.M6),
              O = (0, T.nR)(),
              U = (0, N.g)(function (e) {
                return e.flags.isUserInCanPayGroup;
              }),
              z = A(function (e) {
                return e.isNavigationCollapsed;
              }),
              H = (0, sT.Z)().availableModels,
              V = (0, j.useContext)(q.QL).historyDisabled,
              Q = (0, r9.ZP)(H, i.lastModelUsed, n).modelBackend,
              W = (0, x.NL)();
            (0, j.useEffect)(
              function () {
                return (
                  P.tQ.retainThread(n),
                  function () {
                    setTimeout(function () {
                      W.invalidateQueries(["conversation", n]);
                    }, 0),
                      P.tQ.releaseThread(n);
                  }
                );
              },
              [n, W]
            );
            var G = (0, j.useCallback)(
                function () {
                  u(function (e) {
                    return "navigation" !== e && "navigation";
                  });
                },
                [u]
              ),
              $ = (0, j.useCallback)(
                function () {
                  F(k.s6.clickSidebarAccountPortalMenuItem), s(!0);
                },
                [F, s]
              ),
              J = s_(function (e) {
                return {
                  setShowAccountPaymentModal: e.setShowAccountPaymentModal,
                  showAccountPaymentModal: e.showAccountPaymentModal,
                };
              }).setShowAccountPaymentModal,
              Y = (0, j.useCallback)(
                function () {
                  J(!0, function () {
                    F(k.s6.clickSidebarAccountPaymentMenuItem);
                  });
                },
                [F, J]
              ),
              K = ep(),
              X = (0, j.useCallback)(
                function () {
                  m(""),
                    w(""),
                    t((0, P.OX)()),
                    Q === r9.f_
                      ? R.replace("/", void 0, { shallow: !0 })
                      : R.replace("/?model=".concat(Q));
                },
                [Q, R, m, w, t]
              );
            (0, j.useEffect)(
              function () {
                return function () {
                  D.abortAllAndReset(), c(new Set());
                };
              },
              [c, n]
            );
            var ee = (0, j.useCallback)(
                function () {
                  _.ZP.deleteConversations().then(function () {
                    K();
                  }),
                    X(),
                    R.asPath !== sB && R.replace({ pathname: sB });
                },
                [X, K, R]
              ),
              en = (0, j.useCallback)(
                function () {
                  S(!0);
                },
                [S]
              ),
              et = !0 === O,
              er = (0, p.jsx)(eN, {
                activeId: V ? void 0 : I,
                onNewThread: X,
                onUpdateUserModifiedTitle: w,
                userModifiedTitle: g,
                newChatName: d,
                setNewChatName: m,
                setActiveRequests: c,
                onSetSharingModalOpen: en,
              });
            return (0, p.jsxs)(sO, {
              children: [
                !r &&
                  (0, p.jsx)(p.Fragment, {
                    children: L
                      ? (0, p.jsx)(tc, {
                          onClose: G,
                          sidebarOpen: "navigation" === l,
                          onClickAccountPayment: Y,
                          showAccountPaymentMenuItem: !1 === O && U,
                          onClickCustomerPortal: $,
                          showCustomerPortalMenuItem: et,
                          onDeleteHistory: ee,
                          onNewThread: X,
                          showNewThreadButton: !0,
                          children: er,
                        })
                      : (0, p.jsx)(v.M, {
                          initial: !1,
                          children:
                            !z &&
                            (0, p.jsx)(
                              b.E.div,
                              {
                                className:
                                  "dark hidden w-[260px] flex-shrink-0 flex-col overflow-x-hidden bg-gray-900 md:flex",
                                initial: { width: 0 },
                                animate: {
                                  width: 260,
                                  transition: {
                                    duration: 0.2,
                                    ease: "easeOut",
                                  },
                                },
                                exit: { width: 0 },
                                children: (0, p.jsx)("div", {
                                  className: "h-full w-[260px]",
                                  children: (0, p.jsx)(tu, {
                                    onClickAccountPayment: Y,
                                    showAccountPaymentMenuItem: !1 === O && U,
                                    onClickCustomerPortal: $,
                                    showCustomerPortalMenuItem: et,
                                    onDeleteHistory: ee,
                                    onNewThread: X,
                                    showNewThreadButton: !E,
                                    children: er,
                                  }),
                                }),
                              },
                              "navigation"
                            ),
                        }),
                  }),
                (0, p.jsx)("div", {
                  className: "relative flex h-full max-w-full flex-1",
                  children: (0, p.jsx)(
                    sL,
                    (0, f._)(
                      {
                        initialThreadData: i,
                        clientThreadId: n,
                        isLoading: o,
                        handleResetThread: X,
                        isSharedThread: r,
                      },
                      a
                    ),
                    n
                  ),
                }),
              ],
            });
          }),
          function (e) {
            var n = e.clientThreadId,
              t = e.isSharedThread;
            (0, P.ax)(n, t);
            var r = (0, P.UL)(n),
              a = (0, m._)((0, j.useState)(!1), 2),
              i = a[0],
              s = a[1],
              l = (0, m._)((0, j.useState)(!1), 2),
              u = l[0],
              c = l[1],
              d = (0, m._)((0, j.useState)(new Set()), 2),
              h = d[0],
              g = d[1],
              x = (0, m._)((0, j.useState)(""), 2),
              v = x[0],
              b = x[1],
              y = (0, m._)((0, j.useState)(""), 2),
              w = y[0],
              C = y[1],
              k = (0, m._)((0, j.useState)(!1), 2),
              _ = k[0],
              T = k[1];
            return (
              (0, j.useEffect)(
                function () {
                  c(!1), D.reset(), g(new Set()), C("");
                },
                [r.threadId]
              ),
              (0, p.jsx)(
                o,
                (0, f._)({}, e, {
                  showAccountPortalModal: i,
                  setShowAccountPortalModal: s,
                  activeSidebar: u,
                  setActiveSidebar: c,
                  activeRequests: h,
                  setActiveRequests: g,
                  newChatName: v,
                  setNewChatName: b,
                  userModifiedTitle: w,
                  setUserModifiedTitle: C,
                  sharingModalOpen: _,
                  setSharingModalOpen: T,
                })
              )
            );
          });
    },
    5759: function (e, n, t) {
      "use strict";
      t.d(n, {
        I: function () {
          return m;
        },
        Z: function () {
          return c;
        },
      });
      var r = t(4337),
        a = t(35250),
        i = t(34303);
      function o() {
        var e = (0, r._)([
          "flex p-4 bg-gray-50 dark:bg-white/5 rounded-md items-center gap-4 min-h-[71px]",
        ]);
        return (
          (o = function () {
            return e;
          }),
          e
        );
      }
      function s() {
        var e = (0, r._)(["w-10 text-2xl text-center"]);
        return (
          (s = function () {
            return e;
          }),
          e
        );
      }
      function l() {
        var e = (0, r._)(["flex-1 leading-5"]);
        return (
          (l = function () {
            return e;
          }),
          e
        );
      }
      function u() {
        var e = (0, r._)(["flex gap-4 flex-col text-sm"]);
        return (
          (u = function () {
            return e;
          }),
          e
        );
      }
      function c(e) {
        var n = e.icon,
          t = e.children;
        return (0, a.jsxs)(d, {
          children: [
            (0, a.jsx)(f, { children: n }),
            (0, a.jsx)(h, { children: t }),
          ],
        });
      }
      var d = i.Z.div(o()),
        f = i.Z.div(s()),
        h = i.Z.div(l()),
        m = i.Z.div(u());
    },
    697: function (e, n, t) {
      "use strict";
      t.d(n, {
        dT: function () {
          return h;
        },
        hZ: function () {
          return l;
        },
        iO: function () {
          return u;
        },
        p0: function () {
          return f;
        },
        wu: function () {
          return m;
        },
      });
      var r = t(81949),
        a = t(70079),
        i = t(81292),
        o = t(85023),
        s = t(74437),
        l = 3,
        u = [
          ["www.klarna.com", "server.shop.app"],
          ["apim.expedia.com", "kayak.com"],
          ["www.redfin.com", "plugins.zillow.com"],
        ],
        c = "oai/enabledPluginIds",
        d = (0, i.ZP)(function () {
          var e = Array.from(new Set(o.m.getItem(c)));
          return { enabledPluginIds: new Set(e.splice(0, l)) };
        });
      function f() {
        var e = (0, s.Z)().installedPlugins,
          n = d().enabledPluginIds;
        return (0, a.useMemo)(
          function () {
            return e.filter(function (e) {
              return n.has(e.id);
            });
          },
          [n, e]
        );
      }
      function h(e) {
        e.length > l ||
          d.setState(function () {
            return o.m.setItem(c, e), { enabledPluginIds: new Set(e) };
          });
      }
      function m(e) {
        d.setState(function (n) {
          if (n.enabledPluginIds.size >= l) return n;
          var t = (0, r._)(n.enabledPluginIds).concat([e]);
          return o.m.setItem(c, t), { enabledPluginIds: new Set(t) };
        });
      }
    },
    74437: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return l;
        },
      });
      var r = t(87762),
        a = t(70079),
        i = t(32787),
        o = t(24274),
        s = t(71204);
      function l() {
        var e = (0, i.kP)().session,
          n = (0, s.hz)(),
          t = (0, r.a)(
            ["installedAip"],
            function () {
              return o.ZP.getPlugins({
                offset: 0,
                limit: 20,
                isInstalled: !0,
                accessToken: null == e ? void 0 : e.accessToken,
              });
            },
            {
              enabled:
                n.has("tools3") && !!(null == e ? void 0 : e.accessToken),
              onError: function (e) {
                console.error(e);
              },
            }
          ),
          l = t.data,
          u = t.isLoading;
        return (0, a.useMemo)(
          function () {
            return { installedPlugins: l ? l.items : [], isLoading: u };
          },
          [l, u]
        );
      }
    },
    60382: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return u;
        },
      });
      var r = t(30331),
        a = t(87762),
        i = t(70079),
        o = t(32787),
        s = t(24274),
        l = t(32983);
      function u() {
        var e = (0, i.useContext)(l.QL).historyDisabled,
          n = (0, o.kP)(),
          t = n.session,
          u = n.loading,
          c = (0, a.a)(
            [e ? "historyDisabledModels" : "models"],
            function () {
              return s.ZP.getModels(
                (null == t ? void 0 : t.accessToken) || "",
                e
              );
            },
            {
              enabled: !!(!u && (null == t ? void 0 : t.accessToken)),
              placeholderData: {
                models: [
                  {
                    slug: "text-davinci-002-render",
                    max_tokens: 4097,
                    title: "Default",
                    description: "",
                    tags: [],
                  },
                ],
              },
              onError: function (e) {
                try {
                  r.Tb(e);
                } catch (e) {}
              },
            }
          ).data;
        return (0, i.useMemo)(
          function () {
            return {
              availableModels: c
                ? c.models.map(function (e) {
                    return {
                      id: e.slug,
                      maxTokens: e.max_tokens,
                      title: e.title,
                      description: e.description,
                      tags: e.tags,
                      enabledTools: e.enabled_tools,
                      properties: e.qualitative_properties,
                    };
                  })
                : [],
            };
          },
          [c]
        );
      }
    },
    44541: function (e, n, t) {
      "use strict";
      t.d(n, {
        BT: function () {
          return j;
        },
        CS: function () {
          return y;
        },
        G3: function () {
          return a;
        },
        ZP: function () {
          return C;
        },
        f_: function () {
          return p;
        },
        m0: function () {
          return b;
        },
        n2: function () {
          return g;
        },
        uU: function () {
          return x;
        },
        xt: function () {
          return w;
        },
      });
      var r,
        a,
        i = t(96237),
        o = t(39324),
        s = t(71209),
        l = t(81949),
        u = t(68555),
        c = t(70079),
        d = t(81292),
        f = t(51132),
        h = t(71204),
        m = t(75527);
      ((r = a || (a = {})).Model = "model"),
        (r.Temperature = "temperature"),
        (r.Context = "context");
      var g = new Set(["text-davinci-002-render-paid"]),
        p = "gpt-4",
        x = "model_cap_exceeded",
        v = (0, d.ZP)(function () {
          return { serverThreadIds: new Set() };
        });
      function b(e) {
        v.setState(function (n) {
          return {
            serverThreadIds: new Set((0, l._)(n.serverThreadIds).concat([e])),
          };
        });
      }
      var y = (0, d.ZP)()(
        (0, f.tJ)(
          function (e) {
            return {
              isoDate: "",
              setCapTimeout: function (n) {
                e(function () {
                  return { isoDate: n };
                });
              },
              clearCapTimeout: function () {
                e(function () {
                  return { isoDate: "" };
                });
              },
            };
          },
          { name: "oai/apps/capExpiresAt" }
        )
      );
      function j() {
        var e = y(function (e) {
            return e.isoDate;
          }),
          n = y(function (e) {
            return e.clearCapTimeout;
          }),
          t = Date.now(),
          r = e && new Date(e).getTime();
        return e && r && r <= t ? (n(), null) : e ? p : null;
      }
      function w(e, n) {
        var t;
        return e
          ? n[0].id
          : (null ===
              (t = n.find(function (e) {
                return e.id.includes("text-davinci");
              })) || void 0 === t
              ? void 0
              : t.id) || n[0].id;
      }
      function C(e, n, t) {
        var r = (0, u.useRouter)(),
          l = r.query,
          d = n || decodeURIComponent(l[a.Model] || ""),
          f = (0, h.hz)(),
          g = v().serverThreadIds,
          p = (0, m.XK)(t),
          x = (0, c.useMemo)(
            function () {
              if (0 !== e.length) {
                var n,
                  t = void 0 !== p && g.has(p),
                  r =
                    null ===
                      (n = e.find(function (e) {
                        return e.id === d;
                      })) || void 0 === n
                      ? void 0
                      : n.id,
                  a = (!t && r) || w(f.has("priority_driven_models_list"), e);
                return e.find(function (e) {
                  return e.id === a;
                });
              }
            },
            [e, f, d, p, g]
          ),
          b = parseFloat(l[a.Temperature] || "1"),
          y = (0, c.useCallback)(
            function (e, n) {
              r.replace(
                {
                  pathname: r.basePath,
                  query: (0, s._)(
                    (0, o._)({}, l),
                    (0, i._)({}, e, encodeURIComponent(n))
                  ),
                },
                void 0,
                { shallow: !0 }
              );
            },
            [l, r]
          );
        return (0, c.useMemo)(
          function () {
            return {
              temperature: b,
              modelBackend: (null == x ? void 0 : x.id) || "",
              onChangeModelSetting: y,
            };
          },
          [y, null == x ? void 0 : x.id, b]
        );
      }
    },
    75527: function (e, n, t) {
      "use strict";
      t.d(n, {
        tQ: function () {
          return S;
        },
        OX: function () {
          return k;
        },
        Zz: function () {
          return _;
        },
        ax: function () {
          return I;
        },
        XK: function () {
          return Z;
        },
        je: function () {
          return O;
        },
        GD: function () {
          return E;
        },
        U0: function () {
          return A;
        },
        oq: function () {
          return F;
        },
        Hk: function () {
          return q;
        },
        UL: function () {
          return R;
        },
        Kt: function () {
          return D;
        },
        GR: function () {
          return L;
        },
        qA: function () {
          return B;
        },
        u9: function () {
          return V;
        },
        nh: function () {
          return U;
        },
        lA: function () {
          return z;
        },
        dz: function () {
          return H;
        },
      });
      var r = t(39324),
        a = t(71209),
        i = t(87762),
        o = t(61888),
        s = t(68555),
        l = t(70079),
        u = t(81292),
        c = t(58392),
        d = t(32787),
        f = t(70216);
      t(59710);
      var h = t(57311),
        m = t(75179);
      t(44675).env.INTERNAL_API_URL;
      var g = t(69403),
        p = t(697),
        x = t(97688),
        v = t(60382),
        b = t(44541),
        y = t(24274),
        j = t(32983),
        w = "NEW:",
        C = 0;
      function k() {
        return "".concat(w).concat(C++);
      }
      function _(e) {
        return e.startsWith(w);
      }
      var T = {},
        M = (0, u.ZP)(
          (0, c.n)(function () {
            return {
              threads: {},
              clientNewThreadIdToServerIdMapping: {},
              threadRetainCounts: {},
            };
          })
        ),
        N = M.getState,
        P = M.setState,
        S = {
          getOrInitThread: function (e, n, t) {
            var r = S.resolveThreadId(e);
            return null != N().threads[r]
              ? N().threads[r]
              : (S.resetThread(e, n, t), N().threads[e]);
          },
          getServerThreadId: function (e) {
            return _(e) ? N().clientNewThreadIdToServerIdMapping[e] : e;
          },
          setServerIdForNewThread: function (e, n) {
            void 0 === N().clientNewThreadIdToServerIdMapping[e] &&
              P(function (t) {
                (t.threads[n] = t.threads[e]),
                  delete t.threads[e],
                  (t.clientNewThreadIdToServerIdMapping[e] = n);
              });
          },
          initThreadFromServerData: function (e, n) {
            var t,
              i,
              o,
              s,
              l,
              u,
              c,
              d,
              g,
              p,
              x =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              v = S.resolveThreadId(e);
            if (null != N().threads[v] || x) {
              var b =
                ((i =
                  null ===
                    (t = Object.values(n.mapping).find(function (e) {
                      return null === e.parent;
                    })) || void 0 === t
                    ? void 0
                    : t.id),
                (o = new Set()),
                (s = new Set()),
                (n.moderation_results || []).forEach(function (e) {
                  e.blocked
                    ? s.add(e.message_id)
                    : e.flagged && o.add(e.message_id);
                }),
                {
                  rootId: i,
                  mapping: Object.keys(n.mapping).reduce(function (e, t) {
                    var i,
                      l = n.mapping[t],
                      u = l.parent,
                      c = l.children,
                      d = (0, f._)(l, ["parent", "children"]),
                      g = n.mapping[t].message || h.Cv.createRootMessage();
                    return (
                      s.has(g.id) ? (i = m.sK) : o.has(g.id) && (i = m.Mf),
                      (e[t] = (0, r._)(
                        (0, a._)((0, r._)({}, d), {
                          message: g,
                          children: c || [],
                          parentId: u || "",
                          type: h.uV[g.author.role],
                        }),
                        i && { metadata: i }
                      )),
                      e
                    );
                  }, {}),
                  initialCurrentLeafId: n.current_node,
                  authorName: n.author_name,
                });
              if (
                (null === (l = N().threads[v]) || void 0 === l
                  ? void 0
                  : l.isLoading) !== !1
              ) {
                var y =
                    null !== (u = b.mapping) && void 0 !== u
                      ? u
                      : h.Cv.createTree(),
                  j = {
                    thread: y,
                    initialCurrentLeafId:
                      null !==
                        (d =
                          null !== (c = b.initialCurrentLeafId) && void 0 !== c
                            ? c
                            : b.rootId) && void 0 !== d
                        ? d
                        : "root",
                    threadId: v,
                    title: null !== (g = n.title) && void 0 !== g ? g : null,
                    lastModelUsed: (function e(n, t) {
                      var r,
                        a,
                        i = n[t];
                      return (
                        null == i
                          ? void 0
                          : null === (r = i.message) || void 0 === r
                          ? void 0
                          : null === (a = r.metadata) || void 0 === a
                          ? void 0
                          : a.model_slug
                      )
                        ? i.message.metadata.model_slug
                        : (null == i ? void 0 : i.parentId)
                        ? e(n, i.parentId)
                        : null;
                    })(b.mapping, b.initialCurrentLeafId),
                    pluginIds:
                      null !== (p = n.plugin_ids) && void 0 !== p ? p : [],
                    authorName: b.authorName,
                  },
                  w = new h.Cv(y),
                  C = j.initialCurrentLeafId;
                P(function (e) {
                  var n;
                  e.threads[v] = (0, a._)(
                    (0, r._)(
                      {},
                      null !== (n = e.threads[v]) && void 0 !== n ? n : {}
                    ),
                    {
                      initialThreadData: j,
                      tree: w,
                      currentLeafId: C,
                      isLoading: !1,
                    }
                  );
                }),
                  S.recomputeConversationTurns(
                    v,
                    N().threads[v].currentLeafId,
                    []
                  );
              }
            }
          },
          resetThread: function (e, n, t) {
            var r,
              a,
              i =
                ((a =
                  (null == n
                    ? void 0
                    : null === (r = n.enabledTools) || void 0 === r
                    ? void 0
                    : r.includes("tools3")) === !0
                    ? t.map(function (e) {
                        return e.id;
                      })
                    : []),
                {
                  thread: h.Cv.createTree(),
                  initialCurrentLeafId: "root",
                  threadId: null,
                  title: "New chat",
                  lastModelUsed: null,
                  pluginIds: a || [],
                  authorName: "",
                });
            S.deleteThread(e),
              P(function (t) {
                t.threads[e] = {
                  initialThreadData: i,
                  tree: new h.Cv(i.thread),
                  currentLeafId: i.initialCurrentLeafId,
                  conversationTurns: [],
                  currentModel: n,
                  isLoading: !_(e),
                };
              });
          },
          updateInitialThreadDataForNewThread: function (e, n, t) {
            P(function (r) {
              (r.threads[e].initialThreadData.lastModelUsed = n),
                (r.threads[e].initialThreadData.pluginIds = t);
            });
          },
          getThreadCurrentLeafId: function (e) {
            var n,
              t,
              r = S.resolveThreadId(e);
            return null !==
              (t =
                null === (n = N().threads[r]) || void 0 === n
                  ? void 0
                  : n.currentLeafId) && void 0 !== t
              ? t
              : "root";
          },
          setThreadCurrentLeafId: function (e, n) {
            var t,
              r,
              a = S.resolveThreadId(e);
            if (null != N().threads[a]) {
              P(function (e) {
                e.threads[a].currentLeafId = n;
              });
              var i = N();
              S.recomputeConversationTurns(
                a,
                n,
                null !==
                  (r =
                    null === (t = i.threads[a]) || void 0 === t
                      ? void 0
                      : t.conversationTurns) && void 0 !== r
                  ? r
                  : []
              );
            }
          },
          updateTree: function (e, n) {
            var t,
              r,
              a,
              i,
              o = S.resolveThreadId(e);
            if (!(null != N().threads[o])) {
              console.warn("Thread does not exist, cannot update tree: ", o);
              return;
            }
            n(S.getTree(e));
            var s = N(),
              l =
                null !==
                  (a =
                    null === (t = s.threads[o]) || void 0 === t
                      ? void 0
                      : t.currentLeafId) && void 0 !== a
                  ? a
                  : "root",
              u =
                null !==
                  (i =
                    null === (r = s.threads[o]) || void 0 === r
                      ? void 0
                      : r.conversationTurns) && void 0 !== i
                  ? i
                  : [];
            S.recomputeConversationTurns(o, l, u);
          },
          getTree: function (e) {
            var n,
              t,
              r = S.resolveThreadId(e);
            return null !==
              (t =
                null === (n = N().threads[r]) || void 0 === n
                  ? void 0
                  : n.tree) && void 0 !== t
              ? t
              : new h.Cv();
          },
          resolveThreadId: function (e) {
            var n;
            return null !== (n = N().clientNewThreadIdToServerIdMapping[e]) &&
              void 0 !== n
              ? n
              : e;
          },
          recomputeConversationTurns: function (e, n, t) {
            var r = S.resolveThreadId(e);
            P(function (e) {
              e.threads[r] &&
                (e.threads[r].conversationTurns =
                  S.computeThreadConversationTurns(r, n, t));
            });
          },
          computeThreadConversationTurns: function (e, n, t) {
            var r = S.resolveThreadId(e);
            return S.getTree(r)
              .getConversationTurns(n)
              .map(function (e, n) {
                var r = null == t ? void 0 : t[n];
                return (0, o.isEqual)(r, e) ? r : e;
              });
          },
          getThreadConversationTurns: function (e, n, t) {
            var r,
              a,
              i,
              o,
              s = S.resolveThreadId(e),
              l =
                null !==
                  (i =
                    null === (r = N().threads[s]) || void 0 === r
                      ? void 0
                      : r.currentLeafId) && void 0 !== i
                  ? i
                  : "root";
            return null != n && n !== l
              ? S.computeThreadConversationTurns(s, n, null != t ? t : [])
              : null !==
                  (o =
                    null === (a = N().threads[s]) || void 0 === a
                      ? void 0
                      : a.conversationTurns) && void 0 !== o
              ? o
              : [];
          },
          deleteThread: function (e) {
            P(function (n) {
              delete n.threads[e],
                delete n.clientNewThreadIdToServerIdMapping[e];
            });
          },
          retainThread: function (e) {
            P(function (n) {
              var t;
              n.threadRetainCounts[e] =
                (null !== (t = n.threadRetainCounts[e]) && void 0 !== t
                  ? t
                  : 0) + 1;
            }),
              clearTimeout(T[e]);
          },
          releaseThread: function (e) {
            null != N().threads[e] &&
              (P(function (n) {
                var t;
                n.threadRetainCounts[e] = Math.max(
                  (null !== (t = n.threadRetainCounts[e]) && void 0 !== t
                    ? t
                    : 0) - 1,
                  0
                );
              }),
              N().threadRetainCounts[e] > 0 ||
                (clearTimeout(T[e]),
                (T[e] = setTimeout(function () {
                  null == N().threads[e] ||
                    N().threadRetainCounts[e] > 0 ||
                    S.deleteThread(e);
                }, 3e4))));
          },
        },
        I = function (e, n) {
          var t = (0, s.useRouter)(),
            r = (0, d.kP)().session,
            a = (0, v.Z)().availableModels,
            o = (0, p.p0)(),
            u = (0, b.ZP)(a, null, e).modelBackend,
            c = (0, l.useMemo)(
              function () {
                return a.find(function (e) {
                  return e.id === u;
                });
              },
              [a, u]
            ),
            f = (0, l.useContext)(j.QL).historyDisabled;
          (0, i.a)(
            ["conversation", e],
            function () {
              return y.ZP.getConversation(
                e,
                null == r ? void 0 : r.accessToken
              );
            },
            {
              enabled:
                !_(e) &&
                (null == r ? void 0 : r.accessToken) !== void 0 &&
                !f &&
                !n,
              onError: function () {
                t.replace("/"),
                  x.m.danger("Unable to load conversation ".concat(e));
              },
              onSuccess: function (n) {
                n && S.initThreadFromServerData(e, n);
              },
            }
          ),
            (0, l.useEffect)(
              function () {
                c && S.getOrInitThread(e, c, o);
              },
              [e, c, o, t]
            );
        },
        Z = function (e) {
          return M(function (n) {
            return _(e) ? n.clientNewThreadIdToServerIdMapping[e] : e;
          });
        },
        R = function (e) {
          return M(function (n) {
            var t,
              r,
              a = S.resolveThreadId(e);
            return null !==
              (r =
                null === (t = n.threads[a]) || void 0 === t
                  ? void 0
                  : t.initialThreadData) && void 0 !== r
              ? r
              : Object.freeze({
                  thread: h.Cv.createTree(),
                  threadId: null,
                  initialCurrentLeafId: "root",
                  title: null,
                  lastModelUsed: null,
                });
          });
        },
        D = function (e) {
          return M(function (n) {
            var t,
              r,
              a = S.resolveThreadId(e);
            return (
              null !==
                (r =
                  null === (t = n.threads[a]) || void 0 === t
                    ? void 0
                    : t.isLoading) &&
              void 0 !== r &&
              r
            );
          });
        },
        L = function (e) {
          var n = M(function (n) {
            var t,
              r,
              a = S.resolveThreadId(e);
            return null === (t = n.threads[a]) || void 0 === t
              ? void 0
              : null === (r = t.initialThreadData) || void 0 === r
              ? void 0
              : r.pluginIds;
          });
          return (0, l.useMemo)(
            function () {
              return new Set(null != n ? n : []);
            },
            [n]
          );
        },
        F = function (e) {
          return M(function () {
            return S.getThreadCurrentLeafId(e);
          });
        },
        A = function (e, n) {
          var t = (0, l.useRef)([]);
          return M(function () {
            var r,
              a = S.getThreadConversationTurns(e, n, t.current);
            return (
              (t.current = a),
              null !== (r = null == a ? void 0 : a.length) && void 0 !== r
                ? r
                : 0
            );
          });
        },
        E = function (e, n, t) {
          var r = (0, l.useRef)([]);
          return M(function () {
            var a = S.getThreadConversationTurns(e, t, r.current);
            return (r.current = a), a[n];
          });
        },
        q = function (e) {
          var n = F(e);
          return (0, l.useMemo)(
            function () {
              var t,
                r,
                a = S.getThreadConversationTurns(e, n, []),
                i =
                  null !== (t = null == a ? void 0 : a.length) && void 0 !== t
                    ? t
                    : 0,
                o =
                  null !== (r = null == a ? void 0 : a[i - 1]) && void 0 !== r
                    ? r
                    : null;
              return 0 === i ? n : h.Cv.getRequestIdFromConversationTurn(o);
            },
            [n, e]
          );
        },
        B = function (e) {
          return M(function () {
            var n,
              t,
              r,
              a = S.resolveThreadId(e);
            return null !==
              (r =
                null === (n = N().threads[a]) || void 0 === n
                  ? void 0
                  : null === (t = n.initialThreadData) || void 0 === t
                  ? void 0
                  : t.title) && void 0 !== r
              ? r
              : "";
          });
        },
        O = function (e) {
          return M(function () {
            var n,
              t,
              r,
              a = S.resolveThreadId(e);
            return null !==
              (r =
                null === (n = N().threads[a]) || void 0 === n
                  ? void 0
                  : null === (t = n.initialThreadData) || void 0 === t
                  ? void 0
                  : t.authorName) && void 0 !== r
              ? r
              : "";
          });
        },
        U = function (e, n) {
          return M(function () {
            return S.getTree(e).getNode(n);
          });
        },
        z = function (e, n) {
          return M(function () {
            var t, r;
            return (
              null !==
                (r =
                  null === (t = S.getTree(e)) || void 0 === t
                    ? void 0
                    : t.getHasErrorFromNode(n)) &&
              void 0 !== r &&
              r
            );
          });
        },
        H = function (e, n) {
          return M(function () {
            var t, r;
            return (
              null !==
                (r =
                  null === (t = S.getTree(e)) || void 0 === t
                    ? void 0
                    : t.isMessageIncomplete(n)) &&
              void 0 !== r &&
              r
            );
          });
        },
        V = function (e, n) {
          return M(function () {
            var t = S.getTree(e);
            return null == t
              ? []
              : t
                  .getBranchFromLeaf(n)
                  .filter(function (e) {
                    return e.type !== g.Jq.Root;
                  })
                  .map(function (e) {
                    return e.message;
                  });
          });
        };
    },
    53086: function (e, n, t) {
      "use strict";
      t.d(n, {
        G: function () {
          return r;
        },
      });
      var r = {
        id: "chat",
        name: "ChatGPT",
        href: "/",
        theme: { icon: "openai", color: "#10a37f", activeColor: "#1a7f64" },
      };
    },
    77442: function (e, n, t) {
      "use strict";
      t.d(n, {
        Ui: function () {
          return h;
        },
        _G: function () {
          return a;
        },
        dD: function () {
          return d;
        },
        dQ: function () {
          return m;
        },
        lj: function () {
          return f;
        },
      });
      var r,
        a,
        i,
        o = t(96237),
        s = t(22830),
        l = t(70079);
      ((r = a || (a = {})).Small = "small"),
        (r.Medium = "medium"),
        (r.Large = "large"),
        (r.XLarge = "xlarge"),
        (r.Full = "full");
      var u =
        ((i = {}),
        (0, o._)(i, a.Small, 640),
        (0, o._)(i, a.Medium, 768),
        (0, o._)(i, a.Large, 1024),
        (0, o._)(i, a.XLarge, 1280),
        (0, o._)(i, a.Full, 1536),
        i);
      function c(e) {
        var n = function () {
            i(t(e));
          },
          t = function (e) {
            return window.matchMedia(e).matches;
          },
          r = (0, s._)((0, l.useState)(t(e)), 2),
          a = r[0],
          i = r[1];
        return (
          (0, l.useEffect)(
            function () {
              var t = window.matchMedia(e);
              return (
                n(),
                t.addListener
                  ? t.addListener(n)
                  : t.addEventListener("change", n),
                function () {
                  t.removeListener
                    ? t.removeListener(n)
                    : t.removeEventListener("change", n);
                }
              );
            },
            [e]
          ),
          a
        );
      }
      function d() {
        return c("(max-width: ".concat(u[a.Small], "px)"));
      }
      function f() {
        return c("(max-width: ".concat(u[a.Medium], "px)"));
      }
      function h() {
        return c("(max-width: ".concat(u[a.Large], "px)"));
      }
      function m() {
        var e = d(),
          n = f(),
          t = h(),
          r = c("(max-width: ".concat(u[a.XLarge], "px)"));
        return e ? a.Small : n ? a.Medium : t ? a.Large : r ? a.XLarge : a.Full;
      }
    },
    57311: function (e, n, t) {
      "use strict";
      t.d(n, {
        Cv: function () {
          return _;
        },
        uV: function () {
          return j;
        },
      });
      var r,
        a,
        i = t(51217),
        o = t(53596),
        s = t(54084),
        l = t(49406),
        u = t(31819),
        c = t(96237),
        d = t(39324),
        f = t(70216),
        h = t(81949),
        m = t(74050),
        g = t(84251),
        p = t.n(g),
        x = t(8844),
        v = t(75179),
        b = t(69403),
        y =
          ((r = {}),
          (0, c._)(r, b.Jq.Root, b.uU.Unknown),
          (0, c._)(r, b.Jq.Prompt, b.uU.User),
          (0, c._)(r, b.Jq.Completion, b.uU.Assistant),
          (0, c._)(r, b.Jq.System, b.uU.System),
          r),
        j =
          ((a = {}),
          (0, c._)(a, b.uU.Unknown, b.Jq.Root),
          (0, c._)(a, b.uU.System, b.Jq.System),
          (0, c._)(a, b.uU.User, b.Jq.Prompt),
          (0, c._)(a, b.uU.Assistant, b.Jq.Completion),
          (0, c._)(a, b.uU.Critic, b.Jq.Completion),
          (0, c._)(a, b.uU.Tool, b.Jq.Completion),
          a);
      function w(e) {
        var n = (0, x.Z)();
        return "".concat(e).concat(n.substring(e.length));
      }
      var C = new WeakMap(),
        k = new WeakMap(),
        _ = (function () {
          function e(n) {
            (0, i._)(this, e),
              (0, s._)(this, C, { writable: !0, value: void 0 }),
              (0, s._)(this, k, { writable: !0, value: void 0 }),
              (0, l._)(this, C, n || e.createTree());
            var t = Object.values((0, o._)(this, C)).find(function (e) {
              return e.type === b.Jq.Root;
            });
            (0, l._)(this, k, (null == t ? void 0 : t.id) || "root");
          }
          var n = e.prototype;
          return (
            (n.getNode = function (e) {
              return (0, o._)(this, C)[e];
            }),
            (n.getMessage = function (e) {
              return (0, o._)(this, C)[e].message;
            }),
            (n.getMessageId = function (e) {
              try {
                return (0, o._)(this, C)[e].message.id;
              } catch (n) {
                throw (
                  (console.error(
                    "Tree: Unable to getMessageId for node ".concat(e)
                  ),
                  n)
                );
              }
            }),
            (n.getMetadata = function (e) {
              return (0, o._)(this, C)[e].metadata;
            }),
            (n.getLeafFromNode = function (e) {
              for (var n = (0, o._)(this, C)[e]; ; ) {
                if (0 === n.children.length) return n;
                n = (0, o._)(this, C)[n.children.values().next().value];
              }
            }),
            (n.getParent = function (e) {
              var n = (0, o._)(this, C)[e].parentId;
              return (0, o._)(this, C)[n];
            }),
            (n.getParentId = function (e) {
              var n;
              return (
                (null === (n = this.getParent(e)) || void 0 === n
                  ? void 0
                  : n.id) || "root"
              );
            }),
            (n.getBranchFromLeaf = function (e) {
              for (
                var n = [], t = (0, o._)(this, C)[e];
                n.push(t), "root" !== t.type;

              )
                t = (0, o._)(this, C)[t.parentId];
              return n.reverse();
            }),
            (n.getChildrenFromNode = function (e) {
              var n = this,
                t = (0, o._)(this, C)[e];
              return t
                ? Array.from(t.children).map(function (e) {
                    return (0, o._)(n, C)[e];
                  })
                : [];
            }),
            (n.getFirstPrompt = function () {
              for (var e, n, t = this.getNode((0, o._)(this, k)); ; ) {
                if (!t) return;
                if (
                  t.type === b.Jq.Prompt ||
                  (t.type === b.Jq.System &&
                    (null === (e = t.message.metadata) || void 0 === e
                      ? void 0
                      : e.upload_filename))
                )
                  return t;
                t = (0, o._)(this, C)[
                  null === (n = t.children) || void 0 === n ? void 0 : n[0]
                ];
              }
            }),
            (n.isMessageIncomplete = function (n) {
              var t = this.getMessage(n);
              return e.getIsIncompleteFromMessage(t);
            }),
            (n.addNodeToEnd = function (e, n) {
              if (!(0, o._)(this, C)[e]) return (0, c._)({}, n.id, n);
              (0, l._)(
                this,
                C,
                p()(
                  (0, o._)(this, C),
                  (0, c._)({ $merge: (0, c._)({}, n.id, n) }, e, {
                    children: {
                      $apply: function (e) {
                        return Array.from(new Set((0, h._)(e).concat([n.id])));
                      },
                    },
                  })
                )
              );
            }),
            (n.appendSystemMessageToRoot = function (e) {
              var n,
                t,
                r =
                  null === (n = this.getFirstPrompt()) || void 0 === n
                    ? void 0
                    : n.parentId;
              if (r) {
                var a = this.getNode(r),
                  i = this.getNode(a.children[0]),
                  s = {
                    id: e.id,
                    children: a.children,
                    parentId: a.id,
                    message: e,
                  };
                (0, l._)(
                  this,
                  C,
                  p()(
                    (0, o._)(this, C),
                    ((t = { $merge: (0, c._)({}, s.id, s) }),
                    (0, c._)(t, a.id, { children: { $set: [s.id] } }),
                    (0, c._)(t, i.id, { parentId: { $set: s.id } }),
                    t)
                  )
                );
              }
            }),
            (n.addNode = function (e, n, t, r, a) {
              var i =
                  "string" == typeof n
                    ? {
                        id: w("aaa2"),
                        author: { role: y[r] },
                        content: { content_type: "text", parts: [n] },
                      }
                    : n,
                o = (0, d._)(
                  { id: e, children: [], parentId: t, type: r, message: i },
                  a ? { metadata: a } : {}
                );
              this.addNodeToEnd(t, o);
            }),
            (n.updateNode = function (e, n) {
              (0, l._)(this, C, p()((0, o._)(this, C), (0, c._)({}, e, n)));
            }),
            (n.updateNodeMessage = function (e, n) {
              (0, l._)(
                this,
                C,
                p()(
                  (0, o._)(this, C),
                  (0, c._)({}, e, { message: { $set: n } })
                )
              );
            }),
            (n.updateNodeText = function (e, n) {
              (0, l._)(
                this,
                C,
                p()(
                  (0, o._)(this, C),
                  (0, c._)({}, e, {
                    message: { content: { parts: { $set: [n] } } },
                  })
                )
              );
            }),
            (n.deleteNode = function (e) {
              var n = (0, o._)(this, C),
                t = n[e],
                r = (0, f._)(n, [e].map(m._)),
                a = t.parentId;
              (0, l._)(
                this,
                C,
                p()(
                  r,
                  (0, c._)({}, a, {
                    children: {
                      $apply: function (n) {
                        return n.filter(function (n) {
                          return n !== e;
                        });
                      },
                    },
                  })
                )
              );
            }),
            (n.getTextFromNode = function (n) {
              return e.getTextFromMessage(this.getMessage(n));
            }),
            (n.getHasErrorFromNode = function (e) {
              var n,
                t,
                r = this.getNode(e);
              return (
                r &&
                ((null === (n = r.metadata) || void 0 === n
                  ? void 0
                  : n.errType) === "danger" ||
                  (null === (t = r.metadata) || void 0 === t
                    ? void 0
                    : t.errType) === "warning")
              );
            }),
            (n.getIsBlockedFromNode = function (e) {
              var n,
                t,
                r = this.getNode(e);
              return (
                r &&
                (null === (n = r.metadata) || void 0 === n
                  ? void 0
                  : n.errCode) === v.Dd &&
                (null === (t = r.metadata) || void 0 === t
                  ? void 0
                  : t.errType) === "danger"
              );
            }),
            (n.getTextFromThread = function (n) {
              return this.getBranchFromLeaf(n)
                .filter(function (e) {
                  return e.type !== b.Jq.Root && e.type !== b.Jq.System;
                })
                .map(function (n) {
                  return e.getTextFromMessage(n.message);
                })
                .join("\n\n");
            }),
            (n.shouldFilterNode = function (e) {
              var n = e.message,
                t = n.content.content_type,
                r = e.message.author.role === b.uU.System,
                a = e.message.author.role === b.uU.Tool,
                i = "all" !== n.recipient;
              return (
                r ||
                i ||
                (a &&
                  !(
                    "code" === t ||
                    "execution_output" === t ||
                    "system_error" === t
                  ))
              );
            }),
            (n.getTextFromTurnsById = function (e) {
              var n = this;
              return e
                .map(function (e) {
                  return n.getNode(e);
                })
                .filter(function (e) {
                  return !n.shouldFilterNode(e);
                })
                .map(function (e) {
                  return n.getTextFromNode(e.id);
                })
                .join("\n\n");
            }),
            (n.getTextFromLastNTurns = function (n, t) {
              var r =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
              return this.getConversationTurns(n, this.shouldFilterNode)
                .slice(-t)
                .map(function (n) {
                  var t = n.messages
                    .map(function (n) {
                      return e.getTextFromMessage(n.message);
                    })
                    .filter(function (e) {
                      return "" !== e;
                    })
                    .join("\n");
                  return r ? "[".concat(n.role, "]\n").concat(t) : t;
                })
                .join("\n");
            }),
            (n.getConversationTurns = function (e, n) {
              var t = this,
                r = [];
              return (
                this.getBranchFromLeaf(e).forEach(function (e) {
                  var a = e.id,
                    i = e.parentId,
                    s = e.message,
                    l = e.metadata;
                  if (null == n || !n(e)) {
                    var u = r[r.length - 1];
                    (null == u ? void 0 : u.role) === s.author.role ||
                    s.author.role === b.uU.Tool
                      ? r[r.length - 1].messages.push(
                          (0, d._)({ nodeId: a, parentId: i, message: s }, l)
                        )
                      : r.push({
                          role: s.author.role,
                          messages: [
                            (0, d._)({ nodeId: a, parentId: i, message: s }, l),
                          ],
                          variantIds: i
                            ? Array.from((0, o._)(t, C)[i].children)
                            : [a],
                        });
                  }
                }),
                r
              );
            }),
            (n.getLastValidNode = function (e) {
              for (
                var n, t = this.getNode(e);
                t &&
                t &&
                (null === (n = t.metadata) || void 0 === n ? void 0 : n.err);

              )
                t = this.getNode(t.parentId);
              return t;
            }),
            (n.getParentPromptNode = function (e) {
              for (
                var n, t = this.getNode(e);
                t &&
                t &&
                (null === (n = t.message) || void 0 === n
                  ? void 0
                  : n.author.role) !== b.uU.User;

              )
                t = this.getNode(t.parentId);
              return t;
            }),
            (n.unstable_getMapping = function () {
              return (0, o._)(this, C);
            }),
            (e.createTree = function () {
              return {
                root: {
                  id: "root",
                  children: [],
                  parentId: "",
                  type: b.Jq.Root,
                  message: e.createRootMessage(),
                },
              };
            }),
            (e.createRootMessage = function () {
              return {
                id: w("aaa1"),
                author: { role: y[b.Jq.Root] },
                content: { content_type: "text", parts: [] },
              };
            }),
            (e.getIsIncompleteFromMessage = function (e) {
              var n, t;
              return (
                (null === (n = e.metadata) || void 0 === n
                  ? void 0
                  : null === (t = n.finish_details) || void 0 === t
                  ? void 0
                  : t.type) === "max_tokens"
              );
            }),
            (e.getWasInterruptedFromMessage = function (e) {
              var n, t;
              return (
                (null === (n = e.metadata) || void 0 === n
                  ? void 0
                  : null === (t = n.finish_details) || void 0 === t
                  ? void 0
                  : t.type) === "interrupted"
              );
            }),
            (e.getIsContinuedFromMessage = function (e) {
              var n;
              return (
                (null === (n = e.metadata) || void 0 === n
                  ? void 0
                  : n.message_type) === "continue"
              );
            }),
            (e.getModelFromMessage = function (e) {
              var n;
              return null === (n = e.metadata) || void 0 === n
                ? void 0
                : n.model_slug;
            }),
            (e.getTextFromMessage = function (e) {
              switch (e.content.content_type) {
                case "text":
                  return e.content.parts.join("");
                case "tether_browsing_code":
                case "code":
                case "execution_output":
                case "system_error":
                  return e.content.text;
                case "system_message":
                  var n = e.content.text,
                    t = !0,
                    r = !1,
                    a = void 0;
                  try {
                    for (
                      var i,
                        o = Object.values(e.content.tools_section)[
                          Symbol.iterator
                        ]();
                      !(t = (i = o.next()).done);
                      t = !0
                    ) {
                      var s = i.value;
                      n += "\n\n".concat(s);
                    }
                  } catch (e) {
                    (r = !0), (a = e);
                  } finally {
                    try {
                      t || null == o.return || o.return();
                    } finally {
                      if (r) throw a;
                    }
                  }
                  return n;
                default:
                  return "";
              }
            }),
            (e.getRequestIdFromConversationTurn = function (e) {
              var n = e.messages[e.messages.length - 1];
              return this.getIsContinuedFromMessage(n.message)
                ? n.nodeId
                : e.messages[0].nodeId;
            }),
            (e.getRecipientFromMessage = function (e) {
              return e.recipient || "";
            }),
            (0, u._)(e, [
              {
                key: "isFirstCompletion",
                get: function () {
                  var e = this.getFirstPrompt();
                  if (e) {
                    var n = (0, o._)(this, C)[e.children[0]];
                    if (n && 0 === n.children.length) return !0;
                  }
                  return !1;
                },
              },
            ]),
            e
          );
        })();
    },
    19051: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return a;
        },
      });
      var r = t(70079);
      function a() {
        var e = (0, r.useRef)([]),
          n = (0, r.useRef)(function (n, t) {
            var r = setTimeout(n, t);
            return e.current.push(r), r;
          });
        return (
          (0, r.useEffect)(function () {
            var n = e.current;
            return function () {
              n.forEach(function (e) {
                clearTimeout(e);
              });
            };
          }, []),
          n.current
        );
      }
    },
    75179: function (e, n, t) {
      "use strict";
      t.d(n, {
        Dd: function () {
          return o;
        },
        Mf: function () {
          return s;
        },
        _I: function () {
          return u;
        },
        sK: function () {
          return l;
        },
      });
      var r = t(95182),
        a = t.n(r),
        i = t(24274),
        o = "content_policy",
        s = { errType: "warning", errCode: o },
        l = {
          err: "Contents may violate our content policy",
          errType: "danger",
          errCode: o,
        };
      function u(e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          t = arguments.length > 2 ? arguments[2] : void 0,
          r = arguments.length > 3 ? arguments[3] : void 0,
          o = a()(e.length, 0, 4e3),
          s = a()(e.length - o, 0, e.length - 1),
          l = n ? e.substring(s, e.length) : e;
        return !1
          ? i.ZP.runModerationApi(l, t, r)
              .then(function (e) {
                return { isBlocked: !!e.blocked, isFlagged: !!e.flagged };
              })
              .catch(function (e) {
                return (
                  console.error(e), { isBlocked: !1, isFlagged: !1, error: e }
                );
              })
          : Promise.resolve({ isBlocked: !1, isFlagged: !1 });
      }
    },
    41402: function () {},
  },
]);
