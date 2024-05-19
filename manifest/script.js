import { TemplateEngine } from "./templateEngine.js";
import { JsonToHtml } from "./jsonToHtml.js";

let docpageData = {};

const docPageTemplate = {
	tag: "div",
	children: [
		{
			tag: "div",
			attributes: {
				class: "overlay",
			},
		},
		{
			tag: "div",
			attributes: {
				class: "navbar-container container is-fullhd",
			},
			children: [
				{
					tag: "nav",
					attributes: {
						id: "nav",
						class: "container is-fullhd",
					},
					children: [
						{
							tag: "header",
							children: [
								{
									tag: "div",
									attributes: {
										class: "hamburger-icon-container",
									},
									children: [
										{
											tag: "span",
										},
										{
											tag: "span",
										},
										{
											tag: "span",
										},
									],
								},
								{
									tag: "img",
									attributes: {
										class: "main-logo-img",
										src: "./assets/logo.png",
									},
								},
								{
									tag: "img",
									attributes: {
										class: "backup-img",
										src: "./assets/logo-small.png",
										alt: "Logo small",
									},
								},
								{
									tag: "div",
									attributes: {
										class: "left-nav display-flex-2x2-wrap is-align-items-center",
									},
									children: [
										{
											tag: "span",
											attributes: {
												class: "bars",
											},
											children: [
												{
													tag: "i",
													attributes: {
														class: "fa-solid fa-bars",
													},
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "input-cont",
											},
											children: [
												{
													tag: "span",
													children: [
														{
															tag: "i",
															attributes: {
																class: "fa-solid fa-magnifying-glass",
															},
														},
													],
												},
												{
													tag: "input",
													attributes: {
														type: "text",
														placeholder: "Search..",
													},
												},
											],
										},
									],
								},
							],
						},
						{
							tag: "ul",
							children: [
								{
									tag: "li",
									children: [
										{
											tag: "details",
											attributes: {
												class: "dropdown",
											},
											children: [
												{
													tag: "summary",
													children: [
														{
															tag: "img",
															attributes: {
																src: "./assets/icons/flags/flags/in.png",
																alt: "Indian flag",
															},
														},
													],
												},
												{
													tag: "ul",
													attributes: {
														role: "nav-drop",
													},
													children: [
														{
															tag: "li",
															children: [
																{
																	tag: "img",
																	attributes: {
																		src: "./assets/icons/flags/flags/in.png",
																		alt: "Indian flag",
																	},
																},
																{
																	tag: "a",
																	attributes: {
																		href: "#",
																	},
																	content: "Indian",
																},
															],
														},
														{
															tag: "li",
															children: [
																{
																	tag: "img",
																	attributes: {
																		src: "./assets/icons/flags/flags/fr.png",
																		alt: "France flag",
																	},
																},
																{
																	tag: "a",
																	attributes: {
																		href: "#",
																	},
																	content: "France",
																},
															],
														},
														{
															tag: "li",
															children: [
																{
																	tag: "img",
																	attributes: {
																		src: "./assets/icons/flags/flags/ar.png",
																		alt: "Argentina flag",
																	},
																},
																{
																	tag: "a",
																	attributes: {
																		href: "#",
																	},
																	content: "Argentina",
																},
															],
														},
														{
															tag: "li",
															children: [
																{
																	tag: "img",
																	attributes: {
																		src: "./assets/icons/flags/flags/us.png",
																		alt: "American flag",
																	},
																},
																{
																	tag: "a",
																	attributes: {
																		href: "#",
																	},
																	content: "U.S.A",
																},
															],
														},
													],
												},
											],
										},
									],
								},
								{
									tag: "li",
									children: [
										{
											tag: "details",
											attributes: {
												class: "dropdown",
											},
											children: [
												{
													tag: "summary",
													children: [
														{
															tag: "i",
															attributes: {
																class: "fa-regular fa-bell",
															},
														},
													],
												},
												{
													tag: "ul",
													attributes: {
														role: "nav-drop",
													},
													children: [
														{
															tag: "div",
															attributes: {
																class: "nav-drop-heading",
															},
															children: [
																{
																	tag: "h2",
																	content: "Notifications",
																},
																{
																	tag: "p",
																	content: "clear all",
																},
															],
														},
														{
															tag: "li",
															children: [
																{
																	tag: "div",
																	attributes: {
																		class: "pro-img",
																	},
																	children: [
																		{
																			tag: "img",
																			attributes: {
																				src: "./assets/profiles/avatar-05.jpg",
																				alt: "",
																			},
																		},
																	],
																},
																{
																	tag: "div",
																	attributes: {
																		class: "pro-details",
																	},
																	children: [
																		{
																			tag: "p",
																			content:
																				"<span>priyanshi</span> approved <span>your estimate</span>",
																		},
																		{
																			tag: "p",
																			content: "4 mins ago",
																		},
																	],
																},
															],
														},
														{
															tag: "li",
															children: [
																{
																	tag: "div",
																	attributes: {
																		class: "pro-img",
																	},
																	children: [
																		{
																			tag: "img",
																			attributes: {
																				src: "./assets/profiles/avatar-02.jpg",
																				alt: "",
																			},
																		},
																	],
																},
																{
																	tag: "div",
																	attributes: {
																		class: "pro-details",
																	},
																	children: [
																		{
																			tag: "p",
																			content:
																				"<span>International Software Inc</span> has sent you a invoice in the amount of <span>$4</span>",
																		},
																		{
																			tag: "p",
																			content: "6 mins ago",
																		},
																	],
																},
															],
														},
														{
															tag: "li",
															children: [
																{
																	tag: "div",
																	attributes: {
																		class: "pro-img",
																	},
																	children: [
																		{
																			tag: "img",
																			attributes: {
																				src: "./assets/profiles/avatar-04.jpg",
																				alt: "",
																			},
																		},
																	],
																},
																{
																	tag: "div",
																	attributes: {
																		class: "pro-details",
																	},
																	children: [
																		{
																			tag: "p",
																			content:
																				"<span>John Hendry</span> sent a cancellation request <span>Apple iPhone XR</span>",
																		},
																		{
																			tag: "p",
																			content: "8 mins ago",
																		},
																	],
																},
															],
														},
														{
															tag: "li",
															children: [
																{
																	tag: "div",
																	attributes: {
																		class: "pro-img",
																	},
																	children: [
																		{
																			tag: "img",
																			attributes: {
																				src: "./assets/profiles/avatar-06.jpg",
																				alt: "",
																			},
																		},
																	],
																},
																{
																	tag: "div",
																	attributes: {
																		class: "pro-details",
																	},
																	children: [
																		{
																			tag: "p",
																			content:
																				"<span>Mercury Software Inc</span> added a new product <span>Apple MacBook Pro</span>",
																		},
																		{
																			tag: "p",
																			content: "12 mins ago",
																		},
																	],
																},
															],
														},
														{
															tag: "li",
															attributes: {
																class: "clear-msg",
															},
															children: [
																{
																	tag: "p",
																	content: "All Notifications cleared",
																},
															],
														},
														{
															tag: "div",
															attributes: {
																class: "nav-drop-heading nav-drop-heading-2",
															},
															children: [
																{
																	tag: "h2",
																	content: "View all notifications",
																},
															],
														},
													],
												},
											],
										},
									],
								},
								{
									tag: "li",
									attributes: {
										class: "main-pro",
									},
									children: [
										{
											tag: "details",
											attributes: {
												class: "dropdown",
											},
											children: [
												{
													tag: "summary",
													children: [
														{
															tag: "div",
															attributes: {
																class:
																	"main-profile display-flex-2x2-wrap is-align-items-flex-start",
															},
															children: [
																{
																	tag: "div",
																	attributes: {
																		class: "main-pro-img",
																	},
																	children: [
																		{
																			tag: "img",
																			attributes: {
																				src: "./assets/profiles/avatar-01.jpg",
																				alt: "Main profile image",
																			},
																		},
																	],
																},
																{
																	tag: "div",
																	attributes: {
																		class: "main-pro-right",
																	},
																	children: [
																		{
																			tag: "h5",
																			content: "Rahul Raj",
																		},
																		{
																			tag: "p",
																			content: "Administrator",
																		},
																	],
																},
																{
																	tag: "div",
																	attributes: {
																		class: "chevron-arr",
																	},
																	children: [
																		{
																			tag: "span",
																			children: [
																				{
																					tag: "i",
																					attributes: {
																						class: "fa-solid fa-chevron-down",
																					},
																				},
																			],
																		},
																	],
																},
															],
														},
														{
															tag: "div",
															attributes: {
																class: "substitute-pro-img-cont",
															},
															children: [
																{
																	tag: "img",
																	attributes: {
																		class: "subs-pro-img",
																		src: "./assets/profiles/avatar-01.jpg",
																		alt: "Main Profile image",
																	},
																},
															],
														},
													],
												},
												{
													tag: "ul",
													attributes: {
														role: "nav-drop",
													},
													children: [
														{
															tag: "li",
															children: [
																{
																	tag: "div",
																	attributes: {
																		class: "main-profile main-profile-2",
																	},
																	children: [
																		{
																			tag: "div",
																			attributes: {
																				class: "main-pro-img",
																			},
																			children: [
																				{
																					tag: "img",
																					attributes: {
																						src: "./assets/profiles/avatar-01.jpg",
																					},
																				},
																			],
																		},
																		{
																			tag: "div",
																			attributes: {
																				class: "main-pro-right",
																			},
																			children: [
																				{
																					tag: "h5",
																					content: "Rahul Raj",
																				},
																				{
																					tag: "p",
																					content: "Administrator",
																				},
																			],
																		},
																	],
																},
															],
														},
														{
															tag: "li",
															children: [
																{
																	tag: "a",
																	attributes: {
																		href: "#",
																	},
																	content: "My Profile",
																},
															],
														},
														{
															tag: "li",
															children: [
																{
																	tag: "a",
																	attributes: {
																		href: "#",
																	},
																	content: "Inbox",
																},
															],
														},
														{
															tag: "li",
															children: [
																{
																	tag: "a",
																	attributes: {
																		href: "#",
																	},
																	content: "Log out",
																},
															],
														},
													],
												},
											],
										},
									],
								},
							],
						},
					],
				},
			],
		},
		{
			tag: "div",
			attributes: {
				class: "sidebar-container container is-fullhd display-flex-2x2-wrap",
			},
			children: [
				{
					tag: "aside",
					attributes: {
						id: "sidebar",
						class: "sidebar",
					},
					children: [
						{
							tag: "nav",
							children: [
								{
									tag: "h5",
									content: "Main Menu",
								},
								{
									tag: "ul",
									children: [
										{
											tag: "div",
											attributes: {
												class: "revealer",
											},
											children: [
												{
													tag: "li",
													attributes: {
														class: "drop-instigater",
													},
													children: [
														{
															tag: "div",
															attributes: {
																class: "menus-cont",
															},
															children: [
																{
																	tag: "span",
																	children: [
																		{
																			tag: "i",
																			attributes: {
																				class: "fa-solid fa-gauge",
																			},
																		},
																	],
																},
																{
																	tag: "a",
																	attributes: {
																		href: "#",
																	},
																	content: "Dashboard",
																},
															],
														},
														{
															tag: "span",
															attributes: {
																class: "chevron-ri8",
															},
															children: [
																{
																	tag: "i",
																	attributes: {
																		class: "fa-solid fa-chevron-right",
																	},
																},
															],
														},
													],
												},
												{
													tag: "ul",
													attributes: {
														class: "reveal reveal-1",
													},
													children: [
														{
															tag: "li",
															content: "Admin Dashboard",
														},
														{
															tag: "li",
															content: "Teacher Dashboard",
														},
														{
															tag: "li",
															content: "Student Dashboard",
														},
													],
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "revealer",
											},
											children: [
												{
													tag: "li",
													attributes: {
														class: "drop-instigater",
													},
													children: [
														{
															tag: "div",
															attributes: {
																class: "menus-cont",
															},
															children: [
																{
																	tag: "span",
																	children: [
																		{
																			tag: "i",
																			attributes: {
																				class: "fa-solid fa-gauge",
																			},
																		},
																	],
																},
																{
																	tag: "a",
																	attributes: {
																		href: "#",
																	},
																	content: "Students",
																},
															],
														},
														{
															tag: "span",
															attributes: {
																class: "chevron-ri8",
															},
															children: [
																{
																	tag: "i",
																	attributes: {
																		class: "fa-solid fa-chevron-right",
																	},
																},
															],
														},
													],
												},
												{
													tag: "ul",
													attributes: {
														class: "reveal reveal-2",
													},
													children: [
														{
															tag: "li",
															content: "Student List",
														},
														{
															tag: "li",
															content: "Student View",
														},
														{
															tag: "li",
															content: "Student Add",
														},
														{
															tag: "li",
															content: "Student Edit",
														},
													],
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "revealer",
											},
											children: [
												{
													tag: "li",
													attributes: {
														class: "drop-instigater",
													},
													children: [
														{
															tag: "div",
															attributes: {
																class: "menus-cont",
															},
															children: [
																{
																	tag: "span",
																	children: [
																		{
																			tag: "i",
																			attributes: {
																				class: "fa-solid fa-gauge",
																			},
																		},
																	],
																},
																{
																	tag: "a",
																	attributes: {
																		href: "#",
																	},
																	content: "Teachers",
																},
															],
														},
														{
															tag: "span",
															attributes: {
																class: "chevron-ri8",
															},
															children: [
																{
																	tag: "i",
																	attributes: {
																		class: "fa-solid fa-chevron-right",
																	},
																},
															],
														},
													],
												},
												{
													tag: "ul",
													attributes: {
														class: "reveal reveal-3",
													},
													children: [
														{
															tag: "li",
															content: "Teacher List",
														},
														{
															tag: "li",
															content: "Teacher View",
														},
														{
															tag: "li",
															content: "Teacher Add",
														},
														{
															tag: "li",
															content: "Teacher Edit",
														},
													],
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "revealer",
											},
											children: [
												{
													tag: "li",
													attributes: {
														class: "drop-instigater",
													},
													children: [
														{
															tag: "div",
															attributes: {
																class: "menus-cont",
															},
															children: [
																{
																	tag: "span",
																	children: [
																		{
																			tag: "i",
																			attributes: {
																				class: "fa-solid fa-gauge",
																			},
																		},
																	],
																},
																{
																	tag: "a",
																	attributes: {
																		href: "#",
																	},
																	content: "Departments",
																},
															],
														},
														{
															tag: "span",
															attributes: {
																class: "chevron-ri8",
															},
															children: [
																{
																	tag: "i",
																	attributes: {
																		class: "fa-solid fa-chevron-right",
																	},
																},
															],
														},
													],
												},
												{
													tag: "ul",
													attributes: {
														class: "reveal reveal-4",
													},
													children: [
														{
															tag: "li",
															content: "Department List",
														},
														{
															tag: "li",
															content: "Department Add",
														},
														{
															tag: "li",
															content: "Department Edit",
														},
													],
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "revealer",
											},
											children: [
												{
													tag: "li",
													attributes: {
														class: "drop-instigater",
													},
													children: [
														{
															tag: "div",
															attributes: {
																class: "menus-cont",
															},
															children: [
																{
																	tag: "span",
																	children: [
																		{
																			tag: "i",
																			attributes: {
																				class: "fa-solid fa-gauge",
																			},
																		},
																	],
																},
																{
																	tag: "a",
																	attributes: {
																		href: "#",
																	},
																	content: "Subjects",
																},
															],
														},
														{
															tag: "span",
															attributes: {
																class: "chevron-ri8",
															},
															children: [
																{
																	tag: "i",
																	attributes: {
																		class: "fa-solid fa-chevron-right",
																	},
																},
															],
														},
													],
												},
												{
													tag: "ul",
													attributes: {
														class: "reveal reveal-5",
													},
													children: [
														{
															tag: "li",
															content: "Subject List",
														},
														{
															tag: "li",
															content: "Subject Add",
														},
														{
															tag: "li",
															content: "Subject Edit",
														},
													],
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "revealer",
											},
											children: [
												{
													tag: "li",
													attributes: {
														class: "drop-instigater",
													},
													children: [
														{
															tag: "div",
															attributes: {
																class: "menus-cont",
															},
															children: [
																{
																	tag: "span",
																	children: [
																		{
																			tag: "i",
																			attributes: {
																				class: "fa-solid fa-gauge",
																			},
																		},
																	],
																},
																{
																	tag: "a",
																	attributes: {
																		href: "#",
																	},
																	content: "Invoices",
																},
															],
														},
														{
															tag: "span",
															attributes: {
																class: "chevron-ri8",
															},
															children: [
																{
																	tag: "i",
																	attributes: {
																		class: "fa-solid fa-chevron-right",
																	},
																},
															],
														},
													],
												},
												{
													tag: "ul",
													attributes: {
														class: "reveal reveal-6",
													},
													children: [
														{
															tag: "li",
															content: "Invoices List",
														},
														{
															tag: "li",
															content: "Invoices Grid",
														},
														{
															tag: "li",
															content: "Add Invoices",
														},
														{
															tag: "li",
															content: "Edit Invoices",
														},
														{
															tag: "li",
															content: "Invoices Details",
														},
													],
												},
											],
										},
									],
								},
								{
									tag: "h5",
									content: "Management",
								},
								{
									tag: "ul",
									children: [
										{
											tag: "div",
											attributes: {
												class: "revealer",
											},
											children: [
												{
													tag: "li",
													attributes: {
														class: "drop-instigater",
													},
													children: [
														{
															tag: "div",
															attributes: {
																class: "menus-cont",
															},
															children: [
																{
																	tag: "span",
																	children: [
																		{
																			tag: "i",
																			attributes: {
																				class: "fa-solid fa-file-invoice",
																			},
																		},
																	],
																},
																{
																	tag: "a",
																	attributes: {
																		href: "#",
																	},
																	content: "Accounts",
																},
															],
														},
														{
															tag: "span",
															attributes: {
																class: "chevron-ri8",
															},
															children: [
																{
																	tag: "i",
																	attributes: {
																		class: "fa-solid fa-chevron-right",
																	},
																},
															],
														},
													],
												},
												{
													tag: "ul",
													attributes: {
														class: "reveal",
													},
													children: [
														{
															tag: "li",
															content: "Fees Collection",
														},
														{
															tag: "li",
															content: "Expenses",
														},
														{
															tag: "li",
															content: "Salary",
														},
													],
												},
											],
										},
										{
											tag: "li",
											children: [
												{
													tag: "div",
													attributes: {
														class: "menus-cont",
													},
													children: [
														{
															tag: "span",
															children: [
																{
																	tag: "i",
																	attributes: {
																		class: "fa-solid fa-gift",
																	},
																},
															],
														},
														{
															tag: "a",
															attributes: {
																href: "#",
															},
															content: "Holiday",
														},
													],
												},
											],
										},
										{
											tag: "li",
											children: [
												{
													tag: "div",
													attributes: {
														class: "menus-cont",
													},
													children: [
														{
															tag: "span",
															children: [
																{
																	tag: "i",
																	attributes: {
																		class: "fa-solid fa-money-bill-wave",
																	},
																},
															],
														},
														{
															tag: "a",
															attributes: {
																href: "#",
															},
															content: "Fees",
														},
													],
												},
											],
										},
									],
								},
							],
						},
					],
				},
				{
					tag: "main",
					attributes: {
						id: "main",
						class: "",
					},
					children: [
						{
							tag: "div",
							attributes: {
								class:
									"heading-container display-flex-2x2-wrap is-justify-content-space-between is-align-items-flex-end",
							},
							children: [
								{
									tag: "h4",
									content: "Welcome Karan",
								},
								{
									tag: "p",
									content: "<span>Home</span> / Student",
								},
							],
						},
						{
							tag: "div",
							attributes: {
								class: "projects",
							},
							children: [
								{
									tag: "div",
									attributes: {
										class: "projects-container",
									},
									children: [
										{
											tag: "div",
											attributes: {
												class: "project project-1",
											},
											children: [
												{
													tag: "div",
													attributes: {
														class: "project-info",
													},
													children: [
														{
															tag: "p",
															content: "All Courses",
														},
														{
															tag: "h5",
															content: "04/06",
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "project-img",
													},
													children: [
														{
															tag: "img",
															attributes: {
																src: "./assets/main-imgs/Courses.svg",
																alt: "Courses",
															},
														},
													],
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "project project-2",
											},
											children: [
												{
													tag: "div",
													attributes: {
														class: "project-info",
													},
													children: [
														{
															tag: "p",
															content: "All Courses",
														},
														{
															tag: "h5",
															content: "40/60",
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "project-img",
													},
													children: [
														{
															tag: "img",
															attributes: {
																src: "./assets/main-imgs/Projects.svg",
																alt: "Courses",
															},
														},
													],
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "project project-3",
											},
											children: [
												{
													tag: "div",
													attributes: {
														class: "project-info",
													},
													children: [
														{
															tag: "p",
															content: "Test Attended",
														},
														{
															tag: "h5",
															content: "30/50",
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "project-img",
													},
													children: [
														{
															tag: "img",
															attributes: {
																src: "./assets/main-imgs/Tests-attended.svg",
																alt: "Courses",
															},
														},
													],
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "project project-4",
											},
											children: [
												{
													tag: "div",
													attributes: {
														class: "project-info",
													},
													children: [
														{
															tag: "p",
															content: "Test Passed",
														},
														{
															tag: "h5",
															content: "15/20",
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "project-img",
													},
													children: [
														{
															tag: "img",
															attributes: {
																src: "./assets/main-imgs/Tests-passed.svg",
																alt: "Courses",
															},
														},
													],
												},
											],
										},
									],
								},
							],
						},
						{
							tag: "div",
							attributes: {
								class: "student-grid",
							},
							children: [
								{
									tag: "div",
									attributes: {
										class: "student-grid-container",
									},
									// children: [
									// {
									// 	tag: "div",
									// 	attributes: {
									// 		class: "student-grid-item student-grid-item-1",
									// 	},
									children: [
										{
											tag: "div",
											attributes: {
												class: "student-grid-item student-grid-item-1",
											},
											children: [
												{
													tag: "div",
													attributes: {
														class: "student-gi-heading",
													},
													children: [
														{
															tag: "div",
															attributes: {
																class: "heading-left",
															},
															children: [
																{
																	tag: "h4",
																	content: "Today's Lesson",
																},
															],
														},
														{
															tag: "div",
															attributes: {
																class: "heading-right",
															},
															children: [
																{
																	tag: "div",
																	attributes: {
																		class: "dots",
																	},
																	children: [
																		{
																			tag: "span",
																		},
																		{
																			tag: "span",
																		},
																		{
																			tag: "span",
																		},
																	],
																},
																{
																	tag: "div",
																	attributes: {
																		class: "view-all",
																	},
																	children: [
																		{
																			tag: "span",
																			content: "View All",
																		},
																	],
																},
																{
																	tag: "div",
																	attributes: {
																		class: "menu-dots",
																	},
																	children: [
																		{
																			tag: "span",
																			children: [
																				{
																					tag: "i",
																					attributes: {
																						class: "fa-solid fa-ellipsis-vertical",
																					},
																				},
																			],
																		},
																	],
																},
															],
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "student-gi-1-content",
													},
													children: [
														{
															tag: "div",
															attributes: {
																class: "student-progress",
															},
															children: [
																{
																	tag: "h3",
																	content: "80%",
																},
															],
														},
														{
															tag: "div",
															attributes: {
																class: "student-batch-det-1",
															},
															children: [
																{
																	tag: "div",
																	attributes: {
																		class: "middle-content",
																	},
																	children: [
																		{
																			tag: "div",
																			attributes: {
																				class: "icon",
																			},
																			children: [
																				{
																					tag: "span",
																					children: [
																						{
																							tag: "i",
																							attributes: {
																								class: "fa-solid fa-tv",
																							},
																						},
																					],
																				},
																			],
																		},
																		{
																			tag: "div",
																			attributes: {
																				class: "infos",
																			},
																			children: [
																				{
																					tag: "p",
																					attributes: {
																						class: "info-title",
																					},
																					content: "Class",
																				},
																				{
																					tag: "p",
																					content: "Electrical Engg",
																				},
																			],
																		},
																	],
																},
																{
																	tag: "div",
																	attributes: {
																		class: "middle-content",
																	},
																	children: [
																		{
																			tag: "div",
																			attributes: {
																				class: "icon",
																			},
																			children: [
																				{
																					tag: "span",
																					children: [
																						{
																							tag: "i",
																							attributes: {
																								class: "fa-solid fa-book-open",
																							},
																						},
																					],
																				},
																			],
																		},
																		{
																			tag: "div",
																			attributes: {
																				class: "infos",
																			},
																			children: [
																				{
																					tag: "p",
																					attributes: {
																						class: "info-title",
																					},
																					content: "Lessons",
																				},
																				{
																					tag: "p",
																					content: "5 Lessons",
																				},
																			],
																		},
																	],
																},
																{
																	tag: "div",
																	attributes: {
																		class: "middle-content",
																	},
																	children: [
																		{
																			tag: "div",
																			attributes: {
																				class: "icon",
																			},
																			children: [
																				{
																					tag: "span",
																					children: [
																						{
																							tag: "i",
																							attributes: {
																								class: "fa-regular fa-clock",
																							},
																						},
																					],
																				},
																			],
																		},
																		{
																			tag: "div",
																			attributes: {
																				class: "infos",
																			},
																			children: [
																				{
																					tag: "p",
																					attributes: {
																						class: "info-title",
																					},
																					content: "Time",
																				},
																				{
																					tag: "p",
																					content: "Lessons",
																				},
																			],
																		},
																	],
																},
															],
														},
														{
															tag: "div",
															attributes: {
																class: "student-batch-det-2",
															},
															children: [
																{
																	tag: "div",
																	attributes: {
																		class: "middle-content",
																	},
																	children: [
																		{
																			tag: "div",
																			attributes: {
																				class: "icon",
																			},
																			children: [
																				{
																					tag: "span",
																					children: [
																						{
																							tag: "i",
																							attributes: {
																								class: "fa-regular fa-clipboard",
																							},
																						},
																					],
																				},
																			],
																		},
																		{
																			tag: "div",
																			attributes: {
																				class: "infos",
																			},
																			children: [
																				{
																					tag: "p",
																					attributes: {
																						class: "info-title",
																					},
																					content: "Assignment",
																				},
																				{
																					tag: "p",
																					content: "5 Assignments",
																				},
																			],
																		},
																	],
																},
																{
																	tag: "div",
																	attributes: {
																		class: "middle-content",
																	},
																	children: [
																		{
																			tag: "div",
																			attributes: {
																				class: "icon",
																			},
																			children: [
																				{
																					tag: "span",
																					children: [
																						{
																							tag: "i",
																							attributes: {
																								class: "fa-regular fa-user",
																							},
																						},
																					],
																				},
																			],
																		},
																		{
																			tag: "div",
																			attributes: {
																				class: "infos",
																			},
																			children: [
																				{
																					tag: "p",
																					attributes: {
																						class: "info-title",
																					},
																					content: "Staff",
																				},
																				{
																					tag: "p",
																					content: "Dhyanendra",
																				},
																			],
																		},
																	],
																},
																{
																	tag: "div",
																	attributes: {
																		class: "middle-content",
																	},
																	children: [
																		{
																			tag: "div",
																			attributes: {
																				class: "icon",
																			},
																			children: [
																				{
																					tag: "span",
																					children: [
																						{
																							tag: "i",
																							attributes: {
																								class: "fa-solid fa-book",
																							},
																						},
																					],
																				},
																			],
																		},
																		{
																			tag: "div",
																			attributes: {
																				class: "infos",
																			},
																			children: [
																				{
																					tag: "p",
																					attributes: {
																						class: "info-title",
																					},
																					content: "Lesson Learned",
																				},
																				{
																					tag: "p",
																					content: "10/50",
																				},
																			],
																		},
																	],
																},
															],
														},
														{
															tag: "div",
															attributes: {
																class: "student-btns",
															},
															children: [
																{
																	tag: "div",
																	attributes: {
																		class: "student-btn student-btn-1",
																	},
																	children: [
																		{
																			tag: "button",
																			attributes: {
																				class: "primary-btn",
																			},
																			content: "Skip",
																		},
																	],
																},
																{
																	tag: "div",
																	attributes: {
																		class: "student-btn student-btn-2",
																	},
																	children: [
																		{
																			tag: "button",
																			attributes: {
																				class: "primary-btn",
																			},
																			content: "Continue",
																		},
																	],
																},
															],
														},
													],
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "student-grid-item student-grid-item-2",
											},
											children: [
												{
													tag: "div",
													attributes: {
														class: "student-gi-heading",
													},
													children: [
														{
															tag: "div",
															attributes: {
																class: "heading-left",
															},
															children: [
																{
																	tag: "h4",
																	content: "Learning Activity",
																},
															],
														},
														{
															tag: "div",
															attributes: {
																class: "heading-right",
															},
															children: [
																{
																	tag: "div",
																	attributes: {
																		class: "dots",
																	},
																	children: [
																		{
																			tag: "span",
																			attributes: {
																				class: "span-grid-2-dot-1",
																			},
																		},
																		{
																			tag: "p",
																			attributes: {
																				class: "span-grid-2-profession",
																			},
																			content: "Teacher",
																		},
																	],
																},
																{
																	tag: "div",
																	attributes: {
																		class: "view-all",
																	},
																	children: [
																		{
																			tag: "span",
																			attributes: {
																				class: "span-grid-2-dot-2",
																			},
																		},
																		{
																			tag: "p",
																			attributes: {
																				class: "span-grid-2-profession",
																			},
																			content: "Student",
																		},
																	],
																},
																{
																	tag: "div",
																	attributes: {
																		class: "menu-dots",
																	},
																	children: [
																		{
																			tag: "span",
																			children: [
																				{
																					tag: "i",
																					attributes: {
																						class: "fa-solid fa-ellipsis-vertical",
																					},
																				},
																			],
																		},
																	],
																},
															],
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "student-gi-1-content student-gi-2-content",
													},
													children: [
														{
															tag: "canvas",
															attributes: {
																id: "myChart",
															},
														},
													],
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "student-grid-item student-grid-item-3",
											},
											children: [
												{
													tag: "div",
													attributes: {
														class: "student-gi-heading",
													},
													children: [
														{
															tag: "div",
															attributes: {
																class: "heading-left",
															},
															children: [
																{
																	tag: "h4",
																	content: "Teaching History",
																},
															],
														},
														{
															tag: "div",
															attributes: {
																class: "heading-right",
															},
															children: [
																{
																	tag: "div",
																	attributes: {
																		class: "menu-dots",
																	},
																	children: [
																		{
																			tag: "span",
																			children: [
																				{
																					tag: "i",
																					attributes: {
																						class: "fa-solid fa-ellipsis-vertical",
																					},
																				},
																			],
																		},
																	],
																},
															],
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "student-gi-3-content",
													},
													children: [
														{
															tag: "div",
															attributes: {
																class: "student-gi-3-content-container",
															},
															children: [
																{
																	tag: "div",
																	attributes: {
																		class: "dates-left",
																	},
																	children: [
																		{
																			tag: "span",
																			content: "Sep22",
																		},
																	],
																},
																{
																	tag: "div",
																	attributes: {
																		class: "subs-middle",
																	},
																	children: [
																		{
																			tag: "div",
																			attributes: {
																				class: "subname",
																			},
																			content: "Mathematics",
																		},
																		{
																			tag: "div",
																			attributes: {
																				class: "sub-timeline",
																			},
																			children: [
																				{
																					tag: "div",
																					attributes: {
																						class: "sub-timeline-left",
																					},
																					children: [
																						{
																							tag: "span",
																							children: [
																								{
																									tag: "i",
																									attributes: {
																										class: "fa-regular fa-calendar",
																									},
																								},
																							],
																						},
																						{
																							content: " September 5, 2022",
																						},
																					],
																				},
																				{
																					tag: "div",
																					attributes: {
																						class: "sub-timeline-right",
																					},
																					children: [
																						{
																							tag: "span",
																							children: [
																								{
																									tag: "i",
																									attributes: {
																										class: "fa-regular fa-clock",
																									},
																								},
																							],
																						},
																						{
																							content: " 09:00am - 10:am (60 Minutes)",
																						},
																					],
																				},
																			],
																		},
																	],
																},
																{
																	tag: "div",
																	attributes: {
																		class: "subs-status-right",
																	},
																	children: [
																		{
																			tag: "button",
																			attributes: {
																				class: "primary-btn",
																			},
																			content: "In Progress",
																		},
																	],
																},
															],
														},
														{
															tag: "div",
															attributes: {
																class: "student-gi-3-content-container",
															},
															children: [
																{
																	tag: "div",
																	attributes: {
																		class: "dates-left",
																	},
																	children: [
																		{
																			tag: "span",
																			content: "Sep23",
																		},
																	],
																},
																{
																	tag: "div",
																	attributes: {
																		class: "subs-middle",
																	},
																	children: [
																		{
																			tag: "div",
																			attributes: {
																				class: "subname",
																			},
																			content: "Geography",
																		},
																		{
																			tag: "div",
																			attributes: {
																				class: "sub-timeline",
																			},
																			children: [
																				{
																					tag: "div",
																					attributes: {
																						class: "sub-timeline-left",
																					},
																					children: [
																						{
																							tag: "span",
																							children: [
																								{
																									tag: "i",
																									attributes: {
																										class: "fa-regular fa-calendar",
																									},
																								},
																							],
																						},
																						{
																							content: " September 5, 2022",
																						},
																					],
																				},
																				{
																					tag: "div",
																					attributes: {
																						class: "sub-timeline-right",
																					},
																					children: [
																						{
																							tag: "span",
																							children: [
																								{
																									tag: "i",
																									attributes: {
																										class: "fa-regular fa-clock",
																									},
																								},
																							],
																						},
																						{
																							content: " 09:00am - 10:am (60 Minutes)",
																						},
																					],
																				},
																			],
																		},
																	],
																},
																{
																	tag: "div",
																	attributes: {
																		class: "subs-status-right",
																	},
																	children: [
																		{
																			tag: "button",
																			attributes: {
																				class: "primary-btn",
																			},
																			content: "Completed",
																		},
																	],
																},
															],
														},
														{
															tag: "div",
															attributes: {
																class: "student-gi-3-content-container",
															},
															children: [
																{
																	tag: "div",
																	attributes: {
																		class: "dates-left no-abs",
																	},
																	children: [
																		{
																			tag: "span",
																			content: "Sep24",
																		},
																	],
																},
																{
																	tag: "div",
																	attributes: {
																		class: "subs-middle",
																	},
																	children: [
																		{
																			tag: "div",
																			attributes: {
																				class: "subname",
																			},
																			content: "Botany",
																		},
																		{
																			tag: "div",
																			attributes: {
																				class: "sub-timeline",
																			},
																			children: [
																				{
																					tag: "div",
																					attributes: {
																						class: "sub-timeline-left",
																					},
																					children: [
																						{
																							tag: "span",
																							children: [
																								{
																									tag: "i",
																									attributes: {
																										class: "fa-regular fa-calendar",
																									},
																								},
																							],
																						},
																						{
																							content: " September 5, 2022",
																						},
																					],
																				},
																				{
																					tag: "div",
																					attributes: {
																						class: "sub-timeline-right",
																					},
																					children: [
																						{
																							tag: "span",
																							children: [
																								{
																									tag: "i",
																									attributes: {
																										class: "fa-regular fa-clock",
																									},
																								},
																							],
																						},
																						{
																							content: " 09:00am - 10:am (60 Minutes)",
																						},
																					],
																				},
																			],
																		},
																	],
																},
																{
																	tag: "div",
																	attributes: {
																		class: "subs-status-right",
																	},
																	children: [
																		{
																			tag: "button",
																			attributes: {
																				class: "primary-btn",
																			},
																			content: "In Progress",
																		},
																	],
																},
															],
														},
													],
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "student-grid-item student-grid-item-4",
											},
											children: [
												{
													tag: "div",
													attributes: {
														class: "student-gi-heading",
													},
													children: [
														{
															tag: "div",
															attributes: {
																class: "heading-left",
															},
															children: [
																{
																	tag: "h4",
																	content: "Upcoming Events",
																},
															],
														},
														{
															tag: "div",
															attributes: {
																class: "heading-right",
															},
															children: [
																{
																	tag: "div",
																	attributes: {
																		class: "menu-dots",
																	},
																	children: [
																		{
																			tag: "span",
																			children: [
																				{
																					tag: "i",
																					attributes: {
																						class: "fa-solid fa-plus",
																					},
																				},
																			],
																		},
																	],
																},
															],
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "month-heading",
													},
													children: [
														{
															tag: "p",
															content: "10 Jan",
														},
														{
															tag: "span",
															children: [
																{
																	tag: "i",
																	attributes: {
																		class: "fa-solid fa-ellipsis",
																	},
																},
															],
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "events-container",
													},
													children: [
														{
															tag: "div",
															attributes: {
																class: "events-left-congregate",
															},
															children: [
																{
																	tag: "div",
																	attributes: {
																		class: "event-time-left",
																	},
																	children: [
																		{
																			tag: "span",
																			content: "08:00 am",
																		},
																	],
																},
																{
																	tag: "div",
																	attributes: {
																		class: "event-sub-middle",
																	},
																	children: [
																		{
																			tag: "p",
																			content: "Botany",
																		},
																		{
																			tag: "p",
																			content: "Lorem ipsum dolor sit",
																		},
																	],
																},
															],
														},
														{
															tag: "div",
															attributes: {
																class: "event-timings",
															},
															children: [
																{
																	tag: "span",
																	content: "08:00 - 09:00 am",
																},
															],
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "events-container",
													},
													children: [
														{
															tag: "div",
															attributes: {
																class: "events-left-congregate",
															},
															children: [
																{
																	tag: "div",
																	attributes: {
																		class: "event-time-left",
																	},
																	children: [
																		{
																			tag: "span",
																			content: "09:00 am",
																		},
																	],
																},
																{
																	tag: "div",
																	attributes: {
																		class: "event-sub-middle",
																	},
																	children: [
																		{
																			tag: "p",
																			content: "Botany",
																		},
																		{
																			tag: "p",
																			content: "Lorem ipsum dolor sit",
																		},
																	],
																},
															],
														},
														{
															tag: "div",
															attributes: {
																class: "event-timings",
															},
															children: [
																{
																	tag: "span",
																	content: "09:00 - 10:00 am",
																},
															],
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "events-container",
													},
													children: [
														{
															tag: "div",
															attributes: {
																class: "events-left-congregate",
															},
															children: [
																{
																	tag: "div",
																	attributes: {
																		class: "event-time-left",
																	},
																	children: [
																		{
																			tag: "span",
																			content: "10:00 am",
																		},
																	],
																},
																{
																	tag: "div",
																	attributes: {
																		class: "event-sub-middle",
																	},
																	children: [
																		{
																			tag: "p",
																			content: "Botany",
																		},
																		{
																			tag: "p",
																			content: "Lorem ipsum dolor sit",
																		},
																	],
																},
															],
														},
														{
															tag: "div",
															attributes: {
																class: "event-timings",
															},
															children: [
																{
																	tag: "span",
																	content: "10:00 - 11:00 am",
																},
															],
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "month-heading",
													},
													children: [
														{
															tag: "p",
															content: "10 Jan",
														},
														{
															tag: "span",
															children: [
																{
																	tag: "i",
																	attributes: {
																		class: "fa-solid fa-ellipsis",
																	},
																},
															],
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "events-container",
													},
													children: [
														{
															tag: "div",
															attributes: {
																class: "events-left-congregate",
															},
															children: [
																{
																	tag: "div",
																	attributes: {
																		class: "event-time-left",
																	},
																	children: [
																		{
																			tag: "span",
																			content: "08:00 am",
																		},
																	],
																},
																{
																	tag: "div",
																	attributes: {
																		class: "event-sub-middle",
																	},
																	children: [
																		{
																			tag: "p",
																			content: "Botany",
																		},
																		{
																			tag: "p",
																			content: "Lorem ipsum dolor sit",
																		},
																	],
																},
															],
														},
														{
															tag: "div",
															attributes: {
																class: "event-timings",
															},
															children: [
																{
																	tag: "span",
																	content: "08:00 - 09:00 am",
																},
															],
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "events-container",
													},
													children: [
														{
															tag: "div",
															attributes: {
																class: "events-left-congregate",
															},
															children: [
																{
																	tag: "div",
																	attributes: {
																		class: "event-time-left",
																	},
																	children: [
																		{
																			tag: "span",
																			content: "09:00 am",
																		},
																	],
																},
																{
																	tag: "div",
																	attributes: {
																		class: "event-sub-middle",
																	},
																	children: [
																		{
																			tag: "p",
																			content: "Botany",
																		},
																		{
																			tag: "p",
																			content: "Lorem ipsum dolor sit",
																		},
																	],
																},
															],
														},
														{
															tag: "div",
															attributes: {
																class: "event-timings",
															},
															children: [
																{
																	tag: "span",
																	content: "09:00 - 10:00 am",
																},
															],
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "events-container",
													},
													children: [
														{
															tag: "div",
															attributes: {
																class: "events-left-congregate",
															},
															children: [
																{
																	tag: "div",
																	attributes: {
																		class: "event-time-left",
																	},
																	children: [
																		{
																			tag: "span",
																			content: "10:00 am",
																		},
																	],
																},
																{
																	tag: "div",
																	attributes: {
																		class: "event-sub-middle",
																	},
																	children: [
																		{
																			tag: "p",
																			content: "Botany",
																		},
																		{
																			tag: "p",
																			content: "Lorem ipsum dolor sit",
																		},
																	],
																},
															],
														},
														{
															tag: "div",
															attributes: {
																class: "event-timings",
															},
															children: [
																{
																	tag: "span",
																	content: "10:00 - 11:00 am",
																},
															],
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "month-heading",
													},
													children: [
														{
															tag: "p",
															content: "10 Jan",
														},
														{
															tag: "span",
															children: [
																{
																	tag: "i",
																	attributes: {
																		class: "fa-solid fa-ellipsis",
																	},
																},
															],
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "events-container",
													},
													children: [
														{
															tag: "div",
															attributes: {
																class: "events-left-congregate",
															},
															children: [
																{
																	tag: "div",
																	attributes: {
																		class: "event-time-left",
																	},
																	children: [
																		{
																			tag: "span",
																			content: "08:00 am",
																		},
																	],
																},
																{
																	tag: "div",
																	attributes: {
																		class: "event-sub-middle",
																	},
																	children: [
																		{
																			tag: "p",
																			content: "Botany",
																		},
																		{
																			tag: "p",
																			content: "Lorem ipsum dolor sit",
																		},
																	],
																},
															],
														},
														{
															tag: "div",
															attributes: {
																class: "event-timings",
															},
															children: [
																{
																	tag: "span",
																	content: "08:00 - 09:00 am",
																},
															],
														},
													],
												},
											],
										},
									],
									// },
									// ],
								},
							],
						},
						{
							tag: "footer",
							attributes: {
								id: "footer",
							},
							children: [
								{
									tag: "div",
									attributes: {
										class: "footer-container",
									},
									children: [
										{
											tag: "p",
											content: "COPYRIGHT © 2022 DREAMGUYS.",
										},
									],
								},
							],
						},
					],
				},
			],
		},
	],
};

let temp = TemplateEngine.populate(docPageTemplate, docpageData);
console.log(temp);

let html = JsonToHtml.convert(temp);
console.log(html);
document.getElementById("app").innerHTML = html;

////////////////////////////////////////////////////////////////////////

// const inputContainer = document.querySelector(
//   "#nav .nav-container .middle-nav .input-container"
// );
// const inputEl = document.querySelector(
//   "#nav .nav-container .middle-nav .input-container input"
// );
// const modal = document.querySelector(".modal");
// const overlay = document.querySelector(".overlay");

// inputContainer.addEventListener("click", () => {
//   modal.classList.add("active");
//   overlay.classList.add("active");
//   inputEl.blur();
// });

// document.addEventListener(
//   "click",
//   (e) => {
//     if (e.target.matches(".modal")) return;
//   },
//   { once: true }
// );

// overlay.addEventListener("click", (e) => {
//   modal.classList.remove("active");
//   overlay.classList.remove("active");
// });

// // Active toggle
// const firstToggleBtnEls = document.querySelectorAll(
//   ".toggle-btn-container .first-toggle .toggle-first"
// );
// const firstToggleContasiner = document.querySelector(
//   ".toggle-btn-container .first-toggle"
// );

// const secondToggleBtnEls = document.querySelectorAll(
//   ".toggle-btn-container .second-toggle .toggle-first"
// );
// const secondToggleContasiner = document.querySelector(
//   ".toggle-btn-container .second-toggle"
// );

// firstToggleBtnEls.forEach((firstToggleBtnEl) => {
//   firstToggleBtnEl.addEventListener("click", () => {
//     document
//       .querySelector(".toggle-btn-container .first-toggle .toggle-first.active")
//       ?.classList.remove("active");
//     firstToggleBtnEl.classList.add("active");
//   });
// });

// secondToggleBtnEls.forEach((secondToggleBtnEl) => {
//   secondToggleBtnEl.addEventListener("click", () => {
//     document
//       .querySelector(
//         ".toggle-btn-container .second-toggle .toggle-first.active"
//       )
//       ?.classList.remove("active");
//     secondToggleBtnEl.classList.add("active");
//   });
// });

// // Dropdown popup
// const dropdownBtn = document.querySelector(".dropdown-attribute");
// const dropdownContainer = document.querySelector(".toggle-dropdown-container");

// dropdownBtn.addEventListener("click", (e) => {
//   dropdownContainer.classList.toggle("active");
// });

// const dropDown1 = document.querySelector(".dropd-1");
// const dropDown2 = document.querySelector(".dropd-2");
// const darkModeDropDown = document.querySelector(".darkmode-droppdown-popup");
// const versionModeDropDown = document.querySelector(".version-droppdown-popup");

// dropDown1.addEventListener("click", () => {
//   versionModeDropDown.classList.toggle("active");
// });

// dropDown2.addEventListener("click", () => {
//   darkModeDropDown.classList.toggle("active");
// });
