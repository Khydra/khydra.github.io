function usePassive(user, e=0) {
	let n = Math.floor(Math.random() * 100).toFixed(1);
	switch (user.id) {
	  	case 0: 
			if (user.passive.value[0]>n) {
				passiveStadistics[0].value[0]++;
				roster.forEach((p)=>{
					if (p!=null) {
						fatigueChangePenguin(p,-user.passive.value[1]);
						passiveStadistics[0].value[1] += user.passive.value[1];
						achievement[20].progress += user.passive.value[1];
					}
				});
			} break;
	  	case 1: 
			if (user.passive.value[0]>n) {
				passiveStadistics[1].value[0]++;
				roster.forEach((p)=>{
					if (p!=null) {
						healthChangePenguin(p, user.passive.value[1]);
						achievement[21].progress += user.passive.value[1];
						passiveStadistics[1].value[1] += user.passive.value[1];
					}
				});
			} break;
	  	case 2: 
		  	if (e==0) {
		  		if (user.passive.limit==0) return
				if (user.passive.value[0]>n) {
					passiveStadistics[2].value[0]++;
					user.passive.limit-=1;
					let dmg = Math.ceil((enemy.hp[1]*user.passive.value[1])/100)
					damageEnemy(dmg,user.position,1,user.type);
					achievement[22].progress+=dmg;
					passiveStadistics[2].value[1]+=dmg;
				} 
			} else if (e==1) user.passive.limit = user.passive.value[2];
	  		break;
	  	case 3: 
		  	if (e==0) {
		  		if (user.passive.value[2]==user.passive.actual[0]) return;
				if (user.passive.value[0]>n) {
					passiveStadistics[3].value[0]++;
					user.pow[1]+=user.passive.value[1];
					user.passive.actual[1]+=user.passive.value[1];
					user.passive.actual[0]+=1;
					achievement[23].progress += user.passive.value[1];
					passiveStadistics[3].value[1] += user.passive.value[1];
				}
		  	} else if (e==2) {
		  		user.passive.actual[0]=0;
				user.passive.actual[1]=0;
		  	} break;
	  	case 4:
	  		if (e==1) {
	  			if (user.passive.value[0]>n) {
					passiveStadistics[4].value[0]++;
					user.pow[0] += user.passive.value[1];
					user.passive.actual[0] += user.passive.value[1];
					achievement[24].progress += user.passive.value[1];
					passiveStadistics[4].value[1] += user.passive.value[1];
				}
	  		} break;
	  	case 5:
	  		if (user.passive.value[0]>n) {
				passiveStadistics[5].value[0]++;
				roster.forEach((p)=>{
					if (p!=null && (p.type[0]==12 || p.type[1]==12)) {
						p.spd[0]+=user.passive.value[1]*10;
						healthChangePenguin(p, user.passive.value[2]);
						fatigueChangePenguin(p,-user.passive.value[3]);
						achievement[25].progress += 1;
						passiveStadistics[5].value[1]+=user.passive.value[2];
						passiveStadistics[5].value[2]+=user.passive.value[3];
					}
				})
			} break;
	  	case 6:
	  		if (e==0) {
		  		if (user.passive.value[2]==user.passive.actual[0]) return;
				let debuff = Math.floor((user.passive.value[1]*user.passive.value[2])/100);
				if (debuff>user.passive.actual[0]) debuff = user.passive.actual[0];
				user.pow[1] -= debuff;
				user.passive.actual[0] -= debuff;
		  	} else if (e==2) {
		  		user.pow[1] = 0;
				user.passive.actual[0] = 0;
		  	} else if(e==3) {
		  		if (user.passive.actual[0] == user.passive.value[1]) return;
				passiveStadistics[6].value[0]++;
				let buff = user.passive.value[0];
				if (user.passive.actual[0]+user.passive.value[0]>user.passive.value[1]) buff = user.passive.value[1] - user.passive.actual[0];
				user.pow[1] += buff;
				user.passive.actual[0] += buff;
				achievement[26].progress += buff;
				passiveStadistics[6].value[1] += buff;
		  	} break;
	  	case 7:
	  		if (e==0) {
		  		if (user.passive.value[2] == user.passive.actual[0]) return;
				if (user.passive.value[0]>n) {
					passiveStadistics[7].value[0]++;
					let buff = user.passive.value[1];
					if (user.passive.actual[0]+user.passive.value[1]<user.passive.value[2]) buff = user.passive.value[2] - user.passive.actual[0];
					user.spd[1] += buff*10;
					user.passive.actual[0] += buff;
					passiveStadistics[7].value[1] += buff;
				}
		  	} else if (e==2) {
		  		user.spd[1] -= user.passive.actual[0]*10;
				user.passive.actual[0] = 0;
		  	} break;
	  	case 8:
	  		if (user.passive.value[0]>n) {
				passiveStadistics[8].value[0]++;
				let dmg = Math.ceil((user.pow[0]*user.passive.value[2])/100);
				for (let i=0; i<user.passive.value[1];i++) {
					let crt = false;
					let dmgX = dmg;
					if (types[10].bonus[types[10].lvl]>n) {
						crt = true;
						dmgX=Math.ceil(dmg*1.25);
					}
					passiveStadistics[8].value[1]++;
					passiveStadistics[8].value[2]+=dmgX;
					damageEnemy(dmg,user.position,1,user.type,crt);
				}
			} break;
		case 9:
			if (user.passive.value[0]>n) {
				passiveStadistics[9].value[0]++;
				user.hp[1] += user.passive.value[2];
				user.passive.actual[0] += user.passive.value[2];
				achievement[29].progress += user.passive.value[2];
				passiveStadistics[9].value[1] += user.passive.value[2];
				roster.forEach((p)=>{
					if (p!=null && p.id!=9) {
						healthChangePenguin(p, user.passive.value[2]);
						passiveStadistics[9].value[2]+=user.passive.value[1]
					}
				})
			} break;
		case 10:
			if (e==0) {
				if (user.passive.active) return;
				if (user.passive.value[0]>n) {
					passiveStadistics[10].value[0]++;
					user.passive.active = true;
					let x = Math.floor(Math.random() * 150)+50;
					let y = Math.floor(Math.random() * 150)+50;
					_enemy.appendChild(mark10);
					mark10.style.top = `${y}px`;
					mark10.style.left = `${x}px`;
				}
		  	} else if (e==1 || e==2) {
				if (user.passive.active) _enemy.removeChild(mark10);
				user.passive.active = false;
		  	} break;
		case 11:
			if (user.passive.value[0]>n) {
				passiveStadistics[11].value[0]++;
				let dmg = user.passive.value[1];
				minePenguins.forEach((p)=>{
					if (p!=null) {
						dmg+=user.passive.value[2];
						passiveStadistics[11].value[2]++;
						achievement[31].progress++;
					}
				});
				passiveStadistics[11].value[1]+=dmg;
				damageEnemy(dmg,user.position,1,user.type);
			} break;
		case 12:
			if (user.fatigue[0]>=user.fatigue[1]) return;
			fatigueChangePenguin(user, user.passive.value[0]);
			passiveStadistics[12].value[1]++;
			passiveStadistics[12].value[2]+=user.passive.value[0];
			if (user.passive.value[1]>n) {
				passiveStadistics[12].value[0]++;
				achievement[32].progress++;
				roster.forEach((p)=>{
					if (p!=null) {
						healthChangePenguin(p, user.passive.value[2]);
						passiveStadistics[12].value[3]+=user.passive.value[2];
					}
				})
			} break;
		case 13:
			if (user.fatigue[0]>=user.fatigue[1]) return;
			fatigueChangePenguin(user, user.passive.value[0]);
			passiveStadistics[13].value[1]++;
			passiveStadistics[13].value[2]+=user.passive.value[0];
			if (user.passive.value[1]>n) {
				passiveStadistics[13].value[0]++;
				achievement[33].progress++;
				roster.forEach((p,index)=>{
					if (p!=null) {
						fatigueChangePenguin(p, -user.passive.value[2]);
						passiveStadistics[13].value[3]+=user.passive.value[2];
					}
				})
			} break;
		case 14:
			if (user.fatigue[0]>=user.fatigue[1] || enemy.status[9]) return;
			fatigueChangePenguin(user, user.passive.value[0]);
			passiveStadistics[14].value[1]++;
			passiveStadistics[14].value[2]+=user.passive.value[0];
			if (user.passive.value[1]<n) {
				passiveStadistics[14].value[0]++;
				achievement[34].progress++;
				enemy.status[9] = true;
				iconDescriptionsEnemy();
				iconImageEnemy();
			} break;
		case 15:
			if (user.fatigue[0]>=user.fatigue[1]) return;
			fatigueChangePenguin(user, user.passive.value[0]);
			passiveStadistics[15].value[1]++;
			passiveStadistics[15].value[2]+=user.passive.value[0];
			if (user.passive.value[1]>n) {
				passiveStadistics[15].value[0]++;
				achievement[35].progress++;
				passiveStadistics[15].value[3]+=user.passive.value[2];
				let dmg = user.passive.value[2];
				damageEnemy(dmg,user.position,1,user.type);
			} break;
		case 16:
			if (user.exhausted) return;
			if (user.passive.value[0]>n) {
				passiveStadistics[16].value[0]++;
				roster.forEach((p)=>{if (p!=null && p.id==16) healthChangePenguin(p, user.passive.value[2]);})
				let dmg = user.passive.value[1];
				damageEnemy(dmg,user.position,1,user.type);
				achievement[36].progress += user.passive.value[1];
				passiveStadistics[16].value[1] += user.passive.value[1];
				passiveStadistics[16].value[2] += user.passive.value[2];
			} break;
		case 17:
			if (user.hp[0]<1 || user.fatigue[0]>=user.fatigue[1]) return;
			let dmg = Math.floor(user.passive.value[1]/10)
			damageEnemy(dmg,user.position,1,user.type);
			fatigueChangePenguin(user, user.passive.value[0]/10);
			achievement[37].progress += user.passive.value[1]/10;
			passiveStadistics[17].value[0] += user.passive.value[0]/10;
			passiveStadistics[17].value[1] += user.passive.value[1]/10;
			break;
		case 18:
			if (user.passive.actual[0]==300) {
			user.passive.actual[0]=0;
			let dmg = user.passive.value[2];
			damageEnemy(dmg,user.position,1,user.type);
			passiveStadistics[18].value[2]+=user.passive.value[2];
		} else {
			if (user.passive.value[0]>n) {
				passiveStadistics[18].value[0]++;
				user.passive.actual[0]+=user.passive.value[1];
				achievement[38].progress+=user.passive.value[1];
				passiveStadistics[18].value[1]+=user.passive.value[1];
				if (user.passive.actual[0]>300) user.passive.actual[0] = 300;
			}
		} break;
		case 19:
			if (user.passive.value[0]>n) {
				passiveStadistics[19].value[0]++;
				let dmg = user.passive.value[1];
				roster.forEach((p)=>{
					if (p!=null && (p.id>=19 && p.id<=22)) {
						dmg += user.passive.value[2];
					}
				});
				passiveStadistics[19].value[1] += dmg;
				achievement[39].progress += dmg;
				damageEnemy(dmg,user.position,1,user.type);
			} break;
		case 20:
			if (user.passive.value[0]>n) {
				passiveStadistics[20].value[0]++;
				roster.forEach((p)=>{
				if (p!=null && (p.id>=19 && p.id<=22)) {
					fatigueChangePenguin(p, user.passive.value[1]);
					passiveStadistics[20].value[1] -= user.passive.value[1];
					achievement[40].progress -= user.passive.value[1];
				}
			});	
		} break;
		case 21:
			if (user.passive.value[0]>n) {
				passiveStadistics[21].value[0]++;
				roster.forEach((p)=>{
					if (p!=null && (p.id>=19 && p.id<=22)) {
						healthChangePenguin(p, user.passive.value[1]);
						passiveStadistics[21].value[1] += user.passive.value[1];
						achievement[41].progress += user.passive.value[1];
					}
				});
			} break;
		case 22:
			if (user.passive.value[0]>n) {
			passiveStadistics[22].value[0]++;
			roster.forEach((p)=>{
				if (p!=null && (p.id>=19 && p.id<=22)) {
					p.pow[1]+=user.passive.value[1];
					passiveStadistics[22].value[1] += user.passive.value[1];
					achievement[42].progress += user.passive.value[1];
				}
			});
		} break;
		case 23:
			if (user.passive.value[0]>n) {
				passiveStadistics[23].value[0]++;
				let dmg = user.passive.value[1];
				damageEnemy(dmg,user.position,1,user.type);
				passiveStadistics[23].value[1]+=dmg;
				roster.forEach((p)=>{
					if (p!=null) {
						 achievement[43].progress++
						let allyDmg = user.passive.value[2];
						healthChangePenguin(p, -allyDmg);
						passiveStadistics[23].value[2]+=allyDmg;
					}			
				});
			} break;
		case 24:
			if (user.passive.value[0]>n) {
				passiveStadistics[24].value[0]++;
				let dmg = Math.floor(penguin[24].hp[1]*(penguin[24].passive.value[1]/100));
				healthChangePenguin(user, -dmg);
				passiveStadistics[24].value[1]+=dmg;
				if (user.hp[0]==0) achievement[44].progress++;
				//buffo a un pingu:
				roster.forEach((p)=>{
					if (p!=null && (p.type[0].id==0 || p.type[1].id==0)) {
						healthChangePenguin(p, user.passive.value[3]);
						fatigueChangePenguin(p,-user.passive.value[4]);
						p.pow[1] += user.passive.value[2];
						if (p==actualPenguin) displayPenguin(p);
					}
				})
			} break;
	}
}

const mark10 = document.createElement('div');
mark10.id = `mark10`;

mark10.addEventListener('click',()=>{
	let dmg = penguin[10].passive.value[1];
	damageEnemy(dmg,penguin[10].position,1,penguin[10].type);
	achievement[30].progress++;
	passiveStadistics[10].value[1]++;
	passiveStadistics[10].value[2] += penguin[10].passive.value[1];
	penguin[10].passive.active = false;
	_enemy.removeChild(mark10);
})