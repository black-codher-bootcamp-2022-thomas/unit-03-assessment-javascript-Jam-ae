import { dates } from "./data.js";

const timeline = document.querySelector(".timeline");
function getCard(index) {
  const { date, title, image, fullDescription } = dates[index];

  const modalFullDescription = document.createElement("p");
  const modalImage = document.createElement("img");
  const modalCloseButton = document.createElement("span");

  const modalContainer = document.createElement("div");
  const modalDate = document.createElement("span");
  const modalTitle = document.createElement("h2");

  modalCloseButton.setAttribute("id", "modal-close-button");
  modalImage.setAttribute("id", "modal-image");
  modalImage.setAttribute("src", image);
  modalImage.setAttribute("alt", title);

  modalContainer.setAttribute("id", "modal-container");
  modalDate.setAttribute("id", "modal-date");
  modalTitle.setAttribute("id", "modal-title");
  modalFullDescription.setAttribute("id", "modal-full-description");

  const dateText = document.createTextNode(date);
  const titleText = document.createTextNode(title);
  const fullDescriptionText = document.createTextNode(fullDescription);

  modalDate.appendChild(dateText);
  modalTitle.appendChild(titleText);
  modalFullDescription.appendChild(fullDescriptionText);

  modalContainer.appendChild(modalDate);
  modalContainer.appendChild(modalTitle);
  modalContainer.appendChild(modalFullDescription);
  modalContainer.appendChild(modalImage);

  modalContainer.style.display = "flex";
  timeline.prepend(modalContainer);

}
dates.map(({ date, title, summary }, index) => {
  const timelineItemSummary = document.createElement("p");
  const timelineItemTitle = document.createElement("h2");
  const timelineItem = document.createElement("div");

  const timelineItemMoreInformationButton = document.createElement("button");
  const timelineItemDate = document.createElement("span");

  const summaryText = document.createTextNode(summary);
  const titleText = document.createTextNode(title);
  const timelineItemMoreInformationText =
    document.createTextNode("More information");
  const dateText = document.createTextNode(date);

  timelineItem.setAttribute("class", "timeline-item");
  timelineItemTitle.setAttribute("class", "timeline-item-title");
  timelineItemDate.setAttribute("class", "timeline-item-date");
  timelineItemSummary.setAttribute("class", "timeline-item-summary");

  timelineItemMoreInformationButton.setAttribute("data-index", index);
  timelineItemMoreInformationButton.setAttribute(
    "class",
    "timeline-item-more-information"
  );
  timelineItemTitle.appendChild(titleText);

  timelineItemDate.appendChild(dateText);
  timelineItemSummary.appendChild(summaryText);
  timelineItemMoreInformationButton.appendChild(
    timelineItemMoreInformationText
  );

  timelineItem.appendChild(timelineItemTitle);
  timelineItem.appendChild(timelineItemDate);
  timelineItem.appendChild(timelineItemSummary);
  timelineItem.appendChild(timelineItemMoreInformationButton);

  timelineItemMoreInformationButton.addEventListener(
    "click",
    (e) => {
      e.preventDefault();
      const index = e.target.getAttribute("data-index");
      if (index) getCard(index);
    },
    false
  );
  timeline.appendChild(timelineItem);
});