(() => {
  const builder = document.querySelector('[data-workout-builder]');
  if (!builder) return;

  const lang = builder.dataset.lang === 'zh-CN' ? 'zh' : 'en';
  const copy = {
    en: {
      minute: 'minutes',
      start: 'Start',
      pause: 'Pause',
      resume: 'Resume',
      reset: 'Reset',
      startLabel: 'Start timer',
      pauseLabel: 'Pause timer',
      resumeLabel: 'Resume timer',
      done: 'Done',
      returnTitle: 'When the timer ends',
      doneTitle: 'Beat complete — return to the agent',
      returnCue: 'Return to the agent, review the result, reply, then choose the next package.',
      treadmillCue: 'Slow the belt before stepping off. Return to the agent, review the result, reply, then choose the next package.'
    },
    zh: {
      minute: '分钟',
      start: '开始',
      pause: '暂停',
      resume: '继续',
      reset: '重置',
      startLabel: '开始计时',
      pauseLabel: '暂停计时',
      resumeLabel: '继续计时',
      done: '完成',
      returnTitle: '倒计时结束',
      doneTitle: '这一轮完成，回到 Agent',
      returnCue: '回到 agent，审阅结果、回复，然后选择下一份套餐。',
      treadmillCue: '先把跑步机减速再下来。回到 agent，审阅结果、回复，然后选择下一份套餐。'
    }
  }[lang];

  const plans = {
    en: {
      treadmill: {
        name: 'Treadmill',
        variants: {
          5: {
            title: 'Three quick run/walk intervals',
            summary: 'A short first beat that raises your heart rate without leaving the agent unattended for long.',
            steps: [
              ['0:00–1:00', 'Warm up', 'Walk at 4.0–5.0 km/h, incline 0–1%.'],
              ['1:00–4:00', '3 rounds: run 30 sec, walk 30 sec', 'Run at 7.0–9.0 km/h; recover at 4.0–5.5 km/h. New to running? Use a brisk 5.0–6.0 km/h walk at 4–7% incline instead.'],
              ['4:00–5:00', 'Cool down', 'Walk at 4.0–5.0 km/h and bring your breathing under control.']
            ]
          },
          10: {
            title: 'Six controlled run/walk intervals',
            summary: 'The default treadmill package: enough work to feel useful, short enough for a small agent task.',
            steps: [
              ['0:00–2:00', 'Warm up', 'Walk from 4.0 to 5.5 km/h, incline 0–2%.'],
              ['2:00–8:00', '6 rounds: run 30 sec, walk 30 sec', 'Run at 7.5–10.0 km/h; recover at 4.0–5.5 km/h. Keep the fast segment at about 7/10 effort, not an all-out sprint.'],
              ['8:00–10:00', 'Cool down', 'Walk at 4.0–5.0 km/h. Lower the incline to 0%.']
            ]
          },
          15: {
            title: 'Five one-minute running intervals',
            summary: 'Longer repetitions for an agent run you expect to take a little more time.',
            steps: [
              ['0:00–3:00', 'Progressive warm-up', 'Start at 4.0 km/h and build to 5.5 km/h, incline 0–2%.'],
              ['3:00–13:00', '5 rounds: run 1 min, walk 1 min', 'Run at 7.0–9.0 km/h; recover at 4.0–5.5 km/h. Choose a running speed you could hold for one more round.'],
              ['13:00–15:00', 'Cool down', 'Walk at 4.0–5.0 km/h, incline 0%. Do not jump onto the side rails while the belt is moving.']
            ]
          }
        }
      },
      machines: {
        name: 'Full body machines',
        variants: {
          5: {
            title: 'One safe working set',
            summary: 'Use the first unfinished exercise in this queue: leg press → chest press → lat pulldown → seated leg curl.',
            steps: [
              ['0:00–2:00', 'Set up', 'Adjust the machine and do 10 light practice reps.'],
              ['2:00–3:00', 'Working set', 'Do 8–12 controlled reps. The last 2 should feel hard without changing your form.'],
              ['3:00–5:00', 'Record and return', 'Note the weight and completed set. Walk back to review the agent. Continue the same exercise next beat until you reach 3 working sets.']
            ]
          },
          10: {
            title: 'Finish one machine',
            summary: 'Choose the first unfinished exercise: leg press → chest press → lat pulldown → seated leg curl.',
            steps: [
              ['0:00–2:00', 'Set up and warm up', 'Adjust the machine and do 10 light reps.'],
              ['2:00–8:30', '3 working sets', 'Do 8–12 reps per set. Rest 60–90 seconds; stop the set when your form changes.'],
              ['8:30–10:00', 'Record and return', 'Note the weight and reps, then return to review. Use the next exercise on the next agent run.']
            ]
          },
          15: {
            title: 'Pair two nearby machines',
            summary: 'Pair leg press with chest press, or lat pulldown with seated leg curl. Avoid claiming machines across the gym.',
            steps: [
              ['0:00–2:00', 'Set up', 'Do one light set of 10 reps on each machine.'],
              ['2:00–13:00', 'Alternate for 3 rounds', 'Do 8–12 reps on machine A, rest 60 seconds, then 8–12 on machine B. Repeat until each has 3 working sets.'],
              ['13:00–15:00', 'Record and return', 'Note both weights and reps. Return after the sixth set; do not start a third exercise.']
            ]
          }
        }
      },
      bodyweight: {
        name: 'No equipment',
        variants: {
          5: {
            title: 'One five-move circuit',
            summary: 'Stay near the screen. Work for 40 seconds and change exercises for 20 seconds.',
            steps: [
              ['0:00–1:00', 'Chair squat', 'Sit back toward a bench or chair, then stand tall.'],
              ['1:00–2:00', 'Incline push-up', 'Use a bench or sturdy counter; keep your body in one line.'],
              ['2:00–3:00', 'Alternating reverse lunge', 'Step back gently, or repeat chair squats if lunges bother your knees.'],
              ['3:00–4:00', 'Glute bridge', 'Pause for one second at the top of each rep.'],
              ['4:00–5:00', 'Dead bug', 'Move opposite arm and leg slowly while keeping your lower back steady.']
            ]
          },
          10: {
            title: 'Two rounds of the five-move circuit',
            summary: 'Repeat the same circuit twice: 40 seconds of work, 20 seconds to change position.',
            steps: [
              ['Round 1 · 0:00–5:00', 'Build the pattern', 'Chair squat → incline push-up → reverse lunge → glute bridge → dead bug.'],
              ['Round 2 · 5:00–10:00', 'Repeat with control', 'Use the same order. Slow down rather than sacrificing range or form.']
            ]
          },
          15: {
            title: 'Three rounds of the five-move circuit',
            summary: 'A complete no-equipment strength beat with no station changes.',
            steps: [
              ['Round 1 · 0:00–5:00', 'Warm into it', 'Chair squat → incline push-up → reverse lunge → glute bridge → dead bug.'],
              ['Round 2 · 5:00–10:00', 'Steady work', 'Repeat the circuit at a pace that leaves 2–3 good reps in reserve.'],
              ['Round 3 · 10:00–15:00', 'Clean finish', 'Repeat once more. Stop any movement that causes sharp pain.']
            ]
          }
        }
      },
      recovery: {
        name: 'Recovery',
        variants: {
          5: {
            title: 'Five-minute desk reset',
            summary: 'Use this after several coding rounds or between harder training packages.',
            steps: [
              ['0:00–1:00', 'Easy walk and breathe', 'Inhale through your nose for 4 counts; exhale for 6.'],
              ['1:00–2:00', 'Chest opener', 'Clasp your hands behind you or place one hand on a wall, 30 seconds per side.'],
              ['2:00–3:00', 'Hip flexor stretch', 'Half-kneel or split your stance, 30 seconds per side.'],
              ['3:00–4:00', 'Calf stretch', 'Keep the back heel down, 30 seconds per side.'],
              ['4:00–5:00', 'Shoulder circles', 'Move slowly, then take three long breaths before returning.']
            ]
          },
          10: {
            title: 'Walk plus mobility reset',
            summary: 'A low-intensity beat when you need movement more than another hard set.',
            steps: [
              ['0:00–4:00', 'Easy walk', 'Walk at a pace where nasal breathing stays comfortable.'],
              ['4:00–6:00', 'Hip flexor and calf', 'Hold each side for 30 seconds, then repeat.'],
              ['6:00–8:00', 'Chest and upper back', 'Alternate a wall chest stretch with slow upper-back rotations.'],
              ['8:00–10:00', 'Breathing reset', 'Inhale for 4 counts and exhale for 6 while walking slowly.']
            ]
          },
          15: {
            title: 'Full recovery walk',
            summary: 'Choose this after a hard strength beat or when the agent task needs a longer unattended run.',
            steps: [
              ['0:00–8:00', 'Easy walk', 'Keep the pace conversational; this is recovery, not conditioning.'],
              ['8:00–11:00', 'Lower-body mobility', 'Alternate hip flexor, calf, and gentle hamstring stretches.'],
              ['11:00–14:00', 'Upper-body mobility', 'Do slow shoulder circles, a chest stretch, and upper-back rotations.'],
              ['14:00–15:00', 'Breathe and return', 'Take five long breaths and let your heart rate settle.']
            ]
          }
        }
      }
    },
    zh: {
      treadmill: {
        name: '跑步机',
        variants: {
          5: {
            title: '三轮短跑走间歇',
            summary: '第一轮先短一点：把心率提起来，但不用让 agent 长时间等你。',
            steps: [
              ['0:00–1:00', '热身', '时速 4.0–5.0 公里，坡度 0–1%，轻松走。'],
              ['1:00–4:00', '3 轮：跑 30 秒，走 30 秒', '跑步时速 7.0–9.0 公里，恢复时速 4.0–5.5 公里。刚开始跑？改成时速 5.0–6.0 公里、坡度 4–7% 的快走。'],
              ['4:00–5:00', '冷却', '时速 4.0–5.0 公里慢走，让呼吸稳定下来。']
            ]
          },
          10: {
            title: '六轮可控的跑走间歇',
            summary: '跑步机的默认套餐：运动量足够，又能赶在一个小型 agent 任务后回来。',
            steps: [
              ['0:00–2:00', '热身', '从时速 4.0 逐渐加到 5.5 公里，坡度 0–2%。'],
              ['2:00–8:00', '6 轮：跑 30 秒，走 30 秒', '跑步时速 7.5–10.0 公里，恢复时速 4.0–5.5 公里。快速段保持在七成力，不要全力冲刺。'],
              ['8:00–10:00', '冷却', '时速 4.0–5.0 公里慢走，坡度降到 0%。']
            ]
          },
          15: {
            title: '五轮一分钟跑步间歇',
            summary: '适合预期稍久一点的 agent 任务，快速段更长，但仍然留有余力。',
            steps: [
              ['0:00–3:00', '渐进热身', '从时速 4.0 逐渐加到 5.5 公里，坡度 0–2%。'],
              ['3:00–13:00', '5 轮：跑 1 分钟，走 1 分钟', '跑步时速 7.0–9.0 公里，恢复时速 4.0–5.5 公里。跑速以还能多完成一轮为准。'],
              ['13:00–15:00', '冷却', '时速 4.0–5.0 公里，坡度 0%。跑带还在动时，不要跳上两侧踏板。']
            ]
          }
        }
      },
      machines: {
        name: '全身器械',
        variants: {
          5: {
            title: '完成一组有效训练',
            summary: '从第一个没做完的动作开始：腿举 → 坐姿推胸 → 高位下拉 → 坐姿腿弯举。',
            steps: [
              ['0:00–2:00', '调整器械', '调好座椅和重量，用轻重量做 10 次练习。'],
              ['2:00–3:00', '有效训练组', '做 8–12 次，最后 2 次明显吃力，但动作不能变形。'],
              ['3:00–5:00', '记录并返回', '记下重量和已完成组数，走回去审阅 agent。下一轮继续同一动作，累计到 3 个有效组再换。']
            ]
          },
          10: {
            title: '完成一个器械动作',
            summary: '选择第一个没做完的动作：腿举 → 坐姿推胸 → 高位下拉 → 坐姿腿弯举。',
            steps: [
              ['0:00–2:00', '调整和热身', '调好器械，用轻重量做 10 次。'],
              ['2:00–8:30', '3 个有效组', '每组 8–12 次，组间休息 60–90 秒；动作开始变形就结束这一组。'],
              ['8:30–10:00', '记录并返回', '记下重量和次数，然后回去审阅。下一轮 agent 任务换队列里的下一个动作。']
            ]
          },
          15: {
            title: '配对两个相邻器械',
            summary: '腿举配坐姿推胸，或高位下拉配坐姿腿弯举；不要占着相隔很远的两台器械。',
            steps: [
              ['0:00–2:00', '调整器械', '两个动作各用轻重量做 10 次。'],
              ['2:00–13:00', '交替完成 3 轮', '器械 A 做 8–12 次，休息 60 秒，再去器械 B 做 8–12 次；各完成 3 个有效组。'],
              ['13:00–15:00', '记录并返回', '记下两个动作的重量和次数。第 6 组结束就回来，不再开始第三个动作。']
            ]
          }
        }
      },
      bodyweight: {
        name: '无器械',
        variants: {
          5: {
            title: '一轮五动作循环',
            summary: '可以留在屏幕附近。每个动作练 40 秒，用 20 秒换动作。',
            steps: [
              ['0:00–1:00', '椅子深蹲', '臀部向椅子或长凳坐下，再站直。'],
              ['1:00–2:00', '上斜俯卧撑', '双手撑长凳或稳固桌面，身体保持一条直线。'],
              ['2:00–3:00', '交替后撤弓步', '轻轻向后落步；如果膝盖不舒服，就继续做椅子深蹲。'],
              ['3:00–4:00', '臀桥', '每次到最高点停一秒，再慢慢放下。'],
              ['4:00–5:00', '死虫式', '缓慢移动对侧手脚，保持下背部稳定。']
            ]
          },
          10: {
            title: '两轮五动作循环',
            summary: '同一套循环做两遍：练 40 秒，用 20 秒换位置。',
            steps: [
              ['第 1 轮 · 0:00–5:00', '熟悉动作', '椅子深蹲 → 上斜俯卧撑 → 后撤弓步 → 臀桥 → 死虫式。'],
              ['第 2 轮 · 5:00–10:00', '保持控制', '按相同顺序再做一遍。宁可放慢，也不要牺牲动作幅度和姿势。']
            ]
          },
          15: {
            title: '三轮五动作循环',
            summary: '不需要换器械，也能完成一轮完整的全身力量训练。',
            steps: [
              ['第 1 轮 · 0:00–5:00', '逐渐进入状态', '椅子深蹲 → 上斜俯卧撑 → 后撤弓步 → 臀桥 → 死虫式。'],
              ['第 2 轮 · 5:00–10:00', '稳定训练', '重复循环，速度以每个动作还能再做好 2–3 次为准。'],
              ['第 3 轮 · 10:00–15:00', '干净结束', '再重复一次。任何动作引起尖锐疼痛，就停止该动作。']
            ]
          }
        }
      },
      recovery: {
        name: '恢复活动',
        variants: {
          5: {
            title: '五分钟身体重置',
            summary: '连续几轮 coding 之后，或者两个高强度套餐之间，用这一组恢复。',
            steps: [
              ['0:00–1:00', '轻松走和呼吸', '用鼻子吸气 4 拍，呼气 6 拍。'],
              ['1:00–2:00', '胸部伸展', '双手在背后相扣，或单手扶墙，每侧 30 秒。'],
              ['2:00–3:00', '髋屈肌伸展', '采用半跪姿或前后站姿，每侧 30 秒。'],
              ['3:00–4:00', '小腿伸展', '后脚跟保持着地，每侧 30 秒。'],
              ['4:00–5:00', '肩部画圈', '缓慢活动，最后做三次长呼吸再返回。']
            ]
          },
          10: {
            title: '步行加活动度重置',
            summary: '需要活动身体、但不适合再练一组高强度动作时，选择这一档。',
            steps: [
              ['0:00–4:00', '轻松步行', '保持可以舒服地用鼻子呼吸的速度。'],
              ['4:00–6:00', '髋部和小腿', '髋屈肌、小腿每侧保持 30 秒，然后重复一次。'],
              ['6:00–8:00', '胸部和上背', '交替做扶墙胸部伸展和缓慢的上背旋转。'],
              ['8:00–10:00', '呼吸重置', '慢走时吸气 4 拍、呼气 6 拍。']
            ]
          },
          15: {
            title: '完整恢复步行',
            summary: '完成高强度力量节拍之后，或者 agent 需要更长运行时间时选它。',
            steps: [
              ['0:00–8:00', '轻松步行', '保持能正常对话的速度；这一轮是恢复，不是体能测试。'],
              ['8:00–11:00', '下肢活动', '依次做髋屈肌、小腿和轻柔的腿后侧伸展。'],
              ['11:00–14:00', '上肢活动', '缓慢做肩部画圈、胸部伸展和上背旋转。'],
              ['14:00–15:00', '呼吸并返回', '做五次长呼吸，让心率稳定下来。']
            ]
          }
        }
      }
    }
  }[lang];

  const packageButtons = [...builder.querySelectorAll('[data-package]')];
  const durationButtons = [...builder.querySelectorAll('[data-duration]')];
  const kicker = builder.querySelector('[data-prescription-kicker]');
  const title = builder.querySelector('[data-prescription-title]');
  const summary = builder.querySelector('[data-prescription-summary]');
  const minutePlan = builder.querySelector('[data-minute-plan]');
  const timerOutput = builder.querySelector('[data-timer-output]');
  const timerToggle = builder.querySelector('[data-timer-toggle]');
  const timerReset = builder.querySelector('[data-timer-reset]');
  const timerProgress = builder.querySelector('[data-timer-progress]');
  const returnTitle = builder.querySelector('[data-return-title]');
  const returnCue = builder.querySelector('[data-return-cue]');

  let selectedPackage = 'treadmill';
  let selectedDuration = 5;
  let totalSeconds = selectedDuration * 60;
  let remainingSeconds = totalSeconds;
  let timerId = null;
  let targetTime = null;

  try {
    const storedPackage = localStorage.getItem('jam-coding-package');
    const storedDuration = Number(localStorage.getItem('jam-coding-duration'));
    if (plans[storedPackage]) selectedPackage = storedPackage;
    if ([5, 10, 15].includes(storedDuration)) selectedDuration = storedDuration;
  } catch (_) {
    // The selector still works when storage is unavailable.
  }

  function setPressed(buttons, attribute, value) {
    buttons.forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset[attribute] === String(value)));
    });
  }

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }

  function setToggleState(state) {
    const labels = {
      start: ['▶', copy.start, copy.startLabel],
      pause: ['Ⅱ', copy.pause, copy.pauseLabel],
      resume: ['▶', copy.resume, copy.resumeLabel]
    }[state];
    timerToggle.replaceChildren();
    const icon = document.createElement('span');
    icon.setAttribute('aria-hidden', 'true');
    icon.textContent = labels[0];
    timerToggle.append(icon, ` ${labels[1]}`);
    timerToggle.setAttribute('aria-label', labels[2]);
    timerToggle.title = labels[2];
  }

  function updateTimerDisplay() {
    timerOutput.textContent = formatTime(remainingSeconds);
    timerProgress.style.width = `${((totalSeconds - remainingSeconds) / totalSeconds) * 100}%`;
  }

  function stopTimer() {
    if (timerId) window.clearInterval(timerId);
    timerId = null;
    targetTime = null;
  }

  function resetTimer() {
    stopTimer();
    totalSeconds = selectedDuration * 60;
    remainingSeconds = totalSeconds;
    timerOutput.classList.remove('is-done');
    returnTitle.textContent = copy.returnTitle;
    setToggleState('start');
    updateTimerDisplay();
  }

  function completeTimer() {
    stopTimer();
    remainingSeconds = 0;
    timerOutput.classList.add('is-done');
    timerOutput.textContent = copy.done;
    timerProgress.style.width = '100%';
    returnTitle.textContent = copy.doneTitle;
    setToggleState('start');
    if ('vibrate' in navigator) navigator.vibrate([180, 100, 180]);
  }

  function tick() {
    remainingSeconds = Math.max(0, Math.ceil((targetTime - Date.now()) / 1000));
    updateTimerDisplay();
    if (remainingSeconds === 0) completeTimer();
  }

  function startTimer() {
    if (remainingSeconds === 0) remainingSeconds = totalSeconds;
    targetTime = Date.now() + remainingSeconds * 1000;
    timerOutput.classList.remove('is-done');
    returnTitle.textContent = copy.returnTitle;
    setToggleState('pause');
    updateTimerDisplay();
    timerId = window.setInterval(tick, 250);
  }

  function pauseTimer() {
    tick();
    if (remainingSeconds === 0) return;
    stopTimer();
    setToggleState('resume');
  }

  function renderPlan() {
    const program = plans[selectedPackage];
    const variant = program.variants[selectedDuration];
    kicker.textContent = `${program.name} · ${selectedDuration} ${copy.minute}`;
    title.textContent = variant.title;
    summary.textContent = variant.summary;
    minutePlan.replaceChildren(...variant.steps.map(([time, name, detail]) => {
      const item = document.createElement('li');
      const timeElement = document.createElement('span');
      const body = document.createElement('div');
      const heading = document.createElement('strong');
      const description = document.createElement('p');
      timeElement.className = 'plan-time';
      timeElement.textContent = time;
      heading.textContent = name;
      description.textContent = detail;
      body.append(heading, description);
      item.append(timeElement, body);
      return item;
    }));
    returnCue.textContent = selectedPackage === 'treadmill' ? copy.treadmillCue : copy.returnCue;
    setPressed(packageButtons, 'package', selectedPackage);
    setPressed(durationButtons, 'duration', selectedDuration);
    resetTimer();
  }

  packageButtons.forEach((button) => {
    button.addEventListener('click', () => {
      selectedPackage = button.dataset.package;
      try { localStorage.setItem('jam-coding-package', selectedPackage); } catch (_) {}
      renderPlan();
    });
  });

  durationButtons.forEach((button) => {
    button.addEventListener('click', () => {
      selectedDuration = Number(button.dataset.duration);
      try { localStorage.setItem('jam-coding-duration', String(selectedDuration)); } catch (_) {}
      renderPlan();
    });
  });

  timerToggle.addEventListener('click', () => {
    if (timerId) pauseTimer();
    else startTimer();
  });
  timerReset.addEventListener('click', resetTimer);

  renderPlan();
})();
