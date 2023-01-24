/**
 * ---------------------------------------------------------------------------------
 * | 백그라운드 |
 * ---------------------------------------------------------------------------------
 * - 디폴트 컬러를 지정하여 스토리지 API 를 호출하여 지정한 색을 저장시킵니다.
 **/
let weather = "snow";

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ weather });
  console.log("기본 배경은 %cgreen", `color: ${weather}`);
});
